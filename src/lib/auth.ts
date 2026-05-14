import bcrypt from "bcryptjs";
import { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  pages: { signIn: "/login" },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const username = process.env.DASHBOARD_USERNAME;
        const passwordHash = process.env.DASHBOARD_PASSWORD_HASH;

        if (!username || !passwordHash) {
          return null;
        }

        if (
          !credentials?.username ||
          !credentials?.password ||
          credentials.username !== username
        ) {
          return null;
        }

        const isValid = await bcrypt.compare(
          credentials.password,
          passwordHash,
        );
        if (!isValid) {
          return null;
        }

        return { id: username, name: username };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};
