import React, { useState, useRef, useEffect, useMemo } from "react";

interface CommentTextProps {
  text: string;
}

const CommentText: React.FC<CommentTextProps> = ({ text }) => {
  // Split the text into lines
  const lines = text.split("\n").filter((line) => line.trim() !== "");

  // Memoize the formattedLines array
  const formattedLines = useMemo(() => ["/**", ...lines, "*/"], [lines]); // Only recalculate if `lines` changes

  // State to store the number of rendered lines
  const [renderedLines, setRenderedLines] = useState<number[]>([]); // Explicitly type as number[]
  const textRef = useRef<HTMLDivElement>(null); // Explicitly type as HTMLDivElement

  // Effect to calculate the number of rendered lines
  useEffect(() => {
    if (textRef.current) {
      const lineHeight = parseInt(
        window.getComputedStyle(textRef.current).lineHeight,
        10
      );
      const containerHeight = textRef.current.clientHeight;
      const totalLines = Math.floor(containerHeight / lineHeight);

      // Generate line numbers based on the total lines
      const lineNumbers = Array.from({ length: totalLines }, (_, i) => i + 1);
      setRenderedLines(lineNumbers);
    }
  }, [formattedLines]); // Only run when `formattedLines` changes

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