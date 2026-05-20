"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import AdminShell from "@/features/dashboard/components/layout/AdminShell";

export default function AdminLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/dashboard/login";

  if (isLoginPage) {
    return <>{children}</>;
  }

  return <AdminShell>{children}</AdminShell>;
}
