import ProjectClient from "@/components/Project/ProjectClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore my featured projects built with React, Next.js, Node.js, Express, and MongoDB. I create modern, scalable, and interactive web applications focused on performance and user experience.",
};

const ProjectPage = () => {
  return (
    <>
      <ProjectClient />
    </>
  );
};

export default ProjectPage;
