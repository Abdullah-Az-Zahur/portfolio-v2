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
    const content = initialContent[key] ?? initialContent[DEFAULT_KEY] ?? "";
    const resUrl = initialResources[key];
    const prevUrl = resUrl?.replace(/\/view(?:\?.*)?$/, "/preview");

    return {
      activeKey: key,
      activeContent: content,
      resourceUrl: resUrl,
      previewUrl: prevUrl,
    };
  }, [activeTab, initialContent, initialResources]);

  return (
    <div>
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
            className="mt-3 inline-block text-sm text-[#93c5fd] transition-colors duration-180 ease-in-out hover:text-[#bfdbfe] light:text-[#2563a8] light:hover:text-[#0e7490]"
          >
            Open in a new tab
          </a>

          {previewUrl && (
            <iframe
              title="Attached document preview"
              src={previewUrl}
              loading="lazy"
              className="mt-4 h-[min(70vh,720px)] w-full rounded border border-(--app-border-color) light:border-[#cbd6e3]"
            />
          )}
        </details>
      )}
    </div>
  );
};

export default AboutClient;
