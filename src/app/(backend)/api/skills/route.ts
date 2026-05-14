import { connectToDatabase } from "@/lib/db";
import { ensureSeedData } from "@/lib/seed";
import Skill from "@/models/Skill";
import { NextResponse } from "next/server";

export async function GET() {
  await connectToDatabase();
  await ensureSeedData();

  const skills = await Skill.find({}).sort({ name: 1 }).lean();
  return NextResponse.json(skills.map((skill) => skill.name));
}
