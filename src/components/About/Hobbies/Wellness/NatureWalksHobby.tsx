import CommentText from "@/components/CommentText/CommentText";

const NatureWalksHobby = () => {
  const text = `
        Nature Walks
        Short nature walks keep me fresh during long coding sessions
        They help me maintain clarity and consistency.
  `;

  return (
    <div>
      <CommentText text={text} />
    </div>
  );
};

export default NatureWalksHobby;
