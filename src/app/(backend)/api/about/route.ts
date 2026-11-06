import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb/connect";
import { AboutEntry } from "@/models/profile/AboutEntry";

export async function GET() {
  await connectToDatabase();
  const entries = await AboutEntry.find()
    .sort({ category: 1, group: 1, order: 1 })
    .lean();
  return NextResponse.json({ entries });
}
