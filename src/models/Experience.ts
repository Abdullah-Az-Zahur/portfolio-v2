import mongoose, { Schema } from "mongoose";

const ExperienceSchema = new Schema(
  {
    company: { type: String, required: true, trim: true },
    position: { type: String, required: true, trim: true },
    duration: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    order: { type: Number, required: true, index: true },
  },
  { timestamps: true },
);

export default mongoose.models.Experience ||
  mongoose.model("Experience", ExperienceSchema);
