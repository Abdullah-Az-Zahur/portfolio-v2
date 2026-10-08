"use client";

import { useSyncExternalStore, useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { FiMonitor, FiMoon, FiSun, FiCheck } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const themes = [
  { value: "system", label: "System", icon: FiMonitor },
  { value: "light", label: "Light", icon: FiSun },
  { value: "dark", label: "Dark", icon: FiMoon },
] as const;

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const mounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false,
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [open]);

  if (!mounted) return <div className="h-8 w-8" aria-hidden />;

  const current = themes.find((item) => item.value === theme) ?? themes[0];
  const CurrentIcon = current.icon;

  return (
    <div ref={menuRef} className="relative">
      {/* Trigger button */}
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label="Choose theme"
        title="Choose theme"
        className="theme-toggle-btn grid h-8 w-8 place-items-center rounded-lg"
      >
        <CurrentIcon className="theme-toggle-icon h-4 w-4" />
      </button>

      {/* Dropdown menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            role="menu"
            initial={{ opacity: 0, y: -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.96 }}
            transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
            className="theme-menu absolute right-0 top-11 z-50 w-32 overflow-hidden rounded-xl border p-1 shadow-xl"
          >
            {themes.map((item) => {
              const Icon = item.icon;
              const isActive = theme === item.value;
              return (
                <button
                  key={item.value}
                  type="button"
                  role="menuitemradio"
                  aria-checked={isActive}
                  onClick={() => {
                    setTheme(item.value);
                    setOpen(false);
                  }}
                  className={`theme-menu-item flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs transition ${
                    isActive ? "theme-menu-item-active" : ""
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span className="flex-1">{item.label}</span>
                  {isActive && <FiCheck className="h-3.5 w-3.5 shrink-0" />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
