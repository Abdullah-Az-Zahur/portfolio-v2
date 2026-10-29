"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
      const seed = (i * 9301 + 49297) % 233280;
      const rnd = seed / 233280;
      return rnd * 1.8;
    }),
  );

  useEffect(() => {
    const t = setTimeout(() => setPhase2Active(true), 2600);
    return () => clearTimeout(t);
  }, []);

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

  // Keyframes for Phase 1 After-Effects Style Flicker
  const mountKeyframes = {
    opacity: [0, 1, 0, 1, 0, 1, 0.15, 1, 0.35, 1, 0.6, 1, 1],
    filter: [
      "brightness(8) blur(1.5px)",
      "brightness(0.1) blur(0px)",
      "brightness(8) blur(1.2px)",
      "brightness(0.15) blur(0px)",
      "brightness(6) blur(1px)",
      "brightness(0.3) blur(0px)",
      "brightness(5) blur(0.8px)",
      "brightness(0.5) blur(0px)",
      "brightness(3) blur(0.5px)",
      "brightness(0.85) blur(0px)",
      "brightness(1.8) blur(0.2px)",
      "brightness(1.2) blur(0px)",
      "brightness(1) blur(0px)",
    ],
    textShadow: [
      "0 0 20px var(--brand-glow, rgba(103,232,249,0.85))",
      "none",
      "0 0 20px var(--brand-glow, rgba(103,232,249,0.85))",
      "none",
      "0 0 18px var(--brand-glow, rgba(103,232,249,0.85))",
      "none",
      "0 0 14px var(--brand-glow, rgba(103,232,249,0.85))",
      "none",
      "0 0 10px var(--brand-glow, rgba(103,232,249,0.85))",
      "none",
      "0 0 6px var(--brand-glow, rgba(103,232,249,0.85))",
      "0 0 3px var(--brand-glow, rgba(103,232,249,0.85))",
      "none",
    ],
  };

  const mountTimes = [
    0, 0.05, 0.1, 0.18, 0.24, 0.34, 0.42, 0.54, 0.62, 0.74, 0.82, 0.92, 1,
  ];

  // Keyframes for Active Flicker (Phase 2)
  const activeKeyframes = {
    opacity: [1, 0.15, 1, 0.3, 1],
    filter: [
      "brightness(1)",
      "brightness(4)",
      "brightness(2.5)",
      "brightness(3.5)",
      "brightness(1)",
    ],
    textShadow: [
      "0 0 0px transparent",
      "0 0 12px var(--brand-glow, rgba(103,232,249,0.85))",
      "0 0 18px var(--brand-glow, rgba(103,232,249,0.85))",
      "0 0 10px var(--brand-glow, rgba(103,232,249,0.85))",
      "0 0 0px transparent",
    ],
  };

  return (
    <span
      aria-label={text}
      className={`inline-flex items-center font-mono text-[0.95rem] font-semibold tracking-[0.06em] bg-[linear-gradient(90deg,#67e8f9_0%,#a5f3fc_20%,#c4b5fd_40%,#a5f3fc_55%,#c4b5fd_70%,#a5f3fc_85%,#67e8f9_100%)] bg-size-[300%_auto] bg-clip-text text-transparent light:bg-[linear-gradient(90deg,#0e7490_0%,#0891b2_20%,#6d28d9_40%,#0891b2_55%,#6d28d9_70%,#0891b2_85%,#0e7490_100%)] motion-reduce:bg-none motion-reduce:text-[#a5f3fc] light:motion-reduce:text-[#0891b2] ${className}`.trim()}
    >
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
          <motion.span
            key={i}
            aria-hidden
            className="relative inline-block will-change-[opacity,filter] motion-reduce:opacity-100! motion-reduce:filter-none! motion-reduce:text-shadow-none!"
            initial={{ opacity: 0 }}
            animate={isActive ? activeKeyframes : mountKeyframes}
            transition={
              isActive
                ? { duration: 0.3, ease: "easeOut" }
                : {
                    duration: 2,
                    ease: "easeOut",
                    delay: initialDelays[i],
                    times: mountTimes,
                  }
            }
          >
            {char}
          </motion.span>
        );
      })}
    </span>
  );
};

export default BrandName;
