import { inngest } from "../client";
import { db } from "~/server/db";
import {
  templateService,
  organizationService,
  createVoiceProviderService,
  createCallProviderWithFailover,
  createStorageProviderService,
} from "~/server/services";

interface ReminderEventData {
  reminderId: string;
  orgId: string;
}

interface LoadedReminder {
  id: string;
  templateId: string;
  clientFirstName: string;
  clientLastName: string;
  clientPreferredName: string | null;
  clientPhoneNumber: string;
  voiceProviderId: string;
  appointmentTime: string;
  orgId: string;
  orgOutboundPhone: string;
  userId: string;
}

/**
 * Execute a scheduled reminder as an Inngest step function.
 * Each step is individually retriable.
 *
 * Steps:
 * 1. resolve-template — Handlebars compilation
 * 2. generate-audio — ElevenLabs TTS + S3 upload
 * 3. make-call — Voice call with presigned URL (Twilio with Plivo failover)
 * 4. update-status — Update ScheduledReminder record
 */
export const executeReminder = inngest.createFunction(
  {
    id: "execute-reminder",
    retries: 3,
  },
  { event: "vocecast/reminder.scheduled" },
  async ({ event, step }) => {
    const { reminderId, orgId } = event.data as ReminderEventData;

    // Load reminder with relations
    const reminder: LoadedReminder = await step.run("load-reminder", async () => {
      const [r, org] = await Promise.all([
        db.scheduledReminder.findUnique({
          where: { id: reminderId },
          include: {
            client: true,
            template: true,
            voice: true,
          },
        }),
        organizationService.getById(orgId),
      ]);

      if (!r) throw new Error(`Reminder ${reminderId} not found`);
      if (r.status === "CANCELLED") throw new Error("Reminder was cancelled");
      if (!org?.outboundPhone) {
        throw new Error("Organization must have an outbound phone number configured");
      }

      // Mark as started
      await db.scheduledReminder.update({
        where: { id: reminderId },
        data: { status: "STARTED" },
      });

      return {
        id: r.id,
        templateId: r.templateId,
        clientFirstName: r.client.firstName,
        clientLastName: r.client.lastName,
        clientPreferredName: r.client.preferredName,
        clientPhoneNumber: r.client.phoneNumber,
        voiceProviderId: r.voice.providerId,
        appointmentTime: r.appointmentTime.toISOString(),
        orgId: r.orgId,
        orgOutboundPhone: org.outboundPhone,
        userId: r.userId,
      };
    });

    // 1. Resolve template
    const resolvedText: string = await step.run("resolve-template", async () => {
      return templateService.resolve(reminder.templateId, orgId, {
        client: {
          firstName: reminder.clientFirstName,
          lastName: reminder.clientLastName,
          preferredName: reminder.clientPreferredName ?? undefined,
        },
        appointmentTime: reminder.appointmentTime,
      });
    });

    // 2. Generate audio + upload to S3
    const audioUrl: string = await step.run("generate-audio", async () => {
      const voiceProvider = createVoiceProviderService();
      const audioStream = await voiceProvider.textToSpeech(
        reminder.voiceProviderId,
        resolvedText,
      );

      const storageProvider = createStorageProviderService();
      const key = `voicemessages/${orgId}/${reminder.userId}/${Date.now()}.mp3`;
      await storageProvider.upload({
        key,
        body: audioStream,
        contentType: "audio/mpeg",
      });

      return storageProvider.getPresignedUrl(key);
    });

    // 3. Make call
    const callResult: { callSid: string; status: string } = await step.run("make-call", async () => {
      const callProvider = await createCallProviderWithFailover();
      return callProvider.createCall({
        from: reminder.orgOutboundPhone,
        to: reminder.clientPhoneNumber,
        audioUrl,
      });
    });

    // 4. Update status
    await step.run("update-status", async () => {
      await db.scheduledReminder.update({
        where: { id: reminderId },
        data: {
          status: "COMPLETED",
          attempts: { increment: 1 },
          lastAttempt: new Date(),
        },
      });
    });

    return {
      reminderId,
      callSid: callResult.callSid,
      status: "COMPLETED",
    };
  },
);
