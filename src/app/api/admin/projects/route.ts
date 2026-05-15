import { NextResponse } from "next/server";
import ProjectModel from "@/models/Project";
import { connectToDatabase } from "@/lib/mongodb";
import { projectSchema, projectUpdateSchema } from "@/schemas/project.schema";
import { requireAdminSession } from "@/lib/auth/guards";
import { defaultProjectSeed } from "@/lib/seed/portfolio";

const toSlug = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export async function GET() {
  const session = await requireAdminSession();
  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  await connectToDatabase();
  const projects = await ProjectModel.find()
    .sort({ order: 1, createdAt: 1 })
    .lean();

  return NextResponse.json(projects.length > 0 ? projects : defaultProjectSeed);
}

export async function POST(request: Request) {
  const session = await requireAdminSession();
  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const payload = await request.json();
  const parsed = projectSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      { message: "Invalid project payload", issues: parsed.error.flatten() },
      { status: 400 },
    );
  }

  await connectToDatabase();
  const order = parsed.data.order || (await ProjectModel.countDocuments()) + 1;
  const slug = parsed.data.slug ?? toSlug(parsed.data.title);

  const createdProject = await ProjectModel.create({
    ...parsed.data,
    slug,
    order,
  });

  return NextResponse.json(createdProject, { status: 201 });
}

export async function PATCH(request: Request) {
  const session = await requireAdminSession();
  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const payload = await request.json();
  const parsed = projectUpdateSchema.safeParse(payload);

  if (!parsed.success || !("_id" in payload || "id" in payload)) {
    return NextResponse.json(
      { message: "Invalid project update payload" },
      { status: 400 },
    );
  }

  const projectId = String(payload._id ?? payload.id);
  const updateData = parsed.data;

  if (updateData.title && !updateData.slug) {
    updateData.slug = toSlug(updateData.title);
  }

  await connectToDatabase();
  const project = await ProjectModel.findByIdAndUpdate(
    projectId,
    { $set: updateData },
    { new: true },
  );

  return NextResponse.json(project);
}

export async function DELETE(request: Request) {
  const session = await requireAdminSession();
  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const payload = await request.json();
  const projectId = String(payload._id ?? payload.id ?? "");

  if (!projectId) {
    return NextResponse.json(
      { message: "Project id is required" },
      { status: 400 },
    );
  }

  await connectToDatabase();
  await ProjectModel.findByIdAndDelete(projectId);

  return NextResponse.json({ message: "Project deleted" });
}
