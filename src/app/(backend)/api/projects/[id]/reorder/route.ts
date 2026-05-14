import { requireSession } from "@/lib/apiAuth";
import { connectToDatabase } from "@/lib/db";
import { ensureSeedData } from "@/lib/seed";
import Project from "@/models/Project";
import { NextResponse } from "next/server";

type Params = { params: Promise<{ id: string }> };

export async function PATCH(request: Request, { params }: Params) {
  const isAuthorized = await requireSession();
  if (!isAuthorized) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { order } = await request.json();
  if (typeof order !== "number" || order < 1) {
    return NextResponse.json({ message: "Invalid order" }, { status: 400 });
  }

  await connectToDatabase();
  await ensureSeedData();
  const { id } = await params;
  const projects = await Project.find({}).sort({ order: 1 }).lean();
  const currentIndex = projects.findIndex(
    (project) => String(project._id) === id,
  );

  if (currentIndex === -1) {
    return NextResponse.json({ message: "Project not found" }, { status: 404 });
  }

  const reordered = [...projects];
  const [target] = reordered.splice(currentIndex, 1);
  const nextIndex = Math.min(Math.max(order - 1, 0), reordered.length);
  reordered.splice(nextIndex, 0, target);

  await Promise.all(
    reordered.map((project, index) =>
      Project.findByIdAndUpdate(project._id, { order: index + 1 }),
    ),
  );

  return NextResponse.json({ success: true });
}
