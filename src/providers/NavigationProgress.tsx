"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function NavigationProgress() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [progress, setProgress] = useState(0);
  const [isNavigating, setIsNavigating] = useState(false);
  const previousPathRef = useRef(pathname);

  useEffect(() => {
    // Skip on first mount — only show progress when route actually changes
    if (previousPathRef.current === pathname) return;

    previousPathRef.current = pathname;

    // Use requestAnimationFrame to avoid sync setState warning
    let raf1 = 0;
    let raf2 = 0;
    let timeout: ReturnType<typeof setTimeout>;

    const start = () => {
      raf1 = requestAnimationFrame(() => {
        setIsNavigating(true);
        setProgress(20);

        raf2 = requestAnimationFrame(() => {
          setProgress(60);
        });

        timeout = setTimeout(() => {
          setProgress(100);
          setTimeout(() => {
            setIsNavigating(false);
            setProgress(0);
          }, 200);
        }, 400);
      });
    };

    start();

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      clearTimeout(timeout);
    };
  }, [pathname, searchParams]);

  if (!isNavigating) return null;

  return (
    <div className="fixed left-0 top-0 z-[9999] h-[2px] w-full bg-transparent">
      <div
        className="h-full bg-cyan-400 transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
