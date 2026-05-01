import CommentText from "@/shared/ui/CommentText/CommentText";

const BachelorThesisInfo = () => {
  const text = `
    Bachelor's Thesis
    Title: Prediction of Parkinson's Disease using Genetic Algorithms and Machine Learning
    Completed: September 2023, North Western University, Khulna
    Focus: combining optimization techniques with ML to extract meaningful signals from noisy biomedical data.
    Impact: a hands-on lesson in applying research to socially-relevant problems and designing reproducible experiments.
  `;

  return (
    <div>
      <CommentText text={text} />
    </div>
  );
};

export default BachelorThesisInfo;
