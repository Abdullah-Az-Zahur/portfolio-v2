import CommentText from "@/shared/ui/CommentText/CommentText";

const HighSchoolInfo = () => {
  const text = `
    Secondary School Certificate (SSC)
    Mongla Bandar Secondary School, Mongla | 2016
    GPA: 4.11/5.00
    Solid foundation in scientific thinking and problem solving — the practical backbone that guided my path into technology.
  `;

  return (
    <div>
      <CommentText text={text} />
    </div>
  );
};

export default HighSchoolInfo;
