import CommentText from "@/shared/ui/CommentText/CommentText";

const TechnicalSkills = () => {
  const text = `
        Technical Playground
    Languages I work with: Python, JavaScript (ES6+), TypeScript, and PHP.
    AI & data science: Machine Learning, Deep Learning, PyTorch, Scikit-Learn, Pandas, NumPy, and data analysis.
    Web development: React, Next.js, Node.js, Express.js, MongoDB, Redux Toolkit, Tailwind CSS, and REST APIs.
    Tools and workflow: Git & GitHub, Postman, Firebase, Netlify, JWT, React Hook Form, and SweetAlert.
    Core strengths: problem-solving, research mindset, system design, adaptability, and clear technical communication.
  `;

  return (
    <div>
      <CommentText text={text} />
    </div>
  );
};

export default TechnicalSkills;
