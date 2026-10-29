import CommentText from "@/shared/ui/CommentText/CommentText";

const MUSIC_CONTENT = `
Music
Instrumental playlists are my background engine for deep work — they keep focus and spark small creative leaps.
I explore diverse genres to reset perspective during long sprints.
`.trim();

const MusicHobby = () => {
  return (
    <article aria-label="Music Hobbies and Focus Work" className="w-full">
      <CommentText text={MUSIC_CONTENT} />
    </article>
  );
};

export default MusicHobby;
