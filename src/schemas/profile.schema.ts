import { z } from "zod";

const socialLinkSchema = z.object({
  label: z.string().min(1),
  url: z.string().url(),
});

const timelineEntrySchema = z.object({
  title: z.string().min(1),
  organization: z.string().min(1),
  period: z.string().optional(),
  details: z.string().optional(),
});

const certificateSchema = z.object({
  title: z.string().min(1),
  issuer: z.string().min(1),
  year: z.string().optional(),
  url: z.string().url().optional(),
});

const hobbySchema = z.object({
  title: z.string().min(1),
  details: z.string().optional(),
});

export const profileSchema = z.object({
  name: z.string().min(1),
  headline: z.string().min(1),
  summary: z.string().min(1),
  bio: z.string().min(1),
  location: z.string().optional(),
  email: z.string().email().optional(),
  phone: z.string().optional(),
  avatarUrl: z.string().url().optional(),
  avatarPublicId: z.string().optional(),
  socialLinks: z.array(socialLinkSchema).default([]),
  highlights: z.array(z.string().min(1)).default([]),
  skills: z.array(z.string().min(1)).default([]),
  education: z.array(timelineEntrySchema).default([]),
  experience: z.array(timelineEntrySchema).default([]),
  certificates: z.array(certificateSchema).default([]),
  hobbies: z.array(hobbySchema).default([]),
});

export const profileUpdateSchema = profileSchema.partial();
