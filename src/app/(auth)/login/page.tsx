"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const callbackUrl = "/dashboard";

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError("");

    if (!username.trim() || !password.trim()) {
      setError("Username and password are required.");
      return;
    }

    setLoading(true);
    const response = await signIn("credentials", {
      username,
      password,
      redirect: false,
      callbackUrl,
    });

    setLoading(false);
    if (response?.error) {
      setError("Invalid credentials.");
      return;
    }

    router.push(callbackUrl);
    router.refresh();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#011627] px-4">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md rounded-lg border border-gray-700 bg-[#0B1B2E] p-6"
      >
        <h1 className="text-xl font-semibold mb-4">Dashboard Login</h1>
        <label className="block mb-3">
          <span className="text-sm text-gray-300">Username</span>
          <input
            className="mt-1 w-full rounded border border-gray-600 bg-[#011221] px-3 py-2"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
        </label>
        <label className="block mb-4">
          <span className="text-sm text-gray-300">Password</span>
          <input
            type="password"
            className="mt-1 w-full rounded border border-gray-600 bg-[#011221] px-3 py-2"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </label>
        {error ? <p className="text-red-400 mb-3 text-sm">{error}</p> : null}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded bg-blue-600 px-3 py-2 text-white disabled:opacity-60"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
