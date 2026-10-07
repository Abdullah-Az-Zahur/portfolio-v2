"use client";

import { useSyncExternalStore, useState } from "react";
import { useTheme } from "next-themes";
import { FiMonitor, FiMoon, FiSun } from "react-icons/fi";

const themes = [
  { value: "system", label: "System", icon: FiMonitor },
  { value: "light", label: "Light", icon: FiSun },
  { value: "dark", label: "Dark", icon: FiMoon },
] as const;

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const mounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false,
  );

  if (!mounted) return <div className="h-8 w-8" aria-hidden />;

  const current = themes.find((item) => item.value === theme) ?? themes[0];
  const CurrentIcon = current.icon;

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-haspopup="menu"
        className="grid h-8 w-8 place-items-center rounded-lg text-slate-400 transition hover:bg-white/10 hover:text-cyan-300"
      >
        <CurrentIcon className="h-4 w-4 text-cyan-300" />
      </button>
      {open ? (
        <div
          className="theme-menu absolute right-0 top-11 z-50 w-32 rounded-xl border border-white/10 bg-[#081524] p-1 shadow-xl"
          role="menu"
        >
          {themes.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.value}
                type="button"
                role="menuitem"
                onClick={() => {
                  setTheme(item.value);
                  setOpen(false);
                }}
                className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs transition ${theme === item.value ? "bg-cyan-400 text-slate-950" : "text-slate-300 hover:bg-white/10 hover:text-white"}`}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
