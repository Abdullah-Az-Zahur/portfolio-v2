import CommentText from "@/shared/ui/CommentText/CommentText";

const BioInfo = () => {
  const text = `
    Hey, I am Md. Abdullah Az-Zahur.
    I build web experiences that feel clean, fast, and actually enjoyable to use.
    My comfort zone is the MERN and Next.js ecosystem, but I always love learning beyond it.
    I enjoy turning rough ideas into polished products with thoughtful UI and reliable backend logic.
    What excites me most is solving real user problems, not just writing code.
    Outside of code, I stay curious, collaborative, and always ready for the next challenge.
    Location: Mongla Port, Khulna, Bangladesh.
    If you want to build something meaningful together, I would love to connect.
  `;

  return (
    <div>
      <CommentText text={text} />
    </div>
  );
};

export default BioInfo;
