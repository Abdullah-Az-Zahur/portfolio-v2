import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb/connect";
import { Project } from "@/models/projects/Project";
import { requireAdmin } from "@/lib/auth/requireAdmin";

export async function PATCH(request: Request) {
  const unauthorized = await requireAdmin();

  if (unauthorized) {
    return unauthorized;
  }

  try {
    const body = await request.json();
    const ids = Array.isArray(body?.ids) ? body.ids : [];

    if (!ids.length || ids.some((id: unknown) => typeof id !== "string")) {
      return NextResponse.json(
        { message: "Provide an ordered array of project ids." },
        { status: 400 },
      );
    }

    await connectToDatabase();
    await Project.bulkWrite(
      ids.map((id: string, order: number) => ({
        updateOne: { filter: { _id: id }, update: { $set: { order } } },
      })),
    );

    return NextResponse.json({ reordered: true });
  } catch (error) {
    console.error("Failed to reorder projects", error);
    return NextResponse.json(
      { message: "Unable to reorder projects." },
      { status: 500 },
    );
  }
}
