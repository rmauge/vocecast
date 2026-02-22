import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { createTRPCRouter, orgProtectedProcedure } from "~/server/api/trpc";
import {
  clientService,
  templateService,
  voiceCloneService,
} from "~/server/services";
import { scheduleSchema } from "~/shared/schemas";

export const schedulerRouter = createTRPCRouter({
  /** Schedule a reminder. Creates a ScheduledReminder record and sends to Inngest. */
  schedule: orgProtectedProcedure
    .input(scheduleSchema)
    .mutation(async ({ ctx, input }) => {
      // Validate all referenced entities exist
      const [client, template, voice] = await Promise.all([
        clientService.getById(input.clientId, ctx.orgId),
        templateService.getById(input.templateId, ctx.orgId),
        voiceCloneService.getById(input.voiceId, ctx.orgId),
      ]);

      if (!client) throw new TRPCError({ code: "NOT_FOUND", message: "Client not found" });
      if (!template) throw new TRPCError({ code: "NOT_FOUND", message: "Template not found" });
      if (!voice) throw new TRPCError({ code: "NOT_FOUND", message: "Voice not found" });

      // Create the scheduled reminder record
      const reminder = await ctx.db.scheduledReminder.create({
        data: {
          orgId: ctx.orgId,
          userId: ctx.userId,
          clientId: input.clientId,
          templateId: input.templateId,
          voiceId: input.voiceId,
          timeZone: input.timeZone,
          appointmentTime: new Date(input.appointmentTime),
          reminderOffset: input.reminderOffset,
          status: "NOT_STARTED",
        },
      });

      // Send to Inngest for processing
      // Lazy import to avoid issues when inngest isn't configured
      try {
        const { inngest } = await import("~/server/inngest/client");
        await inngest.send({
          name: "vocecast/reminder.scheduled",
          data: {
            reminderId: reminder.id,
            orgId: ctx.orgId,
          },
        });
      } catch (error) {
        console.warn("Failed to send to Inngest, reminder saved to DB:", error);
      }

      return reminder;
    }),

  /** List scheduled reminders for the org. */
  list: orgProtectedProcedure
    .input(
      z.object({
        status: z.enum(["NOT_STARTED", "STARTED", "COMPLETED", "BUSY", "NO_ANSWER", "CANCELLED", "FAILED"]).optional(),
      }).optional(),
    )
    .query(async ({ ctx, input }) => {
      return ctx.db.scheduledReminder.findMany({
        where: {
          orgId: ctx.orgId,
          ...(input?.status ? { status: input.status } : {}),
        },
        include: {
          client: true,
          template: true,
          voice: true,
        },
        orderBy: { createdAt: "desc" },
      });
    }),

  /** Cancel a scheduled reminder. */
  cancel: orgProtectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.scheduledReminder.update({
        where: { id: input.id },
        data: { status: "CANCELLED" },
      });
    }),
});
