import React from "react";

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-[#0b1728] p-4 ${className || ""}`}
    >
      {children}
    </div>
  );
}
