import CommentText from "@/shared/ui/CommentText/CommentText";

const NatureWalksHobby = () => {
  const text = `
      Nature Walks
      Short walks reset attention and reduce decision fatigue — tiny rituals that preserve consistency across long projects.
  `;

  return (
    <div>
      <CommentText text={text} />
    </div>
  );
};

export default NatureWalksHobby;
