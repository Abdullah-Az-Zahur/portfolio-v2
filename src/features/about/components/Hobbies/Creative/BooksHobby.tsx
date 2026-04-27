import CommentText from "@/shared/ui/CommentText/CommentText";

const BooksHobby = () => {
  const text = `
        Books
        Reading technology and productivity books keeps me inspired
        Biographies help me learn from real-world journeys.
  `;

  return (
    <div>
      <CommentText text={text} />
    </div>
  );
};

export default BooksHobby;
