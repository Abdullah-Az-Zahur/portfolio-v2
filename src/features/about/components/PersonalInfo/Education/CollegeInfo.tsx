import CommentText from "@/shared/ui/CommentText/CommentText";

const CollegeInfo = () => {
  const text = `
    Secondary School Certificate (SSC)
    Science Group, Mongla Bandar Secondary School, Mongla | 2016
        GPA: 4.11/5.00
        Achieved top results in Science
        Sparking my passion for problem-solving
    Logical thinking key to my journey in tech.
  `;

  return (
    <div>
      <CommentText text={text} />
    </div>
  );
};

export default CollegeInfo;
