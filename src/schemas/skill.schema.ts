import { z } from "zod";

export const skillSchema = z.object({
  name: z.string().min(1),
  slug: z.string().min(1).optional(),
  category: z.string().min(1),
  isVisible: z.boolean().default(true),
});
