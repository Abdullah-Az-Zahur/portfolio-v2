import ProjectClient from "@/features/projects/components/ProjectClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore featured projects from Md. Abdullah Az-Zahur's software engineer portfolio, including MERN stack apps, front-end builds, and responsive web applications.",
  keywords: [
    "Md. Abdullah Az-Zahur Projects",
    "Software Engineer Projects",
    "MERN Stack Projects",
    "React Projects",
    "Next.js Projects",
    "Portfolio Projects",
    "Web Development Projects",
    "Showcase Projects",
    "MERN Stack Portfolio",
    "Frontend Portfolio",
  ],
  alternates: {
    canonical: "/project",
  },
  openGraph: {
    title: "Projects | Md. Abdullah Az-Zahur",
    description:
      "Browse the featured projects in Md. Abdullah Az-Zahur's software engineer portfolio, including MERN stack apps, front-end work, and older project showcases.",
    url: "https://abdullahzahur.vercel.app/project",
    siteName: "Md. Abdullah Az-Zahur Portfolio",
    type: "website",
    images: ["/assets/images/projects/portfolioV2.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Md. Abdullah Az-Zahur",
    description:
      "Discover the featured projects built by Md. Abdullah Az-Zahur.",
    images: ["/assets/images/projects/portfolioV2.png"],
  },
};

const ProjectPage = () => {
  return <ProjectClient />;
};

export default ProjectPage;
