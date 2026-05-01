import CommentText from "@/shared/ui/CommentText/CommentText";

const HighSchoolInfo = () => {
  const text = `
    Higher Secondary Certificate (HSC)
    Bangladesh Navy School and College, Mongla | Jessore Board | 2018
    GPA: 3.92/5.00
    I developed a rigorous approach to analytical thinking and disciplined study — the early scaffolding for problem-solving in engineering.
  `;

  return (
    <div>
      <CommentText text={text} />
    </div>
  );
};

export default HighSchoolInfo;
