import { model, models, Schema } from "mongoose";

const aboutEntrySchema = new Schema(
  {
    key: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    group: { type: String, required: true },
    label: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true },
);

export const AboutEntry =
  models.AboutEntry || model("AboutEntry", aboutEntrySchema);
