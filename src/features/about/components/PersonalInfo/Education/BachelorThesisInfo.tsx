import CommentText from "@/shared/ui/CommentText/CommentText";

const BachelorThesisInfo = () => {
  const text = `
    Bachelor's Thesis
    Title: Prediction of Parkinson Disease using Genetic Algorithm and Machine Learning Technique.
    Completed at North Western University, Khulna (September 2023).
    This work pulled me deeper into machine learning, optimization, and healthcare-oriented research.
    More than a thesis, it became a turning point in how I think about building technology with real social impact.
  `;

  return (
    <div>
      <CommentText text={text} />
    </div>
  );
};

export default BachelorThesisInfo;
