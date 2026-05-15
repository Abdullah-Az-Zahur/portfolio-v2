import { projects as staticProjects } from "@/shared/data/projects";
import type {
  ProfileDocument,
  ProjectDocument,
  SkillDocument,
} from "@/types/cms";

export const defaultProfileSeed: ProfileDocument = {
  name: "Md. Abdullah Az-Zahur",
  headline: "Software Engineer",
  summary:
    "A clean, minimalistic portfolio powered by Next.js, TypeScript, Redux Toolkit, and Framer Motion.",
  bio: "Md. Abdullah Az-Zahur is a Bangladesh-based software engineer focused on MERN stack and modern front-end development.",
  location: "Bangladesh",
  email: "abdullah.az.zahur@gmail.com",
  phone: "+880-1705697897",
  avatarUrl: "/assets/images/My%20half%20Photo.png",
  avatarPublicId: "",
  socialLinks: [
    { label: "GitHub", url: "https://github.com/Abdullah-Az-Zahur" },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/md-abdullah-az-zahur/",
    },
    { label: "Facebook", url: "https://www.facebook.com/abdullah.az.zahur" },
  ],
  highlights: [
    "13+ showcased projects",
    "Next.js 16 and React 19 stack",
    "MERN, Redux, and TypeScript experience",
  ],
  skills: [
    "Next.js",
    "React",
    "TypeScript",
    "MongoDB",
    "Node.js",
    "Redux Toolkit",
  ],
  education: [],
  experience: [],
  certificates: [],
  hobbies: [],
};

const toSlug = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const defaultProjectSeed: ProjectDocument[] = staticProjects.map(
  (project, index) => ({
    title: project.name,
    slug: toSlug(project.name),
    description: project.description,
    liveLink: project.liveLink,
    repoLink: project.repoLink,
    imageUrl: project.image,
    imagePublicId: "",
    skills: project.skills,
    order: index + 1,
    featured: index < 3,
    status: "published",
  }),
);

export const defaultSkillSeed: SkillDocument[] = Array.from(
  new Map(
    staticProjects.flatMap((project) =>
      project.skills.map((skill) => [skill, skill]),
    ),
  ).values(),
).map((skill) => ({
  name: skill,
  slug: toSlug(skill),
  category: "project",
  isVisible: true,
}));
