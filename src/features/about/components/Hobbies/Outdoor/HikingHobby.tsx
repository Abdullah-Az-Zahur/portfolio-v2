import CommentText from "@/shared/ui/CommentText/CommentText";

const HikingHobby = () => {
  const text = `
        Hiking
        Hiking helps me reset and return with better focus
        It improves my mindset for problem-solving.
  `;

  return (
    <div>
      <CommentText text={text} />
    </div>
  );
};

export default HikingHobby;
