import CommentText from "@/shared/ui/CommentText/CommentText";

const BioInfo = () => {
  const text = `
    Hey, I’m Md. Abdullah Az-Zahur.
    I’m a software engineer from Mongla Port, Khulna, and I’ve always liked turning ideas into something people can actually use.
    I mostly work with MERN and Next.js, but what really drives me is the process behind the code: simplifying complexity, shaping useful interfaces, and making the experience feel smooth.
    Alongside web development, I’m pursuing M.Sc. in ICT and keeping a strong focus on AI/ML research.
    My thesis on Parkinson disease prediction made me care even more about healthcare-focused data science and meaningful problem solving.
    I like building things that are clean, practical, and quietly impressive.
  `;

  return (
    <div>
      <CommentText text={text} />
    </div>
  );
};

export default BioInfo;
