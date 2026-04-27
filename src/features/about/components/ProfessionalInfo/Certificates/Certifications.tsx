import CommentText from "@/shared/ui/CommentText/CommentText";

const Certifications = () => {
  const text = `
    Learning Journey and Certifications
    Complete Web Development Course with Jhankar Mahbub (Jan - June 2024).
    Communication Hacks (Certified, October 27, 2024).
    Communication Secrets (Certified, November 21, 2024).
    I treat certifications as checkpoints, then apply what I learn in real projects.
  `;

  return (
    <div>
      <CommentText text={text} />
    </div>
  );
};

export default Certifications;
