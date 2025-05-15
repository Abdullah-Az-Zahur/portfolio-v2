import React from "react";
import CommentText from "../CommentText/CommentText";

const EncoderIT = () => {
  const text = `
        Frontend Developer Intern at Encoder IT Solution (Remote) — Mar 2025 – Present
        Working in a paid internship role with a focus on frontend development; 
        collaborating remotely under supervision, 
        adhering to company policies and timelines, 
        and contributing to real-world web development projects 
        during a 6-month probationary period.
  `;

  return (
    <div>
      <CommentText text={text} />
    </div>
  );
};

export default EncoderIT;
