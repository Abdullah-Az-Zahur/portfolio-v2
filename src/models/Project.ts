import mongoose, { Schema } from "mongoose";

const ProjectSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    image: { type: String, required: true, trim: true },
    liveLink: { type: String, required: true, trim: true },
    repoLink: { type: String, required: true, trim: true },
    skills: [{ type: String, required: true, trim: true }],
    order: { type: Number, required: true, index: true },
  },
  { timestamps: true },
);

export default mongoose.models.Project ||
  mongoose.model("Project", ProjectSchema);
