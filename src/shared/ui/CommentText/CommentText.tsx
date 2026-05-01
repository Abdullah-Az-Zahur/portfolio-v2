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
    <div className="font-mono leading-6 md:p-10 p-3 text-[#607b96]">
      <div className="grid gap-y-1 text-sm md:text-base">
        {formattedLines.map((line, index) => {
          const isOpening = index === 0;
          const isClosing = index === formattedLines.length - 1;
          const content = isOpening
            ? "/**"
            : isClosing
              ? " */"
              : ` * ${line.trim()}`;

          return (
            <div
              key={`${line}-${index}`}
              className="grid grid-cols-[2rem_minmax(0,1fr)] gap-x-2 items-start md:grid-cols-[2.5rem_minmax(0,1fr)] md:gap-x-3"
            >
              <span className="select-none text-right text-gray-500 tabular-nums">
                {renderedLines[index]}
              </span>
              <span className="min-w-0 whitespace-pre-wrap break-words [overflow-wrap:anywhere]">
                {content}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CommentText;
