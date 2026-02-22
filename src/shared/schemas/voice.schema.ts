import { z } from "zod";

export const createVoiceCloneSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
});

export const updateVoiceCloneSchema = createVoiceCloneSchema.partial();

export const voiceCloneIdSchema = z.object({
  id: z.string().min(1),
});

export type CreateVoiceCloneFormValues = z.infer<typeof createVoiceCloneSchema>;
export type UpdateVoiceCloneFormValues = z.infer<typeof updateVoiceCloneSchema>;
