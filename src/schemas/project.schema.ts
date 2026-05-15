import { z } from "zod";

export const projectSchema = z.object({
  title: z.string().min(1),
  slug: z.string().min(1).optional(),
  description: z.string().min(1),
  liveLink: z.string().url(),
  repoLink: z.string().url().optional(),
  imageUrl: z.string().url(),
  imagePublicId: z.string().optional(),
  skills: z.array(z.string().min(1)).default([]),
  order: z.number().int().nonnegative().default(0),
  featured: z.boolean().default(false),
  status: z.enum(["draft", "published"]).default("published"),
});

export const projectUpdateSchema = projectSchema.partial();
