import CommentText from "@/shared/ui/CommentText/CommentText";

const EncoderITExperience = () => {
  const text = `
    Encoder IT Solution (Remote) | Front-End Developer Intern
    March 2025 - June 2025 (Paid Internship)
    Focus: turning polished UI into resilient features.
    I implemented MERN modules with secure CRUD, authentication, and pragmatic error handling.
    Highlights: shipped production features for Car-Rental and HQMotoServices, and developed PHP extensions for a WordPress project.
    Lesson: ship dependable, simple solutions that scale — attention to detail matters.
  `;

  return (
    <div>
      <CommentText text={text} />
    </div>
  );
};

export default EncoderITExperience;
