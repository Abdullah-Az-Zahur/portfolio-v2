"use client";

import Link from "next/link";
import { FaDownload } from "react-icons/fa";

type AboutSidebarResourcesProps = {
  resources: ReadonlyArray<{
    label: string;
    href: string;
  }>;
  wrapperClassName: string;
  linkClassName: string;
  itemClassName?: string;
};

const AboutSidebarResources = ({
  resources,
  wrapperClassName,
  linkClassName,
  itemClassName,
}: AboutSidebarResourcesProps) => {
  return (
    <div className={wrapperClassName}>
      {resources.map((resource) => (
        <div key={resource.label} className={itemClassName}>
          <Link
            href={resource.href}
            target="_blank"
            rel="noopener noreferrer"
            download
            className={linkClassName}
          >
            <FaDownload className="text-lg" />
            {resource.label}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default AboutSidebarResources;
