import CommentText from "@/shared/ui/CommentText/CommentText";

const BooksHobby = () => {
  const text = `
      Books
      I read technology, design, and leadership books to borrow other people's shortcuts.
      Biographies give context — how ideas survive and scale in the real world.
  `;

  return (
    <div>
      <CommentText text={text} />
    </div>
  );
};

export default BooksHobby;
