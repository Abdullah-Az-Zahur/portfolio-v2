import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth/auth";
import AdminShell from "@/app/(admin)/dashboard/_components/layout/AdminShell";

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return <AdminShell>{children}</AdminShell>;
}
