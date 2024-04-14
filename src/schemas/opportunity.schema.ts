import { z } from "zod";

export const opportunitySchema = z.object({
  id: z.number().positive(),
  title: z.string().min(1),
  description: z.string().min(1),
});

export const opportunityCreateSchema = opportunitySchema.omit({ id: true });

export const opportunityUpdateSchema = opportunityCreateSchema.partial();

export type TOpportunity = z.infer<typeof opportunitySchema>;

export type TOpportunityCreate = z.infer<typeof opportunityCreateSchema>;

export type opportunityUpdate = z.infer<typeof opportunityUpdateSchema>;
