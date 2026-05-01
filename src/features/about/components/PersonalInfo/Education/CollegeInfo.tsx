import CommentText from "@/shared/ui/CommentText/CommentText";

const CollegeInfo = () => {
  const text = `
    Secondary School Certificate (SSC)
    Science Group, Mongla Bandar Secondary School, Mongla | 2016
    GPA: 4.11/5.00
    Strong performance in science subjects helped build my confidence early on.
    It also strengthened the logical thinking that later guided me toward tech.
  `;

  return (
    <div>
      <CommentText text={text} />
    </div>
  );
};

export default CollegeInfo;
