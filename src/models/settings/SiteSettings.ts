import { model, models, Schema } from "mongoose";

const siteSettingsSchema = new Schema(
  {
    key: { type: String, unique: true, required: true, default: "site-links" },
    github: { type: String, default: "" },
    linkedin: { type: String, default: "" },
    facebook: { type: String, default: "" },
    youtube: { type: String, default: "" },
    twitter: { type: String, default: "" },
    instagram: { type: String, default: "" },
    resume: { type: String, default: "" },
    cv: { type: String, default: "" },
    email: { type: String, default: "" },
    phone: { type: String, default: "" },
  },
  { timestamps: true },
);

export const SiteSettings =
  models.SiteSettings || model("SiteSettings", siteSettingsSchema);
