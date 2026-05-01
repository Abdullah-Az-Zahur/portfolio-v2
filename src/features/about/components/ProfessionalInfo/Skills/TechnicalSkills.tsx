import CommentText from "@/shared/ui/CommentText/CommentText";

const TechnicalSkills = () => {
  const text = `
        Technical Playground
    Languages: Python, TypeScript, and JavaScript (ES6+).
    Web: Next.js, React, Node.js, Express, MongoDB — focused on fast, maintainable interfaces.
    Data & AI: practical ML workflows with PyTorch, Scikit-Learn, Pandas — I translate models into usable features.
    Workflow: Git, CI-friendly practices, React Hook Form, Tailwind CSS, and pragmatic testing.
    Strengths: thoughtful system design, clear technical communication, and shipping reliable results.
  `;

  return (
    <div>
      <CommentText text={text} />
    </div>
  );
};

export default TechnicalSkills;
