import mongoose, { Schema } from "mongoose";

const SkillSchema = new Schema(
  {
    name: { type: String, required: true, unique: true, trim: true },
  },
  { timestamps: true },
);

export default mongoose.models.Skill || mongoose.model("Skill", SkillSchema);
