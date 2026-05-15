import { NextResponse } from "next/server";
import SkillModel from "@/models/Skill";
import { connectToDatabase } from "@/lib/mongodb";
import { defaultSkillSeed } from "@/lib/seed/portfolio";

export async function GET() {
  await connectToDatabase();
  const skills = await SkillModel.find({ isVisible: true })
    .sort({ category: 1, name: 1 })
    .lean();

  return NextResponse.json(skills.length > 0 ? skills : defaultSkillSeed);
}
