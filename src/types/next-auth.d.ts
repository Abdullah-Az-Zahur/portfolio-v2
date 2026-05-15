import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user?: DefaultSession["user"] & {
      id?: string;
      role?: "admin";
    };
  }

  interface User {
    role?: "admin";
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: "admin";
  }
}
