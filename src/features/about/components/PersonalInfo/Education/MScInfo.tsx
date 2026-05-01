import CommentText from "@/shared/ui/CommentText/CommentText";

const MScInfo = () => {
  const text = `
    M.Sc.Eng. in ICT (Running)
    Currently studying at IICT, KUET.
    This stage is helping me go deeper into advanced ICT topics, research thinking, and AI/ML direction.
    I want to connect academic depth with practical software engineering and data-driven work.
  `;

  return (
    <div>
      <CommentText text={text} />
    </div>
  );
};

export default MScInfo;
