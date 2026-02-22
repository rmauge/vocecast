import {
  createTRPCRouter,
  orgProtectedProcedure,
  roleProtectedProcedure,
  protectedProcedure,
} from "~/server/api/trpc";
import { organizationService } from "~/server/services";
import {
  createOrganizationSchema,
  updateOrganizationSchema,
} from "~/shared/schemas";

export const organizationRouter = createTRPCRouter({
  /** Create a new org (any authenticated user without an org). */
  create: protectedProcedure
    .input(createOrganizationSchema)
    .mutation(async ({ ctx, input }) => {
      const org = await organizationService.create(input);
      // Assign the creating user as ADMIN of the new org
      await ctx.db.user.update({
        where: { id: ctx.session.user.id },
        data: { orgId: org.id, role: "ADMIN" },
      });
      return org;
    }),

  /** Get current user's org. */
  getCurrent: orgProtectedProcedure.query(async ({ ctx }) => {
    return organizationService.getById(ctx.orgId);
  }),

  /** Update org settings (ADMIN only). */
  update: roleProtectedProcedure("ADMIN")
    .input(updateOrganizationSchema)
    .mutation(async ({ ctx, input }) => {
      return organizationService.update(ctx.orgId, input);
    }),

  /** Delete org (ADMIN only). */
  delete: roleProtectedProcedure("ADMIN").mutation(async ({ ctx }) => {
    return organizationService.delete(ctx.orgId);
  }),
});
