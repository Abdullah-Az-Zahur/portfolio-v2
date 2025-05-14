"use client";

import { useAppSelector } from "@/redux/hooks";
import ProjectCard from "@/components/ProjectCard/ProjectCard";

const ProjectPage = () => {
  const { filteredProjects } = useAppSelector((state) => state.projects);

  return (
    <div className="p-7 md:p-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project}/>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
