"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import {
  FiGrid,
  FiImage,
  FiLogOut,
  FiSettings,
  FiUser,
  FiFolder,
} from "react-icons/fi";

const navigationItems = [
  { label: "Dashboard", href: "/dashboard", icon: FiGrid },
  { label: "Profile", href: "/dashboard/profile", icon: FiUser },
  { label: "Projects", href: "/dashboard/projects", icon: FiFolder },
  { label: "Media", href: "/dashboard/media", icon: FiImage },
  { label: "Settings", href: "/dashboard/settings", icon: FiSettings },
];

type AdminShellProps = {
  children: ReactNode;
};

export default function AdminShell({ children }: AdminShellProps) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#07111f] text-slate-100">
      <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">
        <aside className="border-b border-white/10 bg-[#081524] px-5 py-6 lg:border-r lg:border-b-0">
          <div className="mb-8 space-y-2">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">
              Admin Panel
            </p>
            <h1 className="text-2xl font-semibold text-white">Portfolio CMS</h1>
            <p className="text-sm leading-6 text-slate-400">
              Manage profile content, projects, media, and order from one place.
            </p>
          </div>

          <nav className="space-y-2">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-sm transition ${
                    isActive
                      ? "border-cyan-400/40 bg-cyan-400/10 text-cyan-200"
                      : "border-white/5 bg-white/0 text-slate-300 hover:border-white/10 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
              System Status
            </p>
            <div className="mt-3 flex items-center justify-between text-sm">
              <span className="text-slate-300">NextAuth</span>
              <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-emerald-300">
                Ready
              </span>
            </div>
            <div className="mt-2 flex items-center justify-between text-sm">
              <span className="text-slate-300">MongoDB</span>
              <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-emerald-300">
                Ready
              </span>
            </div>
            <div className="mt-2 flex items-center justify-between text-sm">
              <span className="text-slate-300">Cloudinary</span>
              <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-emerald-300">
                Ready
              </span>
            </div>
          </div>

          <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition hover:bg-white/10">
            <FiLogOut className="h-4 w-4" />
            Sign out
          </button>
        </aside>

        <main className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-10 border-b border-white/10 bg-[#07111f]/90 px-5 py-4 backdrop-blur">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                  Dashboard workspace
                </p>
                <h2 className="mt-1 text-lg font-medium text-white">
                  Content control center
                </h2>
              </div>
              <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs text-cyan-200">
                Admin access enabled
              </div>
            </div>
          </header>

          <div className="flex-1 px-5 py-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
