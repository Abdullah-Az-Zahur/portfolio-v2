"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { FiLock, FiMail } from "react-icons/fi";
import { Input, Button } from "@/components/ui";

export default function DashboardLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
      callbackUrl: "/dashboard",
    });

    setLoading(false);

    if (res?.error) {
      setError(res.error || "Authentication failed");
      return;
    }

    // On success, navigate to dashboard
    router.push("/dashboard");
  }

  return (
    <div className="grid min-h-screen place-items-center bg-[#07111f] px-5 py-12 text-slate-100">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#081524] p-8 shadow-2xl shadow-cyan-950/20">
        <div className="mb-8 space-y-2 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">
            Admin access
          </p>
          <h1 className="text-3xl font-semibold text-white">
            Sign in to dashboard
          </h1>
          <p className="text-sm leading-6 text-slate-400">
            Use your admin credentials to authenticate and seed or manage
            content.
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <label className="block space-y-2">
            <span className="text-sm text-slate-300">Email</span>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0b1728] px-4 py-3 text-slate-300">
              <FiMail className="h-4 w-4 text-cyan-300" />
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="admin@example.com"
                className="w-full bg-transparent text-sm outline-none placeholder:text-slate-500"
              />
            </div>
          </label>

          <label className="block space-y-2">
            <span className="text-sm text-slate-300">Password</span>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0b1728] px-4 py-3 text-slate-300">
              <FiLock className="h-4 w-4 text-cyan-300" />
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="••••••••"
                className="w-full bg-transparent text-sm outline-none placeholder:text-slate-500"
              />
            </div>
          </label>

          {error && <p className="text-sm text-red-400">{error}</p>}

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Signing in…" : "Continue to dashboard"}
          </Button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-400">
          <Link
            href="/dashboard"
            className="text-cyan-300 transition hover:text-cyan-200"
          >
            Back to dashboard shell
          </Link>
        </div>
      </div>
    </div>
  );
}
