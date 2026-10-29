import CommentText from "@/shared/ui/CommentText/CommentText";

const HIKING_CONTENT = `
Hiking
Time on the trail is time well-invested: clearer thinking, better energy, and fewer blind spots when tackling tough problems.
Fresh air fuels better design decisions.
`.trim();

const HikingHobby = () => {
  return (
    <article aria-label="Hiking Hobbies and Problem Solving" className="w-full">
      <CommentText text={HIKING_CONTENT} />
    </article>
  );
};

export default HikingHobby;
