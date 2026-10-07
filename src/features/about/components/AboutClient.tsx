"use client";
import { useAppSelector } from "@/store/hooks";
import CommentText from "@/shared/ui/CommentText/CommentText";

type AboutClientProps = {
  initialContent: Record<string, string>;
  initialResources: Record<string, string>;
};

const AboutClient = ({
  initialContent,
  initialResources,
}: AboutClientProps) => {
  const { activeTab } = useAppSelector((state) => state.tabs);
  const activeContent =
    initialContent[activeTab ?? "bio-item"] ?? initialContent["bio-item"];
  const resourceUrl = initialResources[activeTab ?? "bio-item"];
  const previewUrl = resourceUrl?.replace(/\/view(?:\?.*)?$/, "/preview");

  return (
    <div>
      <CommentText text={activeContent} />
      {resourceUrl ? (
        <details className="mt-6 rounded-lg border border-gray-700 p-4">
          <summary className="cursor-pointer text-blue-300 hover:text-blue-200">
            View attached certificate or document
          </summary>
          <a
            href={resourceUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block text-sm text-blue-300 hover:text-blue-200"
          >
            Open in a new tab
          </a>
          {previewUrl ? (
            <iframe
              title="Attached document preview"
              src={previewUrl}
              className="mt-4 h-[min(70vh,720px)] w-full rounded border border-gray-700"
            />
          ) : null}
        </details>
      ) : null}
    </div>
  );
};

export default AboutClient;
