import { z } from "zod";

export const createClientSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  preferredName: z.string().optional(),
  email: z.string().email("Valid email is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
});

export const updateClientSchema = createClientSchema.partial();

export const clientIdSchema = z.object({
  id: z.string().min(1),
});

export type CreateClientFormValues = z.infer<typeof createClientSchema>;
export type UpdateClientFormValues = z.infer<typeof updateClientSchema>;
