import { model, models, Schema } from "mongoose";
import type { ProfileDocument } from "@/types/cms";

const SocialLinkSchema = new Schema(
  {
    label: { type: String, required: true },
    url: { type: String, required: true },
  },
  { _id: false },
);

const TimelineEntrySchema = new Schema(
  {
    title: { type: String, required: true },
    organization: { type: String, required: true },
    period: { type: String },
    details: { type: String },
  },
  { _id: false },
);

const CertificateSchema = new Schema(
  {
    title: { type: String, required: true },
    issuer: { type: String, required: true },
    year: { type: String },
    url: { type: String },
  },
  { _id: false },
);

const HobbySchema = new Schema(
  {
    title: { type: String, required: true },
    details: { type: String },
  },
  { _id: false },
);

const ProfileSchema = new Schema<ProfileDocument>(
  {
    name: { type: String, required: true },
    headline: { type: String, required: true },
    summary: { type: String, required: true },
    bio: { type: String, required: true },
    location: { type: String },
    email: { type: String },
    phone: { type: String },
    avatarUrl: { type: String },
    avatarPublicId: { type: String },
    socialLinks: { type: [SocialLinkSchema], default: [] },
    highlights: { type: [String], default: [] },
    skills: { type: [String], default: [] },
    education: { type: [TimelineEntrySchema], default: [] },
    experience: { type: [TimelineEntrySchema], default: [] },
    certificates: { type: [CertificateSchema], default: [] },
    hobbies: { type: [HobbySchema], default: [] },
  },
  { timestamps: true },
);

export default models.Profile ||
  model<ProfileDocument>("Profile", ProfileSchema);
