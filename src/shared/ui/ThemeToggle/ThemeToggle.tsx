"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon, FiMonitor, FiCheck } from "react-icons/fi";

type ThemeOption = "system" | "light" | "dark";

const themeOptions: {
  value: ThemeOption;
  label: string;
  icon: typeof FiSun;
}[] = [
  { value: "system", label: "System", icon: FiMonitor },
  { value: "light", label: "Light", icon: FiSun },
  { value: "dark", label: "Dark", icon: FiMoon },
];

const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(id);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen]);

  // Placeholder during SSR / first paint
  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        title="Toggle theme"
        className="theme-toggle-btn grid h-9 w-9 place-items-center"
      >
        <span className="theme-toggle-icon block h-5 w-5" aria-hidden />
      </button>
    );
  }

  const currentTheme: ThemeOption = (theme as ThemeOption) ?? "system";
  const isDark = resolvedTheme === "dark";

  const handleSelect = (value: ThemeOption) => {
    setTheme(value);
    setIsOpen(false);
  };

  return (
    <div ref={menuRef} className="theme-toggle-wrapper relative">
      {/* Trigger button — shows Sun/Moon based on resolved theme */}
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-label="Choose theme"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        title="Choose theme"
        className="theme-toggle-btn grid h-9 w-9 place-items-center"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.span
              key="sun"
              initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
              transition={{ duration: 0.2 }}
              className="theme-toggle-icon"
            >
              <FiSun className="h-5 w-5" />
            </motion.span>
          ) : (
            <motion.span
              key="moon"
              initial={{ opacity: 0, rotate: 90, scale: 0.6 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: -90, scale: 0.6 }}
              transition={{ duration: 0.2 }}
              className="theme-toggle-icon"
            >
              <FiMoon className="h-5 w-5" />
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      {/* Dropdown menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="menu"
            initial={{ opacity: 0, y: -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.96 }}
            transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
            className="theme-menu absolute right-0 top-full z-50 mt-2 w-36 overflow-hidden rounded-lg border shadow-xl"
          >
            {themeOptions.map(({ value, label, icon: Icon }) => {
              const isActive = currentTheme === value;
              return (
                <button
                  key={value}
                  type="button"
                  role="menuitemradio"
                  aria-checked={isActive}
                  onClick={() => handleSelect(value)}
                  className={`theme-menu-item flex w-full items-center gap-2 px-3 py-2 text-left text-sm transition-colors ${
                    isActive ? "theme-menu-item-active" : ""
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span className="flex-1">{label}</span>
                  {isActive && <FiCheck className="h-4 w-4 shrink-0" />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeToggle;
