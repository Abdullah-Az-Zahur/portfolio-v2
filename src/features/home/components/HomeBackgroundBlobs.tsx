"use client";

import { motion, useReducedMotion } from "framer-motion";

const HomeBackgroundBlobs = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <motion.div
        className="home-blob home-blob-green absolute left-[25%] top-[30%] h-[clamp(14rem,58vw,20rem)] w-[clamp(14rem,58vw,20rem)] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[64px] will-change-transform md:h-[clamp(11rem,26vw,24rem)] md:w-[clamp(11rem,26vw,24rem)] md:blur-[72px]"
        style={{
          background:
            "radial-gradient(circle at 35% 35%, rgba(67,217,173,0.76) 0%, rgba(67,217,173,0.28) 42%, rgba(67,217,173,0) 78%)",
          boxShadow:
            "0 0 100px rgba(67,217,173,0.3), 0 0 190px rgba(67,217,173,0.14)",
        }}
        animate={
          shouldReduceMotion
            ? { opacity: 0.42 }
            : {
                x: ["0vw", "18vw", "-10vw", "14vw", "0vw"],
                y: ["0vh", "12vh", "-15vh", "16vh", "0vh"],
                scale: [1, 1.12, 0.94, 1.08, 1],
                opacity: [0.34, 0.48, 0.38, 0.46, 0.34],
              }
        }
        transition={{
          duration: 34,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="home-blob home-blob-blue absolute left-[72%] top-[36%] h-[clamp(15rem,62vw,24rem)] w-[clamp(15rem,62vw,24rem)] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[74px] will-change-transform md:h-[clamp(12rem,30vw,26rem)] md:w-[clamp(12rem,30vw,26rem)] md:blur-[82px]"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(77,91,206,0.76) 0%, rgba(77,91,206,0.3) 42%, rgba(77,91,206,0) 78%)",
          boxShadow:
            "0 0 110px rgba(77,91,206,0.32), 0 0 200px rgba(77,91,206,0.15)",
        }}
        animate={
          shouldReduceMotion
            ? { opacity: 0.4 }
            : {
                x: ["0vw", "-18vw", "12vw", "-14vw", "0vw"],
                y: ["0vh", "-15vh", "16vh", "-10vh", "0vh"],
                scale: [1, 0.94, 1.12, 0.96, 1],
                opacity: [0.32, 0.45, 0.36, 0.44, 0.32],
              }
        }
        transition={{
          duration: 38,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="home-blob home-blob-mobile absolute left-[52%] top-[78%] h-[clamp(10rem,48vw,16rem)] w-[clamp(10rem,48vw,16rem)] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[56px] will-change-transform md:hidden"
        style={{
          background:
            "radial-gradient(circle at 35% 35%, rgba(67,217,173,0.24) 0%, rgba(77,91,206,0.18) 48%, rgba(77,91,206,0) 82%)",
        }}
        animate={
          shouldReduceMotion
            ? { opacity: 0.24 }
            : {
                x: ["0vw", "-12vw", "10vw", "0vw"],
                y: ["0vh", "-10vh", "5vh", "0vh"],
                scale: [1, 1.08, 0.94, 1],
                opacity: [0.2, 0.3, 0.22, 0.2],
              }
        }
        transition={{
          duration: 28,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </div>
  );
};

export default HomeBackgroundBlobs;
