'use client'
import { useTabs } from "@/contexts/Context";
import { useState, useEffect } from "react";

const projects = [
  { id: 1, title: "Project 1", skills: ["React", "CSS"] },
  { id: 2, title: "Project 2", skills: ["Vue", "HTML"] },
  { id: 3, title: "Project 3", skills: ["Angular", "CSS"] },
];

const ProjectPage = () => {
  const { selectedSkills } = useTabs(); // Get selected skills from the context
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    if (selectedSkills.size === 0) {
      setFilteredProjects(projects); // Show all projects if no skills are selected
    } else {
      const filtered = projects.filter((project) =>
        project.skills.some((skill) => selectedSkills.has(skill))
      );
      setFilteredProjects(filtered);
    }
  }, [selectedSkills]);

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {filteredProjects.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectPage;