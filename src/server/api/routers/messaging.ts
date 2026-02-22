import { TRPCError } from "@trpc/server";
import { createTRPCRouter, orgProtectedProcedure } from "~/server/api/trpc";
import {
  templateService,
  clientService,
  voiceCloneService,
  createVoiceProviderService,
  createCallProviderService,
  createStorageProviderService,
} from "~/server/services";
import { sendNowSchema } from "~/shared/schemas";

export const messagingRouter = createTRPCRouter({
  /**
   * Send a voice message immediately.
   * Resolves template → TTS → S3 upload → Twilio call.
   */
  sendNow: orgProtectedProcedure
    .input(sendNowSchema)
    .mutation(async ({ ctx, input }) => {
      // Validate all referenced entities exist in the org
      const [client, template, voice] = await Promise.all([
        clientService.getById(input.clientId, ctx.orgId),
        templateService.getById(input.templateId, ctx.orgId),
        voiceCloneService.getById(input.voiceId, ctx.orgId),
      ]);

      if (!client) throw new TRPCError({ code: "NOT_FOUND", message: "Client not found" });
      if (!template) throw new TRPCError({ code: "NOT_FOUND", message: "Template not found" });
      if (!voice) throw new TRPCError({ code: "NOT_FOUND", message: "Voice not found" });

      // 1. Resolve template
      const resolvedText = await templateService.resolve(
        input.templateId,
        ctx.orgId,
        {
          client: {
            firstName: client.firstName,
            lastName: client.lastName,
            preferredName: client.preferredName ?? undefined,
          },
        },
      );

      // 2. Generate audio via TTS
      const voiceProvider = createVoiceProviderService();
      const audioStream = await voiceProvider.textToSpeech(
        voice.providerId,
        resolvedText,
      );

      // 3. Upload to S3
      const storageProvider = createStorageProviderService();
      const key = `voicemessages/${ctx.orgId}/${ctx.userId}/${Date.now()}.mp3`;
      await storageProvider.upload({
        key,
        body: audioStream,
        contentType: "audio/mpeg",
      });

      // 4. Get presigned URL and make call
      const audioUrl = await storageProvider.getPresignedUrl(key);
      const callProvider = createCallProviderService();

      // TODO: Get org's phone number from org settings
      const result = await callProvider.createCall({
        from: "+15551234567", // placeholder - should come from org config
        to: client.phoneNumber,
        audioUrl,
      });

      return {
        callSid: result.callSid,
        status: result.status,
      };
    }),
});
