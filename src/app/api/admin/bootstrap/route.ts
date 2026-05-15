import { NextResponse } from "next/server";
import ProfileModel from "@/models/Profile";
import ProjectModel from "@/models/Project";
import SkillModel from "@/models/Skill";
import { connectToDatabase } from "@/lib/mongodb";
import { requireAdminSession } from "@/lib/auth/guards";
import {
  defaultProfileSeed,
  defaultProjectSeed,
  defaultSkillSeed,
} from "@/lib/seed/portfolio";

const toProjectFilter = (slug: string) => ({ slug });

export async function POST() {
  const session = await requireAdminSession();
  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  await connectToDatabase();

  await ProfileModel.findOneAndUpdate({}, defaultProfileSeed, {
    upsert: true,
    new: true,
    setDefaultsOnInsert: true,
  });

  await SkillModel.bulkWrite(
    defaultSkillSeed.map((skill) => ({
      updateOne: {
        filter: { slug: skill.slug },
        update: { $set: skill },
        upsert: true,
      },
    })),
  );

  await ProjectModel.bulkWrite(
    defaultProjectSeed.map((project) => ({
      updateOne: {
        filter: toProjectFilter(project.slug),
        update: { $set: project },
        upsert: true,
      },
    })),
  );

  return NextResponse.json({
    message: "Portfolio seed uploaded successfully",
    projectsSeeded: defaultProjectSeed.length,
    skillsSeeded: defaultSkillSeed.length,
  });
}
