"use client";
import { useAppSelector } from "@/store/hooks";
import CommentText from "@/shared/ui/CommentText/CommentText";

type AboutClientProps = {
  initialContent: Record<string, string>;
};

const AboutClient = ({ initialContent }: AboutClientProps) => {
  const { activeTab } = useAppSelector((state) => state.tabs);
  const activeContent =
    initialContent[activeTab ?? "bio-item"] ?? initialContent["bio-item"];

  return (
    <div>
      <CommentText text={activeContent} />
    </div>
  );
};

export default AboutClient;
