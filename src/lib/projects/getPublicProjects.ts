import { connectToDatabase } from "@/lib/mongodb/connect";
import { Project } from "@/models/projects/Project";

export async function getPublicProjects() {
  await connectToDatabase();
  const projects = await Project.find().sort({ order: 1, createdAt: 1 }).lean();

  return projects.map((project, index) => ({
    id: index + 1,
    name: project.name,
    liveLink: project.liveLink,
    repoLink: project.repoLink,
    image: project.image,
    description: project.description,
    skills: project.skills,
  }));
}
