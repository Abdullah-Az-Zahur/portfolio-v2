import { NextResponse } from "next/server";
import ProjectModel from "@/models/Project";
import { connectToDatabase } from "@/lib/mongodb";
import { defaultProjectSeed } from "@/lib/seed/portfolio";

export async function GET() {
  await connectToDatabase();
  const projects = await ProjectModel.find()
    .sort({ order: 1, createdAt: 1 })
    .lean();

  return NextResponse.json(projects.length > 0 ? projects : defaultProjectSeed);
}
