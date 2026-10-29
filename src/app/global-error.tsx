"use client";

import { useEffect } from "react";
import { FiAlertTriangle, FiRefreshCw } from "react-icons/fi";
import "@/app/globals.css";

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error("Global error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="flex min-h-screen items-center justify-center bg-[#011627] p-4 text-[#e5e9f0] transition-colors duration-200 light:bg-[#eef3f8] light:text-[#0f172a]">
        <div className="flex max-w-md flex-col items-center gap-5 text-center">
          <div className="grid h-16 w-16 place-items-center rounded-2xl border border-red-400/30 bg-red-400/10 text-red-400 light:border-red-600/30 light:bg-red-600/10 light:text-red-600">
            <FiAlertTriangle className="h-7 w-7" />
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold text-[#e5e9f0] light:text-[#172337]">
              Something went wrong
            </h1>
            <p className="text-sm text-[#607b96] light:text-[#52657d]">
              A critical error occurred. Please reload the page.
            </p>
          </div>

          <button
            type="button"
            onClick={reset}
            className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-[#67e8f9] transition hover:border-cyan-300/60 hover:bg-cyan-400/20 light:border-cyan-700/40 light:bg-cyan-600/10 light:text-cyan-800 light:hover:border-cyan-700/80 light:hover:bg-cyan-600/20"
          >
            <FiRefreshCw className="h-4 w-4" />
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
