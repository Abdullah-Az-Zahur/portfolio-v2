import { requireSession } from "@/lib/apiAuth";
import { connectToDatabase } from "@/lib/db";
import { ensureSeedData, syncSkills } from "@/lib/seed";
import Education from "@/models/Education";
import Experience from "@/models/Experience";
import Hobby from "@/models/Hobby";
import Portfolio from "@/models/Portfolio";
import Project from "@/models/Project";
import Skill from "@/models/Skill";
import { NextResponse } from "next/server";

export async function GET() {
  await connectToDatabase();
  await ensureSeedData();

  const [portfolio, projects, hobbies, education, experience, skills] =
    await Promise.all([
      Portfolio.findOne({}).lean(),
      Project.find({})
        .sort({ order: 1 as const })
        .lean(),
      Hobby.find({})
        .sort({ order: 1 as const })
        .lean(),
      Education.find({})
        .sort({ order: 1 as const })
        .lean(),
      Experience.find({})
        .sort({ order: 1 as const })
        .lean(),
      Skill.find({}).sort({ name: 1 }).lean(),
    ]);

  return NextResponse.json({
    portfolio,
    projects,
    skills: skills.map((skill) => skill.name),
    hobbies,
    education,
    experience,
  });
}

export async function PUT(request: Request) {
  const isAuthorized = await requireSession();
  if (!isAuthorized) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const payload = await request.json();
  await connectToDatabase();
  await ensureSeedData();

  const updated = await Portfolio.findOneAndUpdate({}, payload, {
    new: true,
    runValidators: true,
    upsert: true,
  }).lean();

  await syncSkills();

  return NextResponse.json(updated);
}
