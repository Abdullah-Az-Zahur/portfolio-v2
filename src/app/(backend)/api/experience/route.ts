import { requireSession } from "@/lib/apiAuth";
import { connectToDatabase } from "@/lib/db";
import { ensureSeedData } from "@/lib/seed";
import Experience from "@/models/Experience";
import { NextResponse } from "next/server";

export async function GET() {
  await connectToDatabase();
  await ensureSeedData();
  const experience = await Experience.find({}).sort({ order: 1 }).lean();
  return NextResponse.json(experience);
}

export async function POST(request: Request) {
  const isAuthorized = await requireSession();
  if (!isAuthorized) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  await connectToDatabase();
  await ensureSeedData();
  const body = await request.json();
  const highestOrder = await Experience.findOne({}).sort({ order: -1 }).lean();
  const created = await Experience.create({
    ...body,
    order: body.order ?? (highestOrder?.order || 0) + 1,
  });
  return NextResponse.json(created, { status: 201 });
}
