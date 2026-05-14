"use client";
import { setProjects } from "@/store/features/projects/projectsSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import axios from "axios";
import React, { useEffect } from "react";
import ProjectCard from "./ProjectCard/ProjectCard";

const ProjectClient = () => {
  const dispatch = useAppDispatch();
  const { filteredProjects } = useAppSelector((state) => state.projects);

  useEffect(() => {
    void axios
      .get("/api/projects")
      .then((response) => dispatch(setProjects(response.data)))
      .catch((error) => {
        console.error("Failed to load projects:", error);
      });
  }, [dispatch]);

  return (
    <div className="p-7 md:p-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        {filteredProjects.map((project) => (
          <ProjectCard key={project._id || project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectClient;
