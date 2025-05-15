import React from "react";
import CommentText from "../CommentText/CommentText";

const QwikIt = () => {
  const text = `
        Front-End Developer Intern at Qwik IT Services (Remote) — Feb 2025 – Apr 2025
        Contributed to frontend development tasks under supervision; 
        maintained project deadlines, followed professional development practices, 
        and received a completion certificate for successfully finishing the internship.
  `;

  return (
    <div>
      <CommentText text={text} />
    </div>
  );
};

export default QwikIt;
