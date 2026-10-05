"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { FiLock, FiMail } from "react-icons/fi";

export default function DashboardLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid email or password.");
      setIsSubmitting(false);
      return;
    }

    window.location.assign("/dashboard");
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
            Use your configured admin credentials to access the CMS.
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <label className="block space-y-2">
            <span className="text-sm text-slate-300">Email</span>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0b1728] px-4 py-3 text-slate-300">
              <FiMail className="h-4 w-4 text-cyan-300" />
              <input
                type="email"
                placeholder="admin@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full bg-transparent text-sm outline-none placeholder:text-slate-500"
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
                placeholder="••••••••"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full bg-transparent text-sm outline-none placeholder:text-slate-500"
                required
              />
            </div>
          </label>

          {error ? (
            <p className="text-sm text-rose-300" role="alert">
              {error}
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
