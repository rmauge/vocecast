import { z } from "zod";

export const createOrganizationSchema = z.object({
  name: z.string().min(1, "Organization name is required"),
  email: z.string().email("Valid email is required").optional(),
  phone: z.string().optional(),
});

export const updateOrganizationSchema = createOrganizationSchema.partial();

export type CreateOrganizationFormValues = z.infer<typeof createOrganizationSchema>;
export type UpdateOrganizationFormValues = z.infer<typeof updateOrganizationSchema>;
