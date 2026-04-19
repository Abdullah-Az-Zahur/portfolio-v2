"use client";
import React, { useMemo } from "react";

interface CommentTextProps {
  text: string;
}

const CommentText: React.FC<CommentTextProps> = ({ text }) => {
  const lines = useMemo(
    () => text.split("\n").filter((line) => line.trim() !== ""),
    [text],
  );

  const formattedLines = useMemo(() => ["/**", ...lines, "*/"], [lines]);
  const renderedLines = useMemo(
    () => Array.from({ length: formattedLines.length }, (_, i) => i + 1),
    [formattedLines.length],
  );

  return (
    <div className="flex font-mono whitespace-pre-wrap leading-6 md:p-10 p-3">
      {/* Line numbers column */}
      <div className="text-right mr-2 text-gray-500 select-none">
        {renderedLines.map((lineNumber) => (
          <div key={lineNumber}>{lineNumber}</div>
        ))}
      </div>

      {/* Text content column */}
      <div>
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
