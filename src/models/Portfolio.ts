import mongoose, { Schema } from "mongoose";

const PortfolioSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    bio: { type: String, required: true, trim: true },
    contact: {
      phone: { type: String, required: true, trim: true },
      email: { type: String, required: true, trim: true },
    },
    social: {
      github: { type: String, required: true, trim: true },
      linkedin: { type: String, required: true, trim: true },
      facebook: { type: String, required: true, trim: true },
    },
  },
  { timestamps: true },
);

export default mongoose.models.Portfolio ||
  mongoose.model("Portfolio", PortfolioSchema);
