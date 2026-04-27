import CommentText from "@/shared/ui/CommentText/CommentText";

const InterestsInfo = () => {
  const text = `
        Interests
        Love playing football, cricket, and volleyball
        Enjoy traveling and experiencing diverse cultures
        A tech enthusiast-always exploring new technologies
        Passionate about continuous learning and personal growth
  `;

  return (
    <div>
      <CommentText text={text} />
    </div>
  );
};

export default InterestsInfo;
