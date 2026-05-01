import CommentText from "@/shared/ui/CommentText/CommentText";

const BioInfo = () => {
  const text = `
    Hello — I’m Md. Abdullah Az-Zahur.
    I’m a software engineer. I turn thoughtful ideas into simple, reliable web experiences that people enjoy using.
    Day-to-day I build with Next.js and the MERN stack, but what I care about most is clarity: making complex systems feel effortless.
    I’m currently deepening my AI/ML knowledge through an M.Sc. in ICT, applying research to practical problems.
    My thesis on Parkinson’s prediction taught me how data and design can create real-world impact.
    I prefer craft over noise — clean solutions, well-tested, and quietly ambitious.
  `;

  return (
    <div>
      <CommentText text={text} />
    </div>
  );
};

export default BioInfo;
