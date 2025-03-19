import React from 'react';
import CommentText from '../CommentText/CommentText';

const HighSchool = () => {

    const text = `
        Higher Secondary Certificate
        Science Group, BN School & College, Mongla | Jessore Board | 2018
        GPA: 3.92/5.00
        Focused on Science 
        Excelling in math, physics, and chemistry.
        Developed analytical skills and 
        A strong foundation for future tech studies.
  `;

    return (
        <div>
            <CommentText text={text} />
        </div>
    );
};

export default HighSchool;