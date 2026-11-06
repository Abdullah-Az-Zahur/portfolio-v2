"use client";

import { useMemo } from "react";
import { useAppSelector } from "@/store/hooks";
import CommentText from "@/shared/ui/CommentText/CommentText";

type AboutClientProps = {
  initialContent: Record<string, string>;
  initialResources: Record<string, string>;
};

const DEFAULT_KEY = "bio-item";

const AboutClient = ({
  initialContent,
  initialResources,
}: AboutClientProps) => {
  const { activeTab } = useAppSelector((state) => state.tabs);

  const { activeKey, activeContent, resourceUrl, previewUrl } = useMemo(() => {
    const key = activeTab ?? DEFAULT_KEY;
    const content =
      initialContent?.[key] ?? initialContent?.[DEFAULT_KEY] ?? "";
    const resUrl = initialResources?.[key];
    const prevUrl = resUrl?.replace(/\/view(?:\?.*)?$/, "/preview");

    return {
      activeKey: key,
      activeContent: content,
      resourceUrl: resUrl,
      previewUrl: prevUrl,
    };
  }, [activeTab, initialContent, initialResources]);

  return (
    <article
      aria-labelledby="about-content-heading"
      className="w-full p-4 sm:p-6 lg:p-8"
    >
      <header className="mb-6 max-w-3xl">
        <h1
          id="about-content-heading"
          className="text-2xl font-bold text-[#e5e9f0] light:text-[#172337] sm:text-3xl"
        >
          About Md. Abdullah Az-Zahur
        </h1>
        <p className="mt-3 text-sm leading-7 text-[#9fb1c5] light:text-[#52657d] sm:text-base">
          Learn about my experience, education, technical skills, research
          interests, and professional journey as a software engineer and AI and
          machine learning researcher.
        </p>
      </header>
      {/* key দিলে tab change হলেই CommentText reset হবে */}
      <CommentText key={activeKey} text={activeContent} />

      {resourceUrl && (
        <details className="mt-6 rounded-lg border border-(--app-border-color) bg-transparent p-4 light:border-[#cbd6e3] light:bg-[#f8fbfe]">
          <summary className="cursor-pointer font-medium text-[#93c5fd] transition-colors duration-180 ease-in-out hover:text-[#bfdbfe] focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 light:text-[#2563a8] light:hover:text-[#0e7490]">
            View attached certificate or document
          </summary>

          <a
            href={resourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm text-[#93c5fd] transition-colors duration-180 ease-in-out hover:text-[#bfdbfe] focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 light:text-[#2563a8] light:hover:text-[#0e7490]"
          >
            Open in a new tab ↗
          </a>

          {previewUrl && (
            <iframe
              title={`Attached document preview for ${activeKey}`}
              src={previewUrl}
              loading="lazy"
              className="mt-4 h-[min(70vh,720px)] w-full rounded border border-(--app-border-color) light:border-[#cbd6e3]"
            />
          )}
        </details>
      )}
    </article>
  );
};

export default AboutClient;
