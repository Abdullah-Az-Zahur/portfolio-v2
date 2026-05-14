import mongoose, { Schema } from "mongoose";

const HobbySchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    order: { type: Number, required: true, index: true },
  },
  { timestamps: true },
);

export default mongoose.models.Hobby || mongoose.model("Hobby", HobbySchema);
