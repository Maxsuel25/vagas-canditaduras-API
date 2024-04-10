import { z } from "zod";

export const opportunitySchema = z.object({
  id: z.number().positive(),
  title: z.string().min(1),
  description: z.string().min(1)
});


export const opportunityCheateSchema = opportunitySchema.omit({ id: true });

export type TOpportunity = z.infer<typeof opportunitySchema>;

export type TOpportunityCreate = z.infer<typeof opportunityCheateSchema>;
