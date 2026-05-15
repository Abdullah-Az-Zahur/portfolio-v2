import { model, models, Schema } from "mongoose";
import type { SettingsDocument } from "@/types/cms";

const SettingsSchema = new Schema<SettingsDocument>(
  {
    siteName: { type: String, required: true },
    siteDescription: { type: String, required: true },
    projectPageSize: { type: Number, default: 12 },
    allowPublicContact: { type: Boolean, default: true },
  },
  { timestamps: true },
);

export default models.Settings ||
  model<SettingsDocument>("Settings", SettingsSchema);
