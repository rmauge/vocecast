import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { createTRPCRouter, orgProtectedProcedure } from "~/server/api/trpc";
import {
  voiceSampleService,
  createStorageProviderService,
} from "~/server/services";
import { updateVoiceSampleSchema, paginationSchema } from "~/shared/schemas";

export const voiceSampleRouter = createTRPCRouter({
  list: orgProtectedProcedure.query(async ({ ctx }) => {
    return voiceSampleService.list(ctx.orgId);
  }),

  listPaged: orgProtectedProcedure
    .input(paginationSchema)
    .query(async ({ ctx, input }) => {
      return voiceSampleService.listPaged(ctx.orgId, input.page, input.query);
    }),

  getById: orgProtectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      return voiceSampleService.getById(input.id, ctx.orgId);
    }),

  /** Get a presigned playback URL for a voice sample. */
  getPlaybackUrl: orgProtectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const sample = await voiceSampleService.getById(input.id, ctx.orgId);
      if (!sample?.storageKey) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Voice sample not found",
        });
      }
      const storageProvider = createStorageProviderService();
      const url = await storageProvider.getPresignedUrl(
        sample.storageKey,
        3600,
      );
      return { url };
    }),

  update: orgProtectedProcedure
    .input(z.object({ id: z.string() }).merge(updateVoiceSampleSchema))
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input;
      return voiceSampleService.update(id, ctx.orgId, data);
    }),

  /** Delete voice sample DB record. S3 object cleanup is deferred. */
  delete: orgProtectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return voiceSampleService.delete(input.id, ctx.orgId);
    }),
});
