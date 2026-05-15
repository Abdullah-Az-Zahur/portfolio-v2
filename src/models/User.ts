import { model, models, Schema } from "mongoose";
import type { AdminUserDocument } from "@/types/cms";

const UserSchema = new Schema<AdminUserDocument>(
  {
    email: { type: String, required: true, unique: true, index: true },
    name: { type: String, required: true },
    role: { type: String, required: true, default: "admin" },
    passwordHash: { type: String },
  },
  { timestamps: true },
);

export default models.User || model<AdminUserDocument>("User", UserSchema);
