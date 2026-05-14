import { authOptions } from "@/lib/auth";
import DashboardClient from "@/features/dashboard/components/DashboardClient";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }

  return <DashboardClient />;
};

export default DashboardPage;
