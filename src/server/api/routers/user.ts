import { z } from "zod";
import {
  createTRPCRouter,
  orgProtectedProcedure,
  roleProtectedProcedure,
} from "~/server/api/trpc";
import { userService } from "~/server/services";

export const userRouter = createTRPCRouter({
  /** Get current user profile. */
  me: orgProtectedProcedure.query(async ({ ctx }) => {
    return userService.getById(ctx.userId);
  }),

  /** List all users in the org (ADMIN only). */
  list: roleProtectedProcedure("ADMIN").query(async ({ ctx }) => {
    return userService.getByOrgId(ctx.orgId);
  }),

  /** Update a user's role (ADMIN only). */
  setRole: roleProtectedProcedure("ADMIN")
    .input(
      z.object({
        userId: z.string().min(1),
        role: z.enum(["ADMIN", "POWER_USER", "USER"]),
      }),
    )
    .mutation(async ({ input }) => {
      return userService.setRole(input.userId, input.role);
    }),
});
