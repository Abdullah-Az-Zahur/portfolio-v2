"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypingAnimationProps {
  texts: { text: string; className?: string }[];
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({ texts }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const typingSpeed = 100;
  const deleteSpeed = 50;
  const pauseTime = 1000;

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText.length < texts[textIndex].text.length) {
      timeout = setTimeout(() => {
        setDisplayText(texts[textIndex].text.slice(0, displayText.length + 1));
      }, typingSpeed);
    } else if (
      !isDeleting &&
      displayText.length === texts[textIndex].text.length
    ) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(texts[textIndex].text.slice(0, displayText.length - 1));
      }, deleteSpeed);
    } else {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, 300);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, texts]);

  return (
    <motion.span
      key={textIndex}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={`md:text-3xl text-xl font-raleway text-primary ${texts[textIndex].className}`}
    >
      {displayText}|
    </motion.span>
  );
};

export default TypingAnimation;
