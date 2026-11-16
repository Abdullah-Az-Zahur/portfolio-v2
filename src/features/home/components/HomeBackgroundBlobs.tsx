"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

interface RoamingTarget {
  x: string;
  y: string;
  scale: number;
  duration: number;
}

const getRandomTarget = (
  minDuration: number,
  maxDuration: number,
): RoamingTarget => ({
  x: `${Math.floor(Math.random() * 75) + 10}vw`,
  y: `${Math.floor(Math.random() * 75) + 10}vh`,
  scale: Number((0.95 + Math.random() * 0.15).toFixed(2)),
  duration: Number(
    (minDuration + Math.random() * (maxDuration - minDuration)).toFixed(1),
  ),
});

interface BlobPair {
  green: RoamingTarget;
  blue: RoamingTarget;
}

const HomeBackgroundBlobs = () => {
  const shouldReduceMotion = useReducedMotion();
  const [blobs, setBlobs] = useState<BlobPair | null>(null);

  const triggerNextGreen = useCallback(() => {
    setBlobs((prev) =>
      prev ? { ...prev, green: getRandomTarget(7, 11) } : prev,
    );
  }, []);

  const triggerNextBlue = useCallback(() => {
    setBlobs((prev) =>
      prev ? { ...prev, blue: getRandomTarget(8, 13) } : prev,
    );
  }, []);

  useEffect(() => {
    const initTimer = setTimeout(() => {
      setBlobs({
        green: getRandomTarget(7, 11),
        blue: getRandomTarget(8, 13),
      });
    }, 0);

    if (shouldReduceMotion) {
      return () => clearTimeout(initTimer);
    }

    const greenTimer = setTimeout(triggerNextGreen, 200);
    const blueTimer = setTimeout(triggerNextBlue, 1400);

    return () => {
      clearTimeout(initTimer);
      clearTimeout(greenTimer);
      clearTimeout(blueTimer);
    };
  }, [shouldReduceMotion, triggerNextGreen, triggerNextBlue]);

  if (!blobs) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Green Bulb (#43D9AD) */}
      <motion.div
        className="absolute left-0 top-0 aspect-square w-[80vw] min-w-104 max-w-[90vh] rounded-full bg-[#43D9AD] blur-[110px] will-change-transform light:opacity-75"
        style={{ translateX: "-50%", translateY: "-50%" }}
        initial={{
          x: blobs.green.x,
          y: blobs.green.y,
          scale: blobs.green.scale,
          opacity: 0.26,
        }}
        animate={
          shouldReduceMotion
            ? { opacity: 0.26 }
            : {
                x: blobs.green.x,
                y: blobs.green.y,
                scale: blobs.green.scale,
                opacity: [0.22, 0.3, 0.24, 0.29, 0.22],
              }
        }
        transition={{
          x: { duration: blobs.green.duration, ease: "linear" },
          y: { duration: blobs.green.duration, ease: "linear" },
          scale: { duration: blobs.green.duration, ease: "easeInOut" },
          opacity: {
            duration: 20,
            ease: "easeInOut",
            repeat: Infinity,
          },
        }}
        onAnimationComplete={(definition) => {
          if (
            !shouldReduceMotion &&
            typeof definition === "object" &&
            definition !== null &&
            "x" in definition
          ) {
            triggerNextGreen();
          }
        }}
      />

      {/* Blue Bulb (#4D5BCE) */}
      <motion.div
        className="absolute left-0 top-0 aspect-square w-[80vw] min-w-md max-w-[90vh] rounded-full bg-[#4D5BCE] blur-[120px] will-change-transform light:opacity-75"
        style={{ translateX: "-50%", translateY: "-50%" }}
        initial={{
          x: blobs.blue.x,
          y: blobs.blue.y,
          scale: blobs.blue.scale,
          opacity: 0.3,
        }}
        animate={
          shouldReduceMotion
            ? { opacity: 0.3 }
            : {
                x: blobs.blue.x,
                y: blobs.blue.y,
                scale: blobs.blue.scale,
                opacity: [0.32, 0.25, 0.34, 0.27, 0.32],
              }
        }
        transition={{
          x: { duration: blobs.blue.duration, ease: "linear" },
          y: { duration: blobs.blue.duration, ease: "linear" },
          scale: { duration: blobs.blue.duration, ease: "easeInOut" },
          opacity: {
            duration: 24,
            ease: "easeInOut",
            repeat: Infinity,
          },
        }}
        onAnimationComplete={(definition) => {
          if (
            !shouldReduceMotion &&
            typeof definition === "object" &&
            definition !== null &&
            "x" in definition
          ) {
            triggerNextBlue();
          }
        }}
      />
    </div>
  );
};

export default HomeBackgroundBlobs;
