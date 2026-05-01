import CommentText from "@/shared/ui/CommentText/CommentText";

const HighSchoolInfo = () => {
  const text = `
    Higher Secondary Certificate (HSC)
    Science Group, Bangladesh Navy School and College, Mongla | Jessore Board | 2018
    GPA: 3.92/5.00
    Built a strong foundation in science, math, and analytical thinking.
    That period shaped my early interest in problem-solving and technology.
  `;

  return (
    <div>
      <CommentText text={text} />
    </div>
  );
};

export default HighSchoolInfo;
