import CommentText from "@/shared/ui/CommentText/CommentText";

const UniversityInfo = () => {
  const text = `
    Bachelor of Science in Computer Science and Engineering (B.Sc.)
    North Western University, Khulna | Graduated: September 2023
    CGPA: 3.23/4.00
    Studied programming, software development, databases, and algorithms.
    This phase shaped my foundation in web development and problem-solving.
  `;

  return (
    <div>
      <CommentText text={text} />
    </div>
  );
};

export default UniversityInfo;
