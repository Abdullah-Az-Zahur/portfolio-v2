import CommentText from "@/shared/ui/CommentText/CommentText";

const MusicHobby = () => {
  const text = `
        Music
        I enjoy coding while listening to instrumental playlists
        I explore different genres to stay creative and focused.
  `;

  return (
    <div>
      <CommentText text={text} />
    </div>
  );
};

export default MusicHobby;
