import CommentText from "@/shared/ui/CommentText/CommentText";

const EncoderITExperience = () => {
  const text = `
    Encoder IT Solution (Remote) | Front-End Developer Intern
    March 2025 - June 2025 (Paid Internship)
    This was where I learned how small implementation details can change how a product feels.
    I worked on full-stack MERN modules with secure CRUD flows and authentication.
    I contributed to projects like Car-Rental, HQMotoServices, and Mithun-Chakra.
    I also built custom PHP plugins for the WordPress project EISNews.
    Working closely with the team taught me how to ship dependable work without overcomplicating the process.
  `;

  return (
    <div>
      <CommentText text={text} />
    </div>
  );
};

export default EncoderITExperience;
