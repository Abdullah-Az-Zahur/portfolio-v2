import DashboardLoginClient from "./DashboardLoginClient";

type DashboardLoginPageProps = {
  searchParams?: {
    next?: string | string[];
  };
};

export default function DashboardLoginPage({ searchParams }: DashboardLoginPageProps) {
  const nextPath = Array.isArray(searchParams?.next)
    ? searchParams.next[0]
    : searchParams?.next;
  const redirectPath =
    nextPath && nextPath.startsWith("/dashboard") ? nextPath : "/dashboard";

  return <DashboardLoginClient redirectPath={redirectPath} />;
}
