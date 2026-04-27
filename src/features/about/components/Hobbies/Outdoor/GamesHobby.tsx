import CommentText from "@/shared/ui/CommentText/CommentText";

const GamesHobby = () => {
  const text = `
        Games
        I enjoy strategic and story-driven games
        They help me improve focus and creative thinking.
  `;

  return (
    <div>
      <CommentText text={text} />
    </div>
  );
};

export default GamesHobby;
