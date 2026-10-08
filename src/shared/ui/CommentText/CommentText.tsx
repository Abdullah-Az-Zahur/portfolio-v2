"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

interface CommentTextProps {
  text: string;
  typingSpeed?: number;
  lineDelay?: number;
  startDelay?: number;
}

const CommentText: React.FC<CommentTextProps> = ({
  text,
  typingSpeed = 30,
  lineDelay = 220,
  startDelay = 350,
}) => {
  const lines = useMemo(
    () => text.split("\n").filter((line) => line.trim() !== ""),
    [text],
  );

  const formattedLines = useMemo(() => ["/**", ...lines, "*/"], [lines]);

  const lineContents = useMemo(
    () =>
      formattedLines.map((line, index) => {
        const isOpening = index === 0;
        const isClosing = index === formattedLines.length - 1;
        return isOpening ? "/**" : isClosing ? " */" : ` * ${line.trim()}`;
      }),
    [formattedLines],
  );

  // visibleChars always matches lineContents length on each render
  const [visibleChars, setVisibleChars] = useState<number[]>(() =>
    lineContents.map(() => 0),
  );
  const [started, setStarted] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Sync visibleChars length with lineContents when text changes
  // Uses functional update — avoids setState warning (no direct call in effect body)
  useEffect(() => {
    const t = setTimeout(() => {
      setVisibleChars((prev) => {
        // same length + all zeros → no change, avoid re-render
        if (prev.length === lineContents.length && prev.every((v) => v === 0)) {
          return prev;
        }
        return lineContents.map(() => 0);
      });
      setStarted(false);
    }, 0);
    return () => clearTimeout(t);
  }, [lineContents]);

  // Start typing after delay
  useEffect(() => {
    if (started) return;
    const t = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(t);
  }, [started, startDelay]);

  // Typing loop — safe against index mismatch
  useEffect(() => {
    if (!started) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    const currentLineIndex = visibleChars.findIndex((count, i) => {
      const line = lineContents[i];
      // Guard: line might not exist if arrays are momentarily out of sync
      if (!line) return false;
      return count < line.length;
    });

    if (currentLineIndex === -1) return;

    const currentLine = lineContents[currentLineIndex];
    if (!currentLine) return;

    const nextCount = (visibleChars[currentLineIndex] ?? 0) + 1;

    timeoutRef.current = setTimeout(
      () => {
        setVisibleChars((prev) => {
          // Guard against index change mid-flight
          if (currentLineIndex >= prev.length) return prev;
          const next = [...prev];
          next[currentLineIndex] = nextCount;
          return next;
        });
      },
      nextCount >= currentLine.length ? lineDelay : typingSpeed,
    );

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [started, visibleChars, lineContents, typingSpeed, lineDelay]);

  return (
    <div className="font-mono leading-6 md:p-10 p-3 text-[#607b96]">
      <div className="grid gap-y-1 text-sm md:text-base">
        {lineContents.map((fullContent, index) => {
          const visibleCount = visibleChars[index] ?? 0;
          const visibleText = fullContent.slice(0, visibleCount);
          const isCurrentlyTyping =
            visibleCount > 0 && visibleCount < fullContent.length;

          return (
            <div
              key={`${fullContent}-${index}`}
              className="grid grid-cols-[2rem_minmax(0,1fr)] gap-x-2 items-start md:grid-cols-[2.5rem_minmax(0,1fr)] md:gap-x-3"
            >
              <span className="select-none text-right text-gray-500 tabular-nums">
                {index + 1}
              </span>
              <span className="min-w-0 whitespace-pre-wrap [overflow-wrap:anywhere]">
                {visibleText}
                {isCurrentlyTyping && (
                  <motion.span
                    aria-hidden
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="ml-px inline-block"
                  >
                    ▍
                  </motion.span>
                )}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CommentText;
