import CommentText from "@/shared/ui/CommentText/CommentText";

const QwikItExperience = () => {
  const text = `
    Qwik IT Services (Remote) | Front-End Developer Intern
    February 2025 - April 2025 (Unpaid Internship)
    Focus: rapid prototyping and client-focused iteration.
    Converted static designs into a polished React site (Qwik-Bistro) and built a reusable JavaScript tool that later became an Android utility.
    Outcome: faster delivery cycles, stronger client collaboration, and a practical sense for cross-platform reuse.
  `;

  return (
    <div>
      <CommentText text={text} />
    </div>
  );
};

export default QwikItExperience;
