"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface TypingAnimationProps {
  texts: { text: string; className?: string }[];
  typingSpeed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
  showCursor?: boolean;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  texts,
  typingSpeed = 90,
  deleteSpeed = 45,
  pauseTime = 1200,
  showCursor = true,
}) => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Typing effect
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    const currentFull = texts[textIndex]?.text ?? "";

    if (!isDeleting && displayText.length < currentFull.length) {
      // typing character by character
      const nextChar = currentFull[displayText.length];
      // Natural variation: pause slightly longer after punctuation
      const isPunctuation = /[.,!?;:]/.test(nextChar);
      const delay = typingSpeed + (isPunctuation ? 120 : 0);

      timeoutRef.current = setTimeout(() => {
        setDisplayText(currentFull.slice(0, displayText.length + 1));
      }, delay);
    } else if (!isDeleting && displayText.length === currentFull.length) {
      // Pause before deleting
      timeoutRef.current = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && displayText.length > 0) {
      // deleting
      timeoutRef.current = setTimeout(() => {
        setDisplayText(currentFull.slice(0, displayText.length - 1));
      }, deleteSpeed);
    } else {
      // move to next text
      timeoutRef.current = setTimeout(() => {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, 250);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [
    displayText,
    isDeleting,
    textIndex,
    texts,
    typingSpeed,
    deleteSpeed,
    pauseTime,
  ]);

  // Blinking cursor
  useEffect(() => {
    const blink = setInterval(() => setCursorVisible((v) => !v), 500);
    return () => clearInterval(blink);
  }, []);

  return (
    <motion.span
      key={textIndex}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={`text-xl font-raleway md:text-3xl text-primary ${texts[textIndex]?.className ?? ""}`}
    >
      {displayText}
      {showCursor && (
        <motion.span
          aria-hidden
          animate={{ opacity: cursorVisible ? 1 : 0 }}
          transition={{ duration: 0.1 }}
          className="ml-0.5 inline-block"
        >
          |
        </motion.span>
      )}
    </motion.span>
  );
};

export default TypingAnimation;
