import bcrypt from "bcryptjs";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { adminLoginSchema } from "@/schemas/auth.schema";

const adminEmail = process.env.ADMIN_EMAIL;
const adminPassword = process.env.ADMIN_PASSWORD;
const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH;

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Admin credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const parsed = adminLoginSchema.safeParse(credentials);

        if (!parsed.success || !adminEmail) {
          return null;
        }

        const emailMatches =
          parsed.data.email.toLowerCase() === adminEmail.toLowerCase();
        if (!emailMatches) {
          return null;
        }

        const passwordMatches = adminPasswordHash
          ? await bcrypt.compare(parsed.data.password, adminPasswordHash)
          : parsed.data.password === adminPassword;

        if (!passwordMatches) {
          return null;
        }

        return {
          id: adminEmail,
          email: adminEmail,
          name: "Admin",
          role: "admin" as const,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/dashboard/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub;
        session.user.role = token.role;
      }

      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
