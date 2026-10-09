"use client";

import { useEffect } from "react";
import { FiAlertTriangle, FiRefreshCw } from "react-icons/fi";

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
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#011627",
          color: "#e5e9f0",
          fontFamily:
            "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
          padding: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.25rem",
            maxWidth: "28rem",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "grid",
              placeItems: "center",
              height: "4rem",
              width: "4rem",
              borderRadius: "1rem",
              border: "1px solid rgba(248, 113, 113, 0.3)",
              background: "rgba(248, 113, 113, 0.1)",
              color: "#f87171",
            }}
          >
            <FiAlertTriangle size={28} />
          </div>

          <h1 style={{ fontSize: "1.5rem", fontWeight: 600, margin: 0 }}>
            Something went wrong
          </h1>
          <p style={{ fontSize: "0.875rem", color: "#607b96", margin: 0 }}>
            A critical error occurred. Please reload the page.
          </p>

          <button
            type="button"
            onClick={reset}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.5rem 1rem",
              borderRadius: "0.5rem",
              border: "1px solid rgba(34, 211, 238, 0.4)",
              background: "rgba(34, 211, 238, 0.1)",
              color: "#67e8f9",
              fontSize: "0.875rem",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            <FiRefreshCw size={16} />
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
