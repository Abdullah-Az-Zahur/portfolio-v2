import CommentText from "@/shared/ui/CommentText/CommentText";

const NATURE_WALKS_CONTENT = `
Nature Walks
Short walks reset attention and reduce decision fatigue — tiny rituals that preserve consistency across long projects.
`.trim();

const NatureWalksHobby = () => {
  return (
    <article
      aria-label="Nature Walks Hobbies and Productivity"
      className="w-full"
    >
      <CommentText text={NATURE_WALKS_CONTENT} />
    </article>
  );
};

export default NatureWalksHobby;
