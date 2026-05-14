import { requireSession } from "@/lib/apiAuth";
import { connectToDatabase } from "@/lib/db";
import { ensureSeedData } from "@/lib/seed";
import Experience from "@/models/Experience";
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
  const updated = await Experience.findByIdAndUpdate(id, body, {
    new: true,
    runValidators: true,
  }).lean();

  if (!updated) {
    return NextResponse.json(
      { message: "Experience not found" },
      { status: 404 },
    );
  }

  return NextResponse.json(updated);
}

export async function DELETE(_request: Request, { params }: Params) {
  const isAuthorized = await requireSession();
  if (!isAuthorized) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  await connectToDatabase();
  await ensureSeedData();
  const { id } = await params;
  const removed = await Experience.findByIdAndDelete(id).lean();
  if (!removed) {
    return NextResponse.json(
      { message: "Experience not found" },
      { status: 404 },
    );
  }

  return NextResponse.json({ success: true });
}
