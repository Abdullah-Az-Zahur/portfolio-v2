import CommentText from "@/shared/ui/CommentText/CommentText";

const BOOKS_CONTENT = `
Books
I read technology, design, and leadership books to borrow other people's shortcuts.
Biographies give context — how ideas survive and scale in the real world.
`.trim();

const BooksHobby = () => {
  return (
    <article aria-label="Books and Reading Hobbies" className="w-full">
      <CommentText text={BOOKS_CONTENT} />
    </article>
  );
};

export default BooksHobby;
