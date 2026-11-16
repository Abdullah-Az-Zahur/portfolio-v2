"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

interface CommentTextProps {
  text: string;
  typingSpeed?: number;
  lineDelay?: number;
  startDelay?: number;
}

interface CommentTextTyperProps {
  text: string;
  lineContents: string[];
  typingSpeed: number;
  lineDelay: number;
  startDelay: number;
}
const CommentTextTyper: React.FC<CommentTextTyperProps> = ({
  text,
  lineContents,
  typingSpeed,
  lineDelay,
  startDelay,
}) => {
  const [visibleChars, setVisibleChars] = useState<number[]>(() =>
    lineContents.map(() => 0),
  );
  const [started, setStarted] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (started || lineContents.length <= 2) return;
    const t = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(t);
  }, [started, startDelay, lineContents.length]);

  useEffect(() => {
    if (!started) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    const currentLineIndex = visibleChars.findIndex((count, i) => {
      const line = lineContents[i];
      if (!line) return false;
      return count < line.length;
    });

    if (currentLineIndex === -1) return;

    const currentLine = lineContents[currentLineIndex];
    if (!currentLine) return;

    const step = currentLine.length > 60 ? 2 : 1;
    const nextCount = Math.min(
      (visibleChars[currentLineIndex] ?? 0) + step,
      currentLine.length,
    );

    timeoutRef.current = setTimeout(
      () => {
        setVisibleChars((prev) => {
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
    <>
      <p className="sr-only">{text}</p>
      <div className="grid gap-y-1 text-sm md:text-base">
        {lineContents.map((fullContent, index) => {
          const visibleCount = visibleChars[index] ?? 0;
          const visibleText = fullContent.slice(0, visibleCount);
          const isLineStarted = visibleCount > 0;
          const isCurrentlyTyping =
            isLineStarted && visibleCount < fullContent.length;

          return (
            <div
              key={`${index}-${fullContent}`}
              className="grid grid-cols-[2rem_minmax(0,1fr)] items-start gap-x-2 md:grid-cols-[2.5rem_minmax(0,1fr)] md:gap-x-3"
            >
              <span
                className={`select-none text-right tabular-nums text-[#607089] transition-opacity duration-100 data-[theme=light]:text-[#52657d] ${
                  isLineStarted ? "opacity-100" : "opacity-0"
                }`}
              >
                {index + 1}
              </span>
              <span className="min-w-0 whitespace-pre">
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
                    className="ml-px inline-block text-[#43d9ad] data-[theme=light]:text-[#087f67]"
                  >
                    ▍
                  </motion.span>
                )}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

const CommentText: React.FC<CommentTextProps> = ({
  text,
  typingSpeed = 5,
  lineDelay = 30,
  startDelay = 100,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [maxCharsPerLine, setMaxCharsPerLine] = useState<number>(60);

  useEffect(() => {
    const updateMaxChars = () => {
      const container = containerRef.current;
      if (!container) return;

      const style = window.getComputedStyle(container);
      const isDesktop = window.innerWidth >= 768;
      const lineNumWidth = isDesktop ? 52 : 40;
      const availableWidth = container.clientWidth - lineNumWidth;

      if (availableWidth <= 0) return;

      const measureSpan = document.createElement("span");
      measureSpan.style.fontFamily = style.fontFamily;
      measureSpan.style.fontSize = style.fontSize;
      measureSpan.style.visibility = "hidden";
      measureSpan.style.position = "absolute";
      measureSpan.style.whiteSpace = "pre";
      measureSpan.textContent = "M".repeat(10);
      document.body.appendChild(measureSpan);

      const charWidth = measureSpan.getBoundingClientRect().width / 10;
      document.body.removeChild(measureSpan);

      const calculated = Math.max(
        15,
        Math.floor(availableWidth / charWidth) - 4,
      );

      setMaxCharsPerLine((prev) => (prev !== calculated ? calculated : prev));
    };

    updateMaxChars();

    const resizeObserver = new ResizeObserver(() => {
      updateMaxChars();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  const wrappedLines = useMemo(() => {
    const rawParagraphs = text.split("\n").filter((line) => line.trim() !== "");

    const finalLines: string[] = [];

    rawParagraphs.forEach((paragraph) => {
      const words = paragraph.trim().split(/\s+/);
      let currentLine = "";

      words.forEach((word) => {
        if (word.length > maxCharsPerLine) {
          if (currentLine) {
            finalLines.push(currentLine);
            currentLine = "";
          }
          for (let i = 0; i < word.length; i += maxCharsPerLine) {
            finalLines.push(word.slice(i, i + maxCharsPerLine));
          }
          return;
        }

        const testLine = currentLine ? `${currentLine} ${word}` : word;
        if (testLine.length <= maxCharsPerLine) {
          currentLine = testLine;
        } else {
          if (currentLine) finalLines.push(currentLine);
          currentLine = word;
        }
      });

      if (currentLine) {
        finalLines.push(currentLine);
      }
    });

    return finalLines;
  }, [text, maxCharsPerLine]);

  const formattedLines = useMemo(
    () => ["/**", ...wrappedLines, "*/"],
    [wrappedLines],
  );

  const lineContents = useMemo(
    () =>
      formattedLines.map((line, index) => {
        const isOpening = index === 0;
        const isClosing = index === formattedLines.length - 1;
        return isOpening ? "/**" : isClosing ? " */" : ` * ${line}`;
      }),
    [formattedLines],
  );

  return (
    <div
      ref={containerRef}
      className="font-mono leading-6 p-3 md:p-10 text-[#607b96] data-[theme=light]:text-[#314158]"
    >
      <CommentTextTyper
        key={lineContents.join("\n")}
        text={text}
        lineContents={lineContents}
        typingSpeed={typingSpeed}
        lineDelay={lineDelay}
        startDelay={startDelay}
      />
    </div>
  );
};

export default CommentText;
