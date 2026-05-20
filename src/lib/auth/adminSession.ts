export const ADMIN_SESSION_COOKIE = "admin_session";
export const SESSION_DURATION_SECONDS = 60 * 60 * 8;

export function getSessionSecret(): string {
  return (
    process.env.NEXTAUTH_SECRET ||
    process.env.ADMIN_SESSION_SECRET ||
    process.env.ADMIN_PASSWORD ||
    "dev-admin-secret-change-me"
  );
}
