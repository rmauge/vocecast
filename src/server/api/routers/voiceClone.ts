import { z } from "zod";
import { createTRPCRouter, orgProtectedProcedure } from "~/server/api/trpc";
import { voiceCloneService, createVoiceProviderService } from "~/server/services";
import {
  createVoiceCloneSchema,
  updateVoiceCloneSchema,
  paginationSchema,
} from "~/shared/schemas";

export const voiceCloneRouter = createTRPCRouter({
  list: orgProtectedProcedure.query(async ({ ctx }) => {
    return voiceCloneService.list(ctx.orgId);
  }),

  listPaged: orgProtectedProcedure
    .input(paginationSchema)
    .query(async ({ ctx, input }) => {
      return voiceCloneService.listPaged(ctx.orgId, input.page, input.query);
    }),

  getById: orgProtectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      return voiceCloneService.getById(input.id, ctx.orgId);
    }),

  /** Create a voice clone record (after provider-side creation). */
  create: orgProtectedProcedure
    .input(
      createVoiceCloneSchema.extend({
        providerId: z.string().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return voiceCloneService.create({
        name: input.name,
        description: input.description,
        cloneProvider: "ELEVENLABS",
        providerId: input.providerId,
        orgId: ctx.orgId,
        authorId: ctx.userId,
      });
    }),

  update: orgProtectedProcedure
    .input(z.object({ id: z.string() }).merge(updateVoiceCloneSchema))
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input;
      return voiceCloneService.update(id, ctx.orgId, data);
    }),

  /** Delete voice clone from both DB and the provider. */
  delete: orgProtectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const voice = await voiceCloneService.getById(input.id, ctx.orgId);
      if (voice) {
        try {
          const voiceProvider = createVoiceProviderService();
          await voiceProvider.deleteVoice(voice.providerId);
        } catch {
          // Provider deletion failure shouldn't block local cleanup
          console.warn(`Failed to delete voice ${voice.providerId} from provider`);
        }
      }
      return voiceCloneService.delete(input.id, ctx.orgId);
    }),
});
