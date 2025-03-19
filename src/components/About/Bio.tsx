import React from "react";
import CommentText from "../CommentText/CommentText";

const Bio = () => {
  const text = `
        About Me
        Hi, I’m MD. Abdullah Az-Zahur,
        A passionate and results-driven Web Developer
        Skilled in React, Tailwind CSS, Node.js, MongoDB, and Next.js
        Building dynamic, user-friendly web apps
        Creating seamless frontend experiences and robust backend solutions
        Designing interactive interfaces, integrating advanced features
        Contributed to projects like Jobify and Survey Vista
        Driven by problem-solving and innovation
        Thrive in collaborative environments and love exploring new tech
        Let’s connect and create something amazing!
  `;

  return (
    <div>
      <CommentText text={text} />
    </div>
  );
};

export default Bio;
