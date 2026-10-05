import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import AdminShell from "@/features/dashboard/components/layout/AdminShell";

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect("/dashboard/login");
  }

  return <AdminShell>{children}</AdminShell>;
}
