import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb/connect";
import { Project } from "@/models/projects/Project";
import { parseProjectInput } from "@/lib/validators/project";
import { requireAdmin } from "@/lib/auth/requireAdmin";

export async function GET() {
  const unauthorized = await requireAdmin();

  if (unauthorized) {
    return unauthorized;
  }

  try {
    await connectToDatabase();
    const projects = await Project.find()
      .sort({ order: 1, createdAt: 1 })
      .lean();
    return NextResponse.json({ projects });
  } catch (error) {
    console.error("Failed to load projects", error);
    return NextResponse.json(
      { message: "Unable to load projects." },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  const unauthorized = await requireAdmin();

  if (unauthorized) {
    return unauthorized;
  }

  try {
    const input = parseProjectInput(await request.json());
    await connectToDatabase();
    const project = await Project.create(input);
    return NextResponse.json({ project }, { status: 201 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Invalid request.";
    const status =
      message.includes("required") || message.includes("payload") ? 400 : 500;
    return NextResponse.json({ message }, { status });
  }
}
