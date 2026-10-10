"use client";

import Link from "next/link";
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
      className={`brand-btn group relative flex min-w-0 items-center overflow-hidden rounded-full ${className}`}
      aria-label="Go to home page"
    >
      <BrandName text={text} />
      <span className="brand-btn-shimmer" aria-hidden />
    </Link>
  );
};

export default BrandButton;
