import CommentText from "@/shared/ui/CommentText/CommentText";

const HikingHobby = () => {
  const text = `
      Hiking
      Time on the trail is time well-invested: clearer thinking, better energy, and fewer blind spots when tackling tough problems.
      Fresh air fuels better design decisions.
  `;

  return (
    <div>
      <CommentText text={text} />
    </div>
  );
};

export default HikingHobby;
