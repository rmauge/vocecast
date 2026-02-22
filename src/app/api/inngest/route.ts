import { serve } from "inngest/next";
import { inngest } from "~/server/inngest/client";
import { executeReminder } from "~/server/inngest/functions/execute-reminder";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [executeReminder],
});
