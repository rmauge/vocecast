import { organizationRouter } from "~/server/api/routers/organization";
import { userRouter } from "~/server/api/routers/user";
import { clientRouter } from "~/server/api/routers/client";
import { templateRouter } from "~/server/api/routers/template";
import { voiceCloneRouter } from "~/server/api/routers/voiceClone";
import { voiceRouter } from "~/server/api/routers/voice";
import { messagingRouter } from "~/server/api/routers/messaging";
import { schedulerRouter } from "~/server/api/routers/scheduler";
import { voiceSampleRouter } from "~/server/api/routers/voiceSample";
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  organization: organizationRouter,
  user: userRouter,
  clients: clientRouter,
  template: templateRouter,
  voiceClone: voiceCloneRouter,
  voice: voiceRouter,
  messaging: messagingRouter,
  scheduler: schedulerRouter,
  voiceSample: voiceSampleRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.client.list();
 *       ^? Client[]
 */
export const createCaller = createCallerFactory(appRouter);
