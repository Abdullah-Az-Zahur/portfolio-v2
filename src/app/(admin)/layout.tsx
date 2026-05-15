"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import AdminShell from "@/features/dashboard/components/layout/AdminShell";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/dashboard/login";

  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isLoginPage && status === "unauthenticated") {
      router.replace("/dashboard/login");
    }
  }, [isLoginPage, status, router]);

  if (!isLoginPage && (status === "loading" || status === "unauthenticated")) {
    return (
      <div className="grid min-h-screen place-items-center bg-[#07111f] px-5 py-12 text-slate-100">
        <div className="flex flex-col items-center gap-4 rounded-3xl border border-white/5 bg-[#081524] p-8">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/10 border-t-cyan-300" />
            <p className="text-sm text-slate-300">
              {status === "loading"
                ? "Checking session…"
                : "Redirecting to login…"}
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (isLoginPage) {
    return <>{children}</>;
  }

  return <AdminShell>{children}</AdminShell>;
}
