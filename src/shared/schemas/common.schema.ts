import { z } from "zod";

export const paginationSchema = z.object({
  page: z.number().int().min(1).default(1),
  query: z.string().optional(),
});

export type PaginationInput = z.infer<typeof paginationSchema>;
