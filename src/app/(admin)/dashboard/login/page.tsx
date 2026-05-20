import DashboardLoginClient from "./DashboardLoginClient";

type DashboardLoginPageProps = {
  searchParams?:
    | Promise<{
        next?: string | string[];
      }>
    | {
        next?: string | string[];
      };
};

export default async function DashboardLoginPage({
  searchParams,
}: DashboardLoginPageProps) {
  const resolvedSearchParams = await Promise.resolve(searchParams);
  const nextPath = Array.isArray(resolvedSearchParams?.next)
    ? resolvedSearchParams.next[0]
    : resolvedSearchParams?.next;
  const redirectPath =
    nextPath && nextPath.startsWith("/dashboard") ? nextPath : "/dashboard";

  return <DashboardLoginClient redirectPath={redirectPath} />;
}
