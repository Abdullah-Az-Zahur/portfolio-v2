import { model, models, Schema } from "mongoose";
import type { ProjectDocument } from "@/types/cms";

const ProjectSchema = new Schema<ProjectDocument>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true, index: true },
    description: { type: String, required: true },
    liveLink: { type: String, required: true },
    repoLink: { type: String },
    imageUrl: { type: String, required: true },
    imagePublicId: { type: String },
    skills: { type: [String], default: [] },
    order: { type: Number, default: 0, index: true },
    featured: { type: Boolean, default: false },
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "published",
    },
  },
  { timestamps: true },
);

export default models.Project ||
  model<ProjectDocument>("Project", ProjectSchema);
