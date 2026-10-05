import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, auth, signIn, signOut } = NextAuth({
  session: { strategy: "jwt" },
  pages: { signIn: "/dashboard/login" },
  callbacks: {
    authorized({ auth: session, request }) {
      const isLoginRoute = request.nextUrl.pathname === "/dashboard/login";
      return isLoginRoute || Boolean(session?.user);
    },
  },
  providers: [
    Credentials({
      name: "Admin credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const email = process.env.ADMIN_EMAIL;
        const password = process.env.ADMIN_PASSWORD;

        if (
          !email ||
          !password ||
          credentials?.email !== email ||
          credentials?.password !== password
        ) {
          return null;
        }

        return { id: email, name: "Portfolio Admin", email };
      },
    }),
  ],
});
