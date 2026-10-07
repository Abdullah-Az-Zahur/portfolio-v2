"use client";
import { useAppSelector } from "@/store/hooks";
import { useEffect } from "react";
import { replaceProjects } from "@/store/features/projects/projectsSlice";
import { useAppDispatch } from "@/store/hooks";
import React from "react";
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
    <div className="p-7 md:p-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectClient;
