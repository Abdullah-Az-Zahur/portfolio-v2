import CommentText from "@/shared/ui/CommentText/CommentText";

const UniversityInfo = () => {
  const text = `
    Bachelor of Science in Computer Science and Engineering (B.Sc.)
    North Western University, Khulna | Graduated: September 2023
    CGPA: 3.23/4.00
    Core studies in software systems, algorithms, and databases — the practical toolkit I applied to real projects and internships.
  `;

  return (
    <div>
      <CommentText text={text} />
    </div>
  );
};

export default UniversityInfo;
