import CommentText from "@/shared/ui/CommentText/CommentText";

const InterestsInfo = () => {
  const text = `
        Interests
    Sports keep me active, especially football, cricket, and volleyball.
    I enjoy exploring new web technologies, AI ideas, and practical research work.
    Travel and culture are also part of how I stay curious and open-minded.
    I like learning things that help me build better products and better habits.
  `;

  return (
    <div>
      <CommentText text={text} />
    </div>
  );
};

export default InterestsInfo;
