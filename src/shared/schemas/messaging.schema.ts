import { z } from "zod";

export const sendNowSchema = z.object({
  templateId: z.string().min(1, "Please choose a template"),
  clientId: z.string().min(1, "Please choose a client"),
  voiceId: z.string().min(1, "Please choose a voice"),
});

export const scheduleSchema = z.object({
  templateId: z.string().min(1, "Please choose a template"),
  clientId: z.string().min(1, "Please choose a client"),
  voiceId: z.string().min(1, "Please choose a voice"),
  appointmentTime: z.string().datetime("Invalid date/time"),
  timeZone: z.string().min(1, "Timezone is required"),
  reminderOffset: z.enum([
    "DAY_BEFORE_MORNING",
    "DAY_BEFORE_AFTERNOON",
    "DAY_BEFORE_EVENING",
  ]),
});

export type SendNowFormValues = z.infer<typeof sendNowSchema>;
export type ScheduleFormValues = z.infer<typeof scheduleSchema>;
