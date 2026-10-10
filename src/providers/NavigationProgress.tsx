"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function NavigationProgress() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  const stateRef = useRef({
    isNavigating: false,
    interval: null as NodeJS.Timeout | null,
    hideTimer: null as NodeJS.Timeout | null,
    startTimer: null as NodeJS.Timeout | null,
  });

  // ---------- Start progress on link click ----------
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a") as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      if (
        href.startsWith("http") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("#") ||
        anchor.getAttribute("target") === "_blank" ||
        anchor.hasAttribute("download")
      ) {
        return;
      }

      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if (href === pathname) return;

      // Clear previous timers
      if (stateRef.current.interval) {
        clearInterval(stateRef.current.interval);
        stateRef.current.interval = null;
      }
      if (stateRef.current.hideTimer) {
        clearTimeout(stateRef.current.hideTimer);
        stateRef.current.hideTimer = null;
      }
      if (stateRef.current.startTimer) {
        clearTimeout(stateRef.current.startTimer);
        stateRef.current.startTimer = null;
      }

      stateRef.current.isNavigating = true;

      // ✅ async setState — no warning
      stateRef.current.startTimer = setTimeout(() => {
        setVisible(true);
        setProgress(8);

        stateRef.current.interval = setInterval(() => {
          setProgress((prev) => {
            if (prev >= 85) return prev;
            const increment = Math.max(0.6, (85 - prev) / 18);
            return prev + increment;
          });
        }, 120);
      }, 0);
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [pathname]);

  // ---------- Complete progress when pathname changes ----------
  useEffect(() => {
    if (!stateRef.current.isNavigating) return;

    if (stateRef.current.interval) {
      clearInterval(stateRef.current.interval);
      stateRef.current.interval = null;
    }

    stateRef.current.isNavigating = false;

    // ✅ async setState — no warning
    const completeTimer = setTimeout(() => {
      setProgress(100);

      stateRef.current.hideTimer = setTimeout(() => {
        setVisible(false);
        setProgress(0);
      }, 260);
    }, 0);

    return () => clearTimeout(completeTimer);
  }, [pathname]);

  // ---------- Cleanup ----------
  useEffect(() => {
    const state = stateRef.current;
    return () => {
      if (state.interval) clearInterval(state.interval);
      if (state.hideTimer) clearTimeout(state.hideTimer);
      if (state.startTimer) clearTimeout(state.startTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[9999] h-[3px]"
      style={{
        opacity: visible ? 1 : 0,
        transition: "opacity 200ms ease",
      }}
    >
      <div
        className="h-full"
        style={{
          width: `${progress}%`,
          background:
            "linear-gradient(90deg, #67e8f9 0%, #a5f3fc 50%, #c4b5fd 100%)",
          boxShadow: "0 0 10px rgba(103, 232, 249, 0.7)",
          transition: "width 150ms ease-out",
        }}
      />
    </div>
  );
}
