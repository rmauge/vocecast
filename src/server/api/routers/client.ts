import { z } from "zod";
import { createTRPCRouter, orgProtectedProcedure } from "~/server/api/trpc";
import { clientService } from "~/server/services";
import {
  createClientSchema,
  updateClientSchema,
  paginationSchema,
} from "~/shared/schemas";

export const clientRouter = createTRPCRouter({
  list: orgProtectedProcedure.query(async ({ ctx }) => {
    return clientService.list(ctx.orgId);
  }),

  listPaged: orgProtectedProcedure
    .input(paginationSchema)
    .query(async ({ ctx, input }) => {
      return clientService.listPaged(ctx.orgId, input.page, input.query);
    }),

  getById: orgProtectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      return clientService.getById(input.id, ctx.orgId);
    }),

  create: orgProtectedProcedure
    .input(createClientSchema)
    .mutation(async ({ ctx, input }) => {
      return clientService.create({
        ...input,
        orgId: ctx.orgId,
        authorId: ctx.userId,
      });
    }),

  update: orgProtectedProcedure
    .input(z.object({ id: z.string() }).merge(updateClientSchema))
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input;
      return clientService.update(id, ctx.orgId, data);
    }),

  delete: orgProtectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return clientService.delete(input.id, ctx.orgId);
    }),

  count: orgProtectedProcedure.query(async ({ ctx }) => {
    return clientService.count(ctx.orgId);
  }),
});
