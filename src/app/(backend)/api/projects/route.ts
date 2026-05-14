import { requireSession } from "@/lib/apiAuth";
import { connectToDatabase } from "@/lib/db";
import { ensureSeedData, syncSkills } from "@/lib/seed";
import Project from "@/models/Project";
import { NextResponse } from "next/server";

export async function GET() {
  await connectToDatabase();
  await ensureSeedData();

  const projects = await Project.find({}).sort({ order: 1 }).lean();
  return NextResponse.json(projects);
}

export async function POST(request: Request) {
  const isAuthorized = await requireSession();
  if (!isAuthorized) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  await connectToDatabase();
  await ensureSeedData();

  const highestOrder = await Project.findOne({}).sort({ order: -1 }).lean();
  const project = await Project.create({
    ...body,
    order: body.order ?? (highestOrder?.order || 0) + 1,
  });
  await syncSkills();

  return NextResponse.json(project, { status: 201 });
}
