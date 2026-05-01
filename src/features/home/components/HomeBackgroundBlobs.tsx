"use client";

import { motion, useReducedMotion } from "framer-motion";

const HomeBackgroundBlobs = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden
    >
      <motion.div
        className="absolute left-[22%] top-[22%] h-[clamp(14rem,58vw,20rem)] w-[clamp(14rem,58vw,20rem)] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[64px] will-change-transform md:left-[30%] md:top-[28%] md:h-[clamp(11rem,26vw,24rem)] md:w-[clamp(11rem,26vw,24rem)] md:blur-[72px]"
        style={{
          background:
            "radial-gradient(circle at 35% 35%, rgba(67,217,173,0.88) 0%, rgba(67,217,173,0.34) 42%, rgba(67,217,173,0) 78%)",
          boxShadow:
            "0 0 90px rgba(67,217,173,0.4), 0 0 180px rgba(67,217,173,0.22)",
        }}
        animate={
          shouldReduceMotion
            ? { opacity: 0.45 }
            : {
                left: ["30%", "64%", "52%", "72%", "40%", "58%", "30%"],
                top: ["28%", "38%", "66%", "52%", "74%", "42%", "28%"],
                scale: [1, 1.34, 0.92, 1.28, 0.86, 1.16, 1],
                opacity: [0.35, 0.54, 0.4, 0.58, 0.37, 0.52, 0.35],
              }
        }
        transition={{
          duration: 28,
          ease: [0.45, 0.05, 0.55, 0.95],
          repeat: Infinity,
          repeatType: "loop",
        }}
      />

      <motion.div
        className="absolute left-[74%] top-[66%] h-[clamp(15rem,62vw,24rem)] w-[clamp(15rem,62vw,24rem)] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[74px] will-change-transform md:left-[70%] md:top-[34%] md:h-[clamp(12rem,30vw,26rem)] md:w-[clamp(12rem,30vw,26rem)] md:blur-[82px]"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(77,91,206,0.88) 0%, rgba(77,91,206,0.35) 42%, rgba(77,91,206,0) 78%)",
          boxShadow:
            "0 0 110px rgba(77,91,206,0.45), 0 0 190px rgba(77,91,206,0.24)",
        }}
        animate={
          shouldReduceMotion
            ? { opacity: 0.42 }
            : {
                left: ["70%", "42%", "62%", "36%", "58%", "28%", "70%"],
                top: ["34%", "62%", "46%", "24%", "70%", "44%", "34%"],
                scale: [1, 0.84, 1.32, 0.9, 1.22, 0.94, 1],
                opacity: [0.33, 0.53, 0.4, 0.57, 0.36, 0.5, 0.33],
              }
        }
        transition={{
          duration: 31,
          ease: [0.45, 0.05, 0.55, 0.95],
          repeat: Infinity,
          repeatType: "loop",
        }}
      />

      <motion.div
        className="absolute left-[52%] top-[78%] h-[clamp(10rem,48vw,16rem)] w-[clamp(10rem,48vw,16rem)] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[56px] will-change-transform md:hidden"
        style={{
          background:
            "radial-gradient(circle at 35% 35%, rgba(67,217,173,0.28) 0%, rgba(77,91,206,0.22) 48%, rgba(77,91,206,0) 82%)",
          boxShadow:
            "0 0 70px rgba(67,217,173,0.24), 0 0 120px rgba(77,91,206,0.18)",
        }}
        animate={
          shouldReduceMotion
            ? { opacity: 0.3 }
            : {
                left: ["52%", "38%", "62%", "50%", "52%"],
                top: ["78%", "66%", "82%", "74%", "78%"],
                scale: [1, 1.12, 0.92, 1.05, 1],
                opacity: [0.2, 0.34, 0.24, 0.3, 0.2],
              }
        }
        transition={{
          duration: 22,
          ease: [0.45, 0.05, 0.55, 0.95],
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
    </div>
  );
};

export default HomeBackgroundBlobs;
