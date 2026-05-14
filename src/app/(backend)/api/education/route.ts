import { requireSession } from "@/lib/apiAuth";
import { connectToDatabase } from "@/lib/db";
import { ensureSeedData } from "@/lib/seed";
import Education from "@/models/Education";
import { NextResponse } from "next/server";

export async function GET() {
  await connectToDatabase();
  await ensureSeedData();
  const education = await Education.find({}).sort({ order: 1 }).lean();
  return NextResponse.json(education);
}

export async function POST(request: Request) {
  const isAuthorized = await requireSession();
  if (!isAuthorized) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  await connectToDatabase();
  await ensureSeedData();
  const body = await request.json();
  const highestOrder = await Education.findOne({}).sort({ order: -1 }).lean();
  const created = await Education.create({
    ...body,
    order: body.order ?? (highestOrder?.order || 0) + 1,
  });
  return NextResponse.json(created, { status: 201 });
}
