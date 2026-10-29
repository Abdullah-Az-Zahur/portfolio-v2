"use client";

import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { replaceProjects } from "@/store/features/projects/projectsSlice";
import ProjectCard from "./ProjectCard/ProjectCard";
import { projects as staticProjects } from "@/shared/data/projects";

type ProjectClientProps = {
  initialProjects?: typeof staticProjects;
};

const ProjectClient = ({
  initialProjects = staticProjects,
}: ProjectClientProps) => {
  const dispatch = useAppDispatch();
  const { filteredProjects } = useAppSelector((state) => state.projects);

  useEffect(() => {
    dispatch(replaceProjects(initialProjects));
  }, [dispatch, initialProjects]);

  return (
    <section
      aria-label="Projects List"
      className="w-full min-h-[calc(100dvh-56px-48px)] p-6 sm:p-10 md:p-16 lg:p-20"
    >
      {filteredProjects.length === 0 ? (
        <div
          role="status"
          className="flex min-h-[40vh] w-full flex-col items-center justify-center rounded-lg border border-(--app-border-color) p-8 text-center light:border-[#cbd6e3]"
        >
          <p className="text-lg font-medium text-[#e5e9f0] light:text-[#172337]">
            No projects found matching the selected criteria.
          </p>
          <p className="mt-1 text-sm text-[#607b96] light:text-[#475569]">
            Try adjusting your tech stack filters.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProjectClient;
