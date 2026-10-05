import { model, models, Schema } from "mongoose";

const projectSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    liveLink: { type: String, default: "", trim: true },
    repoLink: { type: String, default: "", trim: true },
    image: { type: String, default: "", trim: true },
    skills: { type: [String], default: [] },
    order: { type: Number, default: 0, index: true },
  },
  { timestamps: true },
);

export const Project = models.Project || model("Project", projectSchema);
