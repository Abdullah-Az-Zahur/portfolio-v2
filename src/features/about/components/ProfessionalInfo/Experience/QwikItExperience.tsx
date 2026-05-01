import CommentText from "@/shared/ui/CommentText/CommentText";

const QwikItExperience = () => {
  const text = `
    Qwik IT Services (Remote) | Front-End Developer Intern
    February 2025 - April 2025 (Unpaid Internship)
    This internship taught me how to turn static layouts into products that feel alive.
    I converted HTML and CSS designs into a React-based restaurant website, Qwik-Bistro.
    I also built a JavaScript construction calculator for the Qwik Tools page,
    which was later adapted into an Android app.
    It gave me a strong feel for client needs, iteration, and cross-platform thinking.
  `;

  return (
    <div>
      <CommentText text={text} />
    </div>
  );
};

export default QwikItExperience;
