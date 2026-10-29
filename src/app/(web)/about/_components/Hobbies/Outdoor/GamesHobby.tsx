import CommentText from "@/shared/ui/CommentText/CommentText";

const GAMES_CONTENT = `
Games
Strategic and narrative games sharpen pattern recognition and scenario thinking — skills I bring to system design and UX trade-offs.
`.trim();

const GamesHobby = () => {
  return (
    <article
      aria-label="Gaming Hobbies and Strategic Thinking"
      className="w-full"
    >
      <CommentText text={GAMES_CONTENT} />
    </article>
  );
};

export default GamesHobby;
