import { z } from "zod";
import { createTRPCRouter, orgProtectedProcedure } from "~/server/api/trpc";
import { templateService } from "~/server/services";
import {
  createTemplateSchema,
  updateTemplateSchema,
  paginationSchema,
} from "~/shared/schemas";

export const templateRouter = createTRPCRouter({
  list: orgProtectedProcedure.query(async ({ ctx }) => {
    return templateService.list(ctx.orgId);
  }),

  listPaged: orgProtectedProcedure
    .input(paginationSchema)
    .query(async ({ ctx, input }) => {
      return templateService.listPaged(ctx.orgId, input.page, input.query);
    }),

  getById: orgProtectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      return templateService.getById(input.id, ctx.orgId);
    }),

  create: orgProtectedProcedure
    .input(createTemplateSchema)
    .mutation(async ({ ctx, input }) => {
      return templateService.create({
        ...input,
        orgId: ctx.orgId,
        authorId: ctx.userId,
      });
    }),

  update: orgProtectedProcedure
    .input(z.object({ id: z.string() }).merge(updateTemplateSchema))
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input;
      return templateService.update(id, ctx.orgId, data);
    }),

  delete: orgProtectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return templateService.delete(input.id, ctx.orgId);
    }),

  count: orgProtectedProcedure.query(async ({ ctx }) => {
    return templateService.count(ctx.orgId);
  }),
});
