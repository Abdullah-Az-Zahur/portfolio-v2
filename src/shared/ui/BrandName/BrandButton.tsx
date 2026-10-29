"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import BrandName from "./BrandName";

type BrandButtonProps = {
  href?: string;
  text?: string;
  className?: string;
};

const BrandButton: React.FC<BrandButtonProps> = ({
  href = "/",
  text = "md. abdullah az-zahur",
  className = "",
}) => {
  return (
    <Link
      href={href}
      aria-label="Go to home page"
      className={`group relative flex min-w-0 items-center overflow-hidden rounded-full border border-[rgba(103,232,249,0.42)] bg-[rgba(6,17,31,0.72)] px-3 py-1.25 shadow-[0_0_0_1px_rgba(103,232,249,0.06),0_0_12px_rgba(103,232,249,0.28),inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-md transition-all duration-260 ease-in-out hover:-translate-y-0.5 hover:border-[rgba(103,232,249,0.42)] hover:shadow-[0_0_0_1px_rgba(103,232,249,0.16),0_0_22px_rgba(103,232,249,0.55),0_0_40px_rgba(103,232,249,0.25),inset_0_1px_0_rgba(255,255,255,0.08)] light:border-[rgba(14,116,144,0.42)] light:bg-[rgba(255,255,255,0.78)] light:shadow-[0_0_0_1px_rgba(14,116,144,0.06),0_0_10px_rgba(14,116,144,0.22),inset_0_1px_0_rgba(255,255,255,0.5)] light:hover:border-[rgba(14,116,144,0.75)] light:hover:shadow-[0_0_0_1px_rgba(14,116,144,0.12),0_0_20px_rgba(14,116,144,0.35),0_0_36px_rgba(14,116,144,0.15),inset_0_1px_0_rgba(255,255,255,0.6)] motion-reduce:transition-[box-shadow,border-color] motion-reduce:duration-200 ${className}`}
    >
      <BrandName text={text} />

      {/* Shimmer Sweep Animation */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 mix-blend-screen light:mix-blend-multiply light:opacity-60 motion-reduce:hidden"
        style={{
          background:
            "linear-gradient(100deg, transparent 30%, var(--brand-shimmer, rgba(165,243,252,0.55)) 50%, transparent 70%)",
        }}
        initial={{ x: "-120%" }}
        animate={{ x: ["-120%", "-120%", "120%", "120%"] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.7, 0.85, 1],
        }}
        whileHover={{
          x: ["-120%", "120%"],
          transition: { duration: 1, ease: "easeInOut" },
        }}
      />
    </Link>
  );
};

export default BrandButton;
