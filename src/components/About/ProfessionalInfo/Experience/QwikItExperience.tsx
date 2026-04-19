import CommentText from "@/components/CommentText/CommentText";

const QwikItExperience = () => {
  const text = `
    Qwik IT Services (Remote) | Front-End Developer Intern
    February 2025 - April 2025 (Unpaid Internship)
    This was where I learned how to turn static layouts into real, interactive products.
    I converted HTML and CSS designs into a React-based restaurant website: Qwik-Bistro.
    I built a JavaScript construction calculator for the Qwik Tools page,
    which was later adapted into an Android app.
    It gave me strong exposure to client requirements, iteration, and cross-platform thinking.
  `;

  return (
    <div>
      <CommentText text={text} />
    </div>
  );
};

export default QwikItExperience;
