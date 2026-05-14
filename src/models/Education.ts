import mongoose, { Schema } from "mongoose";

const EducationSchema = new Schema(
  {
    degree: { type: String, required: true, trim: true },
    institution: { type: String, required: true, trim: true },
    cgpa: { type: String, default: "", trim: true },
    date: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    order: { type: Number, required: true, index: true },
  },
  { timestamps: true },
);

export default mongoose.models.Education ||
  mongoose.model("Education", EducationSchema);
