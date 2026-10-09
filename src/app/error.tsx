"use client";

import { useEffect } from "react";
import Link from "next/link";
import { FiAlertTriangle, FiRefreshCw, FiHome } from "react-icons/fi";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Route error:", error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] w-full items-center justify-center px-4">
      <div className="flex max-w-md flex-col items-center gap-5 text-center">
        {/* Icon */}
        <div className="grid h-16 w-16 place-items-center rounded-2xl border border-red-400/30 bg-red-400/10 text-red-400">
          <FiAlertTriangle className="h-7 w-7" />
        </div>

        {/* Heading */}
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold text-[#e5e9f0]">
            Something went wrong
          </h1>
          <p className="text-sm text-[#607b96]">
            An unexpected error occurred while loading this page. You can try
            again or go back home.
          </p>
        </div>

        {/* Error detail (optional, only in dev) */}
        {process.env.NODE_ENV === "development" && error.message && (
          <pre className="w-full overflow-x-auto rounded-lg border border-[#4a627a] bg-[#06111f] p-3 text-left text-xs text-red-300">
            {error.message}
          </pre>
        )}

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-lg border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:border-cyan-300/60 hover:bg-cyan-400/20"
          >
            <FiRefreshCw className="h-4 w-4" />
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg border border-[#4a627a] px-4 py-2 text-sm font-medium text-[#cbd5e1] transition hover:border-cyan-300/60 hover:text-white"
          >
            <FiHome className="h-4 w-4" />
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
