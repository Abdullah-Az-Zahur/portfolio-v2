import CommentText from "@/shared/ui/CommentText/CommentText";

const TechnicalSkills = () => {
  const text = `
        Technical Playground
        Languages I work with: JavaScript (ES6+), TypeScript, PHP, HTML5, CSS3.
        Frontend focus: React, Next.js, Tailwind CSS, Bootstrap, Redux Toolkit, Framer Motion.
        Backend and platform: Node.js, Express.js, REST APIs, JWT, Firebase, MongoDB.
        Daily tools: Git, VS Code, Postman, Axios, Netlify, React Hook Form, SweetAlert.
        Team strengths: communication, collaboration, ownership, and problem-solving.
  `;

  return (
    <div>
      <CommentText text={text} />
    </div>
  );
};

export default TechnicalSkills;
