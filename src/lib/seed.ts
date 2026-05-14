import { connectToDatabase } from "@/lib/db";
import Education from "@/models/Education";
import Experience from "@/models/Experience";
import Hobby from "@/models/Hobby";
import Portfolio from "@/models/Portfolio";
import Project from "@/models/Project";
import Skill from "@/models/Skill";
import {
  educationSeed,
  experienceSeed,
  hobbiesSeed,
  portfolioSeed,
  projectSeed,
} from "@/shared/data/portfolioSeed";

export const syncSkills = async () => {
  const projects = await Project.find({}, { skills: 1, _id: 0 }).lean();
  const skills = Array.from(
    new Set(
      projects.flatMap((project) =>
        (project.skills || [])
          .map((skill: string) => skill.trim())
          .filter(Boolean),
      ),
    ),
  ).sort((a, b) => a.localeCompare(b));

  await Skill.deleteMany({});
  if (skills.length > 0) {
    await Skill.insertMany(skills.map((name) => ({ name })));
  }

  return skills;
};

export const ensureSeedData = async () => {
  await connectToDatabase();
  const existing = await Portfolio.findOne({});
  if (existing) {
    return;
  }

  await Portfolio.create(portfolioSeed);
  await Project.insertMany(projectSeed);
  await Hobby.insertMany(hobbiesSeed);
  await Education.insertMany(educationSeed);
  await Experience.insertMany(experienceSeed);
  await syncSkills();
};
