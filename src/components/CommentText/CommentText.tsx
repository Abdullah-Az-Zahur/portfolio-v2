"use client";
import React, { useState, useRef, useEffect, useMemo } from "react";

interface CommentTextProps {
  text: string;
}

const CommentText: React.FC<CommentTextProps> = ({ text }) => {
  // Split the text into lines
  const lines = useMemo(
    () => text.split("\n").filter((line) => line.trim() !== ""),
    [text]
  );

  // Memoize the formattedLines array
  const formattedLines = useMemo(() => ["/**", ...lines, "*/"], [lines]);

  // State to store the number of rendered lines
  const [renderedLines, setRenderedLines] = useState<number[]>([]);
  const textRef = useRef<HTMLDivElement>(null);

  // State to track if the component has mounted
  const [hasMounted, setHasMounted] = useState(false);

  // Effect to set hasMounted to true after component mounts
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Effect to calculate the number of rendered lines
  useEffect(() => {
    if (hasMounted && textRef.current) {
      const lineHeight = parseInt(
        window.getComputedStyle(textRef.current).lineHeight,
        10
      );
      const containerHeight = textRef.current.clientHeight;
      const totalLines = Math.floor(containerHeight / lineHeight);

      // Generate line numbers based on the total lines
      const lineNumbers = Array.from({ length: totalLines }, (_, i) => i + 1);

      // Only update state if the line numbers have changed
      if (lineNumbers.length !== renderedLines.length) {
        setRenderedLines(lineNumbers);
      }
    }
  }, [formattedLines, renderedLines.length, hasMounted]); // Only run when `formattedLines`, `renderedLines.length`, or `hasMounted` changes

  return (
    <div className="flex font-mono whitespace-pre-wrap leading-6 md:p-10 p-3">
      {/* Line numbers column */}
      <div className="text-right mr-2 text-gray-500 select-none">
        {renderedLines.map((lineNumber) => (
          <div key={lineNumber}>{lineNumber}</div>
        ))}
      </div>

      {/* Text content column */}
      <div ref={textRef}>
        {formattedLines.map((line, index) => (
          <div key={index}>
            {index === 0
              ? "/**"
              : index === formattedLines.length - 1
              ? " */"
              : ` * ${line.trim()}`}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentText;