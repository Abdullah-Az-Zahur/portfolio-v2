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
  const activeKey = activeTab ?? "bio-item";
  const activeContent = initialContent[activeKey] ?? initialContent["bio-item"];
  const resourceUrl = initialResources[activeKey];
  const previewUrl = resourceUrl?.replace(/\/view(?:\?.*)?$/, "/preview");

  return (
    <div>
      {/* key দিলে tab change হলেই CommentText reset হবে */}
      <CommentText key={activeKey} text={activeContent} />

      {resourceUrl ? (
        <details className="about-doc-details mt-6 rounded-lg border p-4">
          <summary className="about-doc-summary cursor-pointer">
            View attached certificate or document
          </summary>
          <a
            href={resourceUrl}
            target="_blank"
            rel="noreferrer"
            className="about-doc-link mt-3 inline-block text-sm"
          >
            Open in a new tab
          </a>
          {previewUrl ? (
            <iframe
              title="Attached document preview"
              src={previewUrl}
              className="about-doc-iframe mt-4 h-[min(70vh,720px)] w-full rounded border"
            />
          ) : null}
        </details>
      ) : null}
    </div>
  );
};

export default AboutClient;
