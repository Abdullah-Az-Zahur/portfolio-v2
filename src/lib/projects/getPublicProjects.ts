import { connectToDatabase } from "@/lib/mongodb/connect";
import { Project } from "@/models/projects/Project";
import { projects as staticProjects } from "@/shared/data/projects";

export async function getPublicProjects() {
  try {
    await connectToDatabase();
    const projects = await Project.find()
      .sort({ order: 1, createdAt: 1 })
      .lean();

    if (!projects.length) return staticProjects;

    return projects.map((project, index) => ({
      id: index + 1,
      name: project.name,
      liveLink: project.liveLink,
      repoLink: project.repoLink,
      image: project.image,
      description: project.description,
      skills: project.skills,
    }));
  } catch {
    return staticProjects;
  }
}
