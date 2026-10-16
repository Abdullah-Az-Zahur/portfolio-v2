import CommentText from "@/shared/ui/CommentText/CommentText";

const InterestsInfo = () => {
  const text = `
        Interests
    Outside code, I stay curious in ways that sharpen my work: team sports (football, cricket), travel that widens perspective, and hands-on experiments with new web and AI tools.
    These habits inform my product choices — I look for durability, clarity, and delightful small details.
  `;

  return (
    <div>
      <CommentText text={text} />
    </div>
  );
};

export default InterestsInfo;
