import CommentText from "@/shared/ui/CommentText/CommentText";

const GamesHobby = () => {
  const text = `
      Games
      Strategic and narrative games sharpen pattern recognition and scenario thinking — skills I bring to system design and UX trade-offs.
  `;

  return (
    <div>
      <CommentText text={text} />
    </div>
  );
};

export default GamesHobby;
