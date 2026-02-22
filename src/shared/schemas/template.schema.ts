import { z } from "zod";

export const createTemplateSchema = z.object({
  name: z.string().min(1, "Name is required"),
  content: z.string().min(1, "Content is required"),
});

export const updateTemplateSchema = createTemplateSchema.partial();

export const templateIdSchema = z.object({
  id: z.string().min(1),
});

export type CreateTemplateFormValues = z.infer<typeof createTemplateSchema>;
export type UpdateTemplateFormValues = z.infer<typeof updateTemplateSchema>;
