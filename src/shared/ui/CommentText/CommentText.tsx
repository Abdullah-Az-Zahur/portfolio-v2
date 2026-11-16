"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

// ============================================================================
// 1. Types & Constants
// ============================================================================

export interface CommentTextProps {
  text: string;
  typingSpeed?: number;
  lineDelay?: number;
  startDelay?: number;
  className?: string;
}

const DEFAULT_CONFIG = {
  typingSpeed: 5,
  lineDelay: 30,
  startDelay: 100,
  fallbackCharsPerLine: 60,
  minCharsPerLine: 15,
  commentPrefixReserve: 4, // " * " + buffer
} as const;

// ============================================================================
// 2. Pure Helper Functions (No React dependencies - Easy to test)
// ============================================================================

function buildCommentLines(text: string, maxChars: number): string[] {
  const paragraphs = text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const wrapped: string[] = [];

  for (const paragraph of paragraphs) {
    const words = paragraph.split(/\s+/);
    let currentLine = "";

    for (const word of words) {
      if (word.length > maxChars) {
        if (currentLine) {
          wrapped.push(currentLine);
          currentLine = "";
        }
        for (let i = 0; i < word.length; i += maxChars) {
          wrapped.push(word.slice(i, i + maxChars));
        }
        continue;
      }

      const candidate = currentLine ? `${currentLine} ${word}` : word;
      if (candidate.length <= maxChars) {
        currentLine = candidate;
      } else {
        if (currentLine) wrapped.push(currentLine);
        currentLine = word;
      }
    }

    if (currentLine) wrapped.push(currentLine);
  }

  return ["/**", ...wrapped.map((line) => ` * ${line}`), " */"];
}

// ============================================================================
// 3. Custom Hooks (Encapsulated Logic)
// ============================================================================

function useResponsiveLineCapacity(
  containerRef: React.RefObject<HTMLDivElement | null>,
): number {
  const [maxChars, setMaxChars] = useState<number>(
    DEFAULT_CONFIG.fallbackCharsPerLine,
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const calculateCapacity = () => {
      const style = window.getComputedStyle(container);
      const lineNumWidth = window.innerWidth >= 768 ? 52 : 40;
      const availableWidth = container.clientWidth - lineNumWidth;

      if (availableWidth <= 0) return;

      const probe = document.createElement("span");
      probe.style.cssText = `
        font-family: ${style.fontFamily};
        font-size: ${style.fontSize};
        visibility: hidden;
        position: absolute;
        white-space: pre;
      `;
      probe.textContent = "M".repeat(10);
      document.body.appendChild(probe);

      const charWidth = probe.getBoundingClientRect().width / 10;
      document.body.removeChild(probe);

      if (charWidth <= 0) return;

      const capacity = Math.max(
        DEFAULT_CONFIG.minCharsPerLine,
        Math.floor(availableWidth / charWidth) -
          DEFAULT_CONFIG.commentPrefixReserve,
      );

      setMaxChars((prev) => (prev !== capacity ? capacity : prev));
    };

    calculateCapacity();

    const observer = new ResizeObserver(calculateCapacity);
    observer.observe(container);

    return () => observer.disconnect();
  }, [containerRef]);

  return maxChars;
}

function useTypewriterProgress(
  lines: string[],
  {
    typingSpeed,
    lineDelay,
    startDelay,
  }: Required<
    Pick<CommentTextProps, "typingSpeed" | "lineDelay" | "startDelay">
  >,
): number[] {
  const [visibleChars, setVisibleChars] = useState<number[]>(() =>
    lines.map(() => 0),
  );
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (started || lines.length <= 2) return;
    const timer = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(timer);
  }, [started, startDelay, lines.length]);

  useEffect(() => {
    if (!started) return;

    const activeIdx = visibleChars.findIndex(
      (count, idx) => count < (lines[idx]?.length ?? 0),
    );
    if (activeIdx === -1) return;

    const targetLength = lines[activeIdx].length;
    const step = targetLength > 60 ? 2 : 1;
    const nextCount = Math.min(
      (visibleChars[activeIdx] ?? 0) + step,
      targetLength,
    );
    const delay = nextCount >= targetLength ? lineDelay : typingSpeed;

    const timer = setTimeout(() => {
      setVisibleChars((prev) => {
        const next = [...prev];
        next[activeIdx] = nextCount;
        return next;
      });
    }, delay);

    return () => clearTimeout(timer);
  }, [started, visibleChars, lines, typingSpeed, lineDelay]);

  return visibleChars;
}

// ============================================================================
// 4. Sub-Components (Clean Presentation Layer)
// ============================================================================

const Cursor: React.FC = () => (
  <motion.span
    aria-hidden
    animate={{ opacity: [1, 0, 1] }}
    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
    className="ml-px inline-block text-[#43d9ad] data-[theme=light]:text-[#087f67]"
  >
    ▍
  </motion.span>
);

interface CommentLineRowProps {
  lineNumber: number;
  fullText: string;
  visibleCount: number;
}

const CommentLineRow: React.FC<CommentLineRowProps> = ({
  lineNumber,
  fullText,
  visibleCount,
}) => {
  const isStarted = visibleCount > 0;
  const isTyping = isStarted && visibleCount < fullText.length;

  return (
    <div className="grid grid-cols-[2rem_minmax(0,1fr)] items-start gap-x-2 md:grid-cols-[2.5rem_minmax(0,1fr)] md:gap-x-3">
      <span
        className={`select-none text-right tabular-nums text-[#607089] transition-opacity duration-100 data-[theme=light]:text-[#52657d] ${
          isStarted ? "opacity-100" : "opacity-0"
        }`}
      >
        {lineNumber}
      </span>
      <span className="min-w-0 whitespace-pre">
        {fullText.slice(0, visibleCount)}
        {isTyping && <Cursor />}
      </span>
    </div>
  );
};

interface CommentEditorViewProps {
  rawText: string;
  lines: string[];
  typingSpeed: number;
  lineDelay: number;
  startDelay: number;
}

const CommentEditorView: React.FC<CommentEditorViewProps> = ({
  rawText,
  lines,
  typingSpeed,
  lineDelay,
  startDelay,
}) => {
  const visibleChars = useTypewriterProgress(lines, {
    typingSpeed,
    lineDelay,
    startDelay,
  });

  return (
    <>
      <p className="sr-only">{rawText}</p>
      <div className="grid gap-y-1 text-sm md:text-base">
        {lines.map((line, idx) => (
          <CommentLineRow
            key={`${idx}-${line}`}
            lineNumber={idx + 1}
            fullText={line}
            visibleCount={visibleChars[idx] ?? 0}
          />
        ))}
      </div>
    </>
  );
};

// ============================================================================
// 5. Main Exported Component
// ============================================================================

const CommentText: React.FC<CommentTextProps> = ({
  text,
  typingSpeed = DEFAULT_CONFIG.typingSpeed,
  lineDelay = DEFAULT_CONFIG.lineDelay,
  startDelay = DEFAULT_CONFIG.startDelay,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const maxChars = useResponsiveLineCapacity(containerRef);

  const lines = useMemo(
    () => buildCommentLines(text, maxChars),
    [text, maxChars],
  );

  return (
    <div
      ref={containerRef}
      className={`font-mono leading-6 p-3 md:p-10 text-[#607b96] data-[theme=light]:text-[#314158] ${className}`}
    >
      <CommentEditorView
        key={lines.join("\n")}
        rawText={text}
        lines={lines}
        typingSpeed={typingSpeed}
        lineDelay={lineDelay}
        startDelay={startDelay}
      />
    </div>
  );
};

export default CommentText;
