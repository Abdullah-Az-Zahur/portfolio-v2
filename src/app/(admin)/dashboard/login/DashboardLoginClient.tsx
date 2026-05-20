"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { FiLock, FiMail } from "react-icons/fi";

type DashboardLoginClientProps = {
  redirectPath: string;
};

export default function DashboardLoginClient({ redirectPath }: DashboardLoginClientProps) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/admin/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as {
          message?: string;
        } | null;
        setErrorMessage(data?.message || "Login failed. Please try again.");
        return;
      }

      router.replace(redirectPath);
      router.refresh();
    } catch {
      setErrorMessage("Unable to login right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
            Use your admin credentials from environment variables.
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <label className="block space-y-2">
            <span className="text-sm text-slate-300">Email</span>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0b1728] px-4 py-3 text-slate-300">
              <FiMail className="h-4 w-4 text-cyan-300" />
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="admin@example.com"
                className="w-full bg-transparent text-sm outline-none placeholder:text-slate-500"
                autoComplete="username"
                required
              />
            </div>
          </label>

          <label className="block space-y-2">
            <span className="text-sm text-slate-300">Password</span>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0b1728] px-4 py-3 text-slate-300">
              <FiLock className="h-4 w-4 text-cyan-300" />
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="••••••••"
                className="w-full bg-transparent text-sm outline-none placeholder:text-slate-500"
                autoComplete="current-password"
                required
              />
            </div>
          </label>

          {errorMessage ? (
            <p className="rounded-xl border border-rose-400/20 bg-rose-400/10 px-4 py-2 text-sm text-rose-200">
              {errorMessage}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-2xl bg-cyan-400 px-4 py-3 text-sm font-medium text-slate-950 transition hover:bg-cyan-300"
          >
            {isSubmitting ? "Signing in..." : "Continue to dashboard"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-400">
          <Link
            href="/"
            className="text-cyan-300 transition hover:text-cyan-200"
          >
            Back to portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}