import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TbSlashes } from "react-icons/tb";

export type Project = {
  id: number;
  name: string;
  liveLink: string;
  repoLink: string;
  image: string;
  description: string;
  skills: string[];
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const isLcpImage = project.image.includes("Job-Nest.png");

  return (
    <article
      aria-label={`Project: ${project.name}`}
      className="project-card flex flex-col h-full"
    >
      <h3 className="flex items-center gap-2 text-sm font-mono mb-3 text-[#e5e9f0] light:text-[#172337]">
        <span className="text-[#4d5bce] font-bold light:text-[#3b4fbb]">
          Project {project.id}
        </span>
        <TbSlashes className="text-[#607b96]" aria-hidden="true" />
        <span className="text-[#607b96] light:text-[#475569]">
          {project?.name}
        </span>
      </h3>

      <div className="project-card-frame rounded-lg border border-(--app-border-color) bg-[#011221] flex flex-col h-full overflow-hidden transition-colors duration-200 light:border-[#cbd6e3] light:bg-white">
        <div className="aspect-video w-full overflow-hidden border-b border-(--app-border-color) light:border-[#cbd6e3]">
          <Image
            src={project.image}
            alt={`${project.name} project showcase preview`}
            width={400}
            height={225}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading={isLcpImage ? "eager" : "lazy"}
            priority={isLcpImage}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="project-card-body p-5 flex flex-col flex-grow">
          <p className="mb-5 text-sm text-[#607b96] line-clamp-3 light:text-[#475569]">
            {project.description}
          </p>

          <div className="mt-auto">
            <Link
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live project ${project.name}`}
              className="inline-block rounded-lg bg-[#1c2b3a] px-3.5 py-2 text-xs font-mono font-medium text-white transition hover:bg-[#263b50] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#43d9ad] light:bg-[#0e7490] light:text-white light:hover:bg-[#0891b2] light:focus-visible:ring-[#0e7490]"
            >
              view-project
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
