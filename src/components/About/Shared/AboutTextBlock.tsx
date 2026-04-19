import CommentText from "@/components/CommentText/CommentText";

type AboutTextBlockProps = {
  text: string;
};

const AboutTextBlock = ({ text }: AboutTextBlockProps) => {
  return <CommentText text={text} />;
};

export default AboutTextBlock;
