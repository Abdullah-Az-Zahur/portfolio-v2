import CommentText from "@/components/CommentText/CommentText";

const MScInfo = () => {
  const text = `
    M.Sc.Eng. in ICT (Running)
    Currently studying at IICT, KUET (admitted in 2025).
    This phase is helping me go deeper into advanced ICT topics and research thinking.
    I am focused on connecting academic depth with practical software development.
  `;

  return (
    <div>
      <CommentText text={text} />
    </div>
  );
};

export default MScInfo;
