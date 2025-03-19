import React from 'react';
import CommentText from '../CommentText/CommentText';

const University = () => {

    const text = `
        Bachelor of Science in Computer Science and Engineering
        North Western University, Khulna | 2023
        CGPA: 3.23/4.00
        Studied Computer Science and Engineering, 
        Mastering programming, software development,
        And problem-solving. 
        Built expertise in web development,
        Databases, and algorithms, shaping my tech career.
  `;

    return (
        <div>
            <CommentText text={text}/>
        </div>
    );
};

export default University;