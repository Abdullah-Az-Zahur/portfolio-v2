import { NextResponse } from "next/server";
import ProfileModel from "@/models/Profile";
import { connectToDatabase } from "@/lib/mongodb";
import { defaultProfileSeed } from "@/lib/seed/portfolio";

export async function GET() {
  await connectToDatabase();
  const profile = await ProfileModel.findOne().lean();

  return NextResponse.json(profile ?? defaultProfileSeed);
}
