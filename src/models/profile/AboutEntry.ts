import { model, models, Schema } from "mongoose";

const aboutEntrySchema = new Schema(
  {
    key: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    group: { type: String, required: true },
    label: { type: String, required: true },
    content: { type: String, required: true },
    iconKey: { type: String, required: true, default: "user" },
    color: { type: String, required: true, default: "blue" },
    resourceUrl: { type: String, default: "" },
    showResource: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
    seedVersion: { type: Number, default: 2 },
  },
  { timestamps: true },
);

export const AboutEntry =
  models.AboutEntry || model("AboutEntry", aboutEntrySchema);
