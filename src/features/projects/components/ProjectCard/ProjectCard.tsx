import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TbSlashes } from "react-icons/tb";

type Project = {
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
    <div className="flex flex-col h-full">
      <h3 className="flex items-center gap-2 text-sm mb-3">
        <span className="text-indigo-600 font-bold">Project {project.id}</span>
        <TbSlashes /> {project?.name}
      </h3>
      <div className="rounded-lg border border-gray-800 flex flex-col h-full">
        <div className="aspect-video overflow-hidden">
          <Image
            src={project.image}
            alt={`${project.name} project showcase`}
            width={400}
            height={225}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading={isLcpImage ? "eager" : "lazy"}
            priority={isLcpImage}
            className="object-cover w-full h-full rounded-t-lg"
          />
        </div>
        <div className="p-5 flex flex-col flex-grow bg-slate-950 rounded-lg">
          <p className="mb-5 line-clamp-3">{project.description}</p>
          <div className="mt-auto">
            <Link
              href={project.liveLink}
              target="_blank"
              className="inline-block p-2 bg-gray-800 text-white rounded-lg text-sm hover:bg-gray-700 transition"
            >
              view-project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
