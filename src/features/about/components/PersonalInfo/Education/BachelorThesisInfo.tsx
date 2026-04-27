import CommentText from "@/shared/ui/CommentText/CommentText";

const BachelorThesisInfo = () => {
  const text = `
    Bachelor's Thesis
    Title: Prediction of Parkinson Disease using Genetic Algorithm and Machine Learning Technique.
    Completed at North Western University, Khulna (September 2023).
    Through this work, I explored machine learning, optimization, and health-focused data analysis.
    It strengthened my interest in building technology that can create real social impact.
  `;

  return (
    <div>
      <CommentText text={text} />
    </div>
  );
};

export default BachelorThesisInfo;
