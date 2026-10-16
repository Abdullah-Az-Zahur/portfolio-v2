import CommentText from "@/shared/ui/CommentText/CommentText";

const MusicHobby = () => {
  const text = `
      Music
      Instrumental playlists are my background engine for deep work — they keep focus and spark small creative leaps.
      I explore diverse genres to reset perspective during long sprints.
  `;

  return (
    <div>
      <CommentText text={text} />
    </div>
  );
};

export default MusicHobby;
