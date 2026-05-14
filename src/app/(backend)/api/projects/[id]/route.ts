import { requireSession } from "@/lib/apiAuth";
import { connectToDatabase } from "@/lib/db";
import { ensureSeedData, syncSkills } from "@/lib/seed";
import Project from "@/models/Project";
import { NextResponse } from "next/server";

type Params = { params: Promise<{ id: string }> };

export async function PUT(request: Request, { params }: Params) {
  const isAuthorized = await requireSession();
  if (!isAuthorized) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  await connectToDatabase();
  await ensureSeedData();
  const { id } = await params;
  const body = await request.json();
  const project = await Project.findByIdAndUpdate(id, body, {
    new: true,
    runValidators: true,
  }).lean();

  if (!project) {
    return NextResponse.json({ message: "Project not found" }, { status: 404 });
  }

  await syncSkills();
  return NextResponse.json(project);
}

export async function DELETE(_request: Request, { params }: Params) {
  const isAuthorized = await requireSession();
  if (!isAuthorized) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  await connectToDatabase();
  await ensureSeedData();
  const { id } = await params;
  const removed = await Project.findByIdAndDelete(id).lean();
  if (!removed) {
    return NextResponse.json({ message: "Project not found" }, { status: 404 });
  }

  const projects = await Project.find({}).sort({ order: 1 }).lean();
  await Promise.all(
    projects.map((project, index) =>
      Project.findByIdAndUpdate(project._id, { order: index + 1 }),
    ),
  );
  await syncSkills();

  return NextResponse.json({ success: true });
}
