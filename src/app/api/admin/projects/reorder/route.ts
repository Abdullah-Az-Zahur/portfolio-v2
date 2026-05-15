import { NextResponse } from "next/server";
import ProjectModel from "@/models/Project";
import { connectToDatabase } from "@/lib/mongodb";
import { requireAdminSession } from "@/lib/auth/guards";
import { z } from "zod";

const reorderSchema = z.object({
  orderedIds: z.array(z.string().min(1)).min(1),
});

export async function PATCH(request: Request) {
  const session = await requireAdminSession();
  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const payload = await request.json();
  const parsed = reorderSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      { message: "Invalid reorder payload", issues: parsed.error.flatten() },
      { status: 400 },
    );
  }

  await connectToDatabase();
  await ProjectModel.bulkWrite(
    parsed.data.orderedIds.map((projectId, index) => ({
      updateOne: {
        filter: { _id: projectId },
        update: { $set: { order: index + 1 } },
      },
    })),
  );

  return NextResponse.json({ message: "Project order updated" });
}
