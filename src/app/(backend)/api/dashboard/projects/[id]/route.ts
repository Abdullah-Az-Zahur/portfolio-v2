import { NextResponse } from "next/server";
import { isValidObjectId } from "mongoose";
import { connectToDatabase } from "@/lib/mongodb/connect";
import { Project } from "@/models/projects/Project";
import { parseProjectInput } from "@/lib/projects/project";
import { requireAdmin } from "@/lib/auth/requireAdmin";
import { revalidateTag } from "next/cache";

type RouteContext = { params: Promise<{ id: string }> };

async function getProjectId(context: RouteContext) {
  const { id } = await context.params;
  return isValidObjectId(id) ? id : null;
}

export async function GET(_request: Request, context: RouteContext) {
  const unauthorized = await requireAdmin();
  const id = await getProjectId(context);

  if (unauthorized) return unauthorized;
  if (!id)
    return NextResponse.json(
      { message: "Invalid project id." },
      { status: 400 },
    );

  await connectToDatabase();
  const project = await Project.findById(id).lean();
  if (project) {
    revalidateTag("public-projects", "max");
    return NextResponse.json({ project });
  }

  return NextResponse.json({ message: "Project not found." }, { status: 404 });
}

export async function PATCH(request: Request, context: RouteContext) {
  const unauthorized = await requireAdmin();
  const id = await getProjectId(context);

  if (unauthorized) return unauthorized;
  if (!id)
    return NextResponse.json(
      { message: "Invalid project id." },
      { status: 400 },
    );

  try {
    const input = parseProjectInput(await request.json());
    await connectToDatabase();
    const project = await Project.findByIdAndUpdate(id, input, {
      new: true,
      runValidators: true,
    }).lean();

    if (project) {
      revalidateTag("public-projects", "max");
      return NextResponse.json({ project });
    }

    return NextResponse.json(
      { message: "Project not found." },
      { status: 404 },
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Invalid request.";
    return NextResponse.json({ message }, { status: 400 });
  }
}

export async function DELETE(_request: Request, context: RouteContext) {
  const unauthorized = await requireAdmin();
  const id = await getProjectId(context);

  if (unauthorized) return unauthorized;
  if (!id)
    return NextResponse.json(
      { message: "Invalid project id." },
      { status: 400 },
    );

  await connectToDatabase();
  const result = await Project.findByIdAndDelete(id);
  if (result) {
    revalidateTag("public-projects", "max");
    return NextResponse.json({ deleted: true });
  }

  return NextResponse.json({ message: "Project not found." }, { status: 404 });
}
