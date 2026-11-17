import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb/connect";
import { AboutEntry } from "@/models/profile/AboutEntry";

export async function GET() {
  try {
    await connectToDatabase();
    const entries = await AboutEntry.find()
      .sort({ category: 1, group: 1, order: 1 })
      .lean();
    return NextResponse.json({ entries });
  } catch (error) {
    console.error("Failed to load public About entries", error);
    return NextResponse.json(
      { message: "Unable to load About entries." },
      { status: 500 },
    );
  }
}
