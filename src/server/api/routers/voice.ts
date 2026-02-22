import { z } from "zod";
import { createTRPCRouter, orgProtectedProcedure } from "~/server/api/trpc";
import { createVoiceProviderService } from "~/server/services";

/**
 * Voice router — ElevenLabs provider operations.
 * For voice clone metadata (DB CRUD), see voiceClone router.
 * This router handles provider-side operations (list available voices, TTS).
 */
export const voiceRouter = createTRPCRouter({
  /** List voices from the voice provider, filtered by org. */
  listProvider: orgProtectedProcedure.query(async ({ ctx }) => {
    const voiceProvider = createVoiceProviderService();
    return voiceProvider.getVoices({
      userId: ctx.userId,
      orgId: ctx.orgId,
    });
  }),

  /** Get a single voice from the provider. */
  getProvider: orgProtectedProcedure
    .input(z.object({ voiceId: z.string() }))
    .query(async ({ input }) => {
      const voiceProvider = createVoiceProviderService();
      return voiceProvider.getVoice(input.voiceId);
    }),
});
