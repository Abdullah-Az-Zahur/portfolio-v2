"use client";

import { useEffect, useState } from "react";

type BrandNameProps = {
  text?: string;
  className?: string;
};

const DEFAULT_TEXT = "md. abdullah az-zahur";

const BrandName: React.FC<BrandNameProps> = ({
  text = DEFAULT_TEXT,
  className = "",
}) => {
  const [phase2Active, setPhase2Active] = useState(false);
  const [activeLetters, setActiveLetters] = useState<Set<number>>(new Set());

  // ✅ Phase 1 — Random wide stagger (0 → 1.8s)
  const [initialDelays] = useState<number[]>(() =>
    Array.from({ length: text.length }, (_, i) => {
      if (text[i] === " ") return 0;
      // Deterministic pseudo-random
      const seed = (i * 9301 + 49297) % 233280;
      const rnd = seed / 233280;
      return rnd * 1.8; // ← 0 → 1.8s spread
    }),
  );

  // Phase 2 starts after phase 1 completes fully
  useEffect(() => {
    const t = setTimeout(() => setPhase2Active(true), 2600);
    return () => clearTimeout(t);
  }, []);

  // Phase 2 — Continuous random letter flicker
  useEffect(() => {
    if (!phase2Active) return;

    const nonSpaceIndexes = text
      .split("")
      .map((char, i) => (char === " " ? -1 : i))
      .filter((i) => i !== -1);

    let timer: NodeJS.Timeout;
    let clearTimer: NodeJS.Timeout;

    const scheduleNextFlicker = () => {
      const delay = 2000 + Math.random() * 3000;

      timer = setTimeout(() => {
        const count = 1 + Math.floor(Math.random() * 2);
        const picked = new Set<number>();
        for (let k = 0; k < count; k++) {
          const idx =
            nonSpaceIndexes[Math.floor(Math.random() * nonSpaceIndexes.length)];
          picked.add(idx);
        }
        setActiveLetters(picked);
        clearTimer = setTimeout(() => setActiveLetters(new Set()), 300);
        scheduleNextFlicker();
      }, delay);
    };

    scheduleNextFlicker();

    return () => {
      clearTimeout(timer);
      clearTimeout(clearTimer);
    };
  }, [phase2Active, text]);

  return (
    <span className={`brand-btn-name ${className}`.trim()} aria-label={text}>
      {text.split("").map((char, i) => {
        if (char === " ") {
          return (
            <span key={i} aria-hidden>
              &nbsp;
            </span>
          );
        }

        const isActive = activeLetters.has(i);

        return (
          <span
            key={i}
            className={`brand-btn-letter${
              isActive ? " brand-btn-letter-active" : ""
            }`}
            style={{ animationDelay: `${initialDelays[i]}s` }}
            aria-hidden
          >
            {char}
          </span>
        );
      })}
    </span>
  );
};

export default BrandName;
