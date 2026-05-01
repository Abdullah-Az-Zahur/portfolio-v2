import CommentText from "@/shared/ui/CommentText/CommentText";

const MScInfo = () => {
  const text = `
    M.Sc.Eng. in ICT (In progress)
    IICT, KUET
    Deepening research skills in AI/ML and advanced ICT topics, with a focus on turning experimental models into practical, production-ready features.
    Goal: bridge academic rigor with pragmatic engineering.
  `;

  return (
    <div>
      <CommentText text={text} />
    </div>
  );
};

export default MScInfo;
