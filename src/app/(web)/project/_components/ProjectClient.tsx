"use client";

import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { replaceProjects } from "@/store/features/projects/projectsSlice";
import ProjectCard from "./ProjectCard/ProjectCard";
import type { Project } from "@/store/features/projects/projectsSlice";

type ProjectClientProps = {
  initialProjects: Project[];
};

const ProjectClient = ({ initialProjects }: ProjectClientProps) => {
  const dispatch = useAppDispatch();
  const { filteredProjects, selectedSkills } = useAppSelector(
    (state) => state.projects,
  );
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    dispatch(replaceProjects(initialProjects));
  }, [dispatch, initialProjects]);

  useEffect(() => {
    if (initialProjects.length <= 1) return;

    const timer = window.setInterval(() => {
      setVisibleCount((count) =>
        count < initialProjects.length ? count + 1 : count,
      );
    }, 350);

    return () => window.clearInterval(timer);
  }, [initialProjects.length]);

  return (
    <section
      aria-labelledby="projects-heading"
      aria-label="Projects List"
      className="w-full min-h-[calc(100dvh-56px-48px)] p-6 sm:p-10 md:p-16 lg:p-20"
    >
      <h1 id="projects-heading" className="sr-only">
        Projects by Md. Abdullah Az-Zahur
      </h1>
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
          {(selectedSkills.length > 0
            ? filteredProjects
            : filteredProjects.slice(0, visibleCount)
          ).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
      {selectedSkills.length === 0 && visibleCount < filteredProjects.length ? (
        <p
          role="status"
          aria-live="polite"
          className="mt-6 text-center text-sm text-[#607b96] light:text-[#475569]"
        >
          Loading more projects...
        </p>
      ) : null}
    </section>
  );
};

export default ProjectClient;
