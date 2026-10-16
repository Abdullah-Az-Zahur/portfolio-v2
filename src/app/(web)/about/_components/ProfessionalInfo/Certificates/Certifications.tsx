import CommentText from "@/shared/ui/CommentText/CommentText";

const Certifications = () => {
  const text = `
    Learning Journey & Certifications
    Complete Web Development Course with Jhankar Mahbub (Jan - Jun 2024)
    Communication Hacks (Certified) — practical tips for clearer collaboration
    Communication Secrets (Certified) — improving stakeholder-facing communication
    I treat certificates as fuel: learn, validate, and then build real features.
  `;

  return (
    <div>
      <CommentText text={text} />
    </div>
  );
};

export default Certifications;
