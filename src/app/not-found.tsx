import Link from "next/link";
import { FiCompass, FiHome, FiArrowLeft } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] w-full items-center justify-center px-4">
      <div className="flex max-w-md flex-col items-center gap-5 text-center">
        {/* Icon */}
        <div className="grid h-16 w-16 place-items-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
          <FiCompass className="h-7 w-7" />
        </div>

        {/* Big 404 */}
        <h1 className="font-mono text-5xl font-bold tracking-tight text-[#e5e9f0]">
          404
        </h1>

        {/* Heading */}
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold text-[#e5e9f0]">
            Page not found
          </h2>
          <p className="text-sm text-[#607b96]">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:border-cyan-300/60 hover:bg-cyan-400/20"
          >
            <FiHome className="h-4 w-4" />
            Go home
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-lg border border-[#4a627a] px-4 py-2 text-sm font-medium text-[#cbd5e1] transition hover:border-cyan-300/60 hover:text-white"
          >
            <FiArrowLeft className="h-4 w-4" />
            About me
          </Link>
        </div>
      </div>
    </div>
  );
}
