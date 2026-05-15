import { model, models, Schema } from "mongoose";
import type { SkillDocument } from "@/types/cms";

const SkillSchema = new Schema<SkillDocument>(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true, index: true },
    category: { type: String, required: true, index: true },
    isVisible: { type: Boolean, default: true },
  },
  { timestamps: true },
);

export default models.Skill || model<SkillDocument>("Skill", SkillSchema);
