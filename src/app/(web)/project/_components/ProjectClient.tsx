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
  const { allProjects, filteredProjects, selectedSkills } = useAppSelector(
    (state) => state.projects,
  );
  const [visibleCount, setVisibleCount] = useState(1);
  const projectsToRender =
    allProjects.length > 0 ? filteredProjects : initialProjects;

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
      <header className="mx-auto mb-8 max-w-4xl">
        <h1
          id="projects-heading"
          className="text-2xl font-bold text-[#e5e9f0] light:text-[#172337] sm:text-3xl"
        >
          Projects
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-[#9fb1c5] light:text-[#52657d] sm:text-base">
          Explore web applications and software projects built with modern
          frontend, backend, database, and machine learning technologies. Select
          a technology from the sidebar to view matching projects.
        </p>
      </header>
      {projectsToRender.length === 0 ? (
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
            ? projectsToRender
            : projectsToRender.slice(0, visibleCount)
          ).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
      {selectedSkills.length === 0 && visibleCount < projectsToRender.length ? (
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
