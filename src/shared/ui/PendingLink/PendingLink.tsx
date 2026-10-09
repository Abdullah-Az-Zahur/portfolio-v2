"use client";

import Link from "next/link";
import { useLinkStatus } from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type PendingLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  target?: string;
  "aria-label"?: string;
};

function LinkPendingIndicator() {
  const { pending } = useLinkStatus();
  if (!pending) return null;
  return (
    <span className="ml-2 inline-block h-3 w-3 animate-spin rounded-full border-2 border-current border-t-transparent" />
  );
}

export default function PendingLink({
  href,
  children,
  className,
  onClick,
  target,
  "aria-label": ariaLabel,
}: PendingLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${className} ${isActive ? "opacity-60 pointer-events-none" : ""}`}
      onClick={onClick}
      target={target}
      aria-label={ariaLabel}
    >
      {children}
      <LinkPendingIndicator />
    </Link>
  );
}
