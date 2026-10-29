export default function Loading() {
  return (
    <div className="flex min-h-[calc(100dvh-56px-48px)] items-center justify-center bg-[#011627] transition-colors duration-200 light:bg-[#eef3f8]">
      <div className="flex flex-col items-center gap-4">
        {/* Dual-ring spinner */}
        <div className="relative h-12 w-12">
          <div className="absolute inset-0 animate-spin rounded-full border-2 border-cyan-400/20 border-t-cyan-400 light:border-cyan-600/20 light:border-t-cyan-600" />
          <div
            className="absolute inset-2 animate-spin rounded-full border-2 border-violet-400/20 border-t-violet-400 light:border-violet-600/20 light:border-t-violet-600"
            style={{ animationDirection: "reverse", animationDuration: "1.2s" }}
          />
        </div>
        <p className="font-mono text-xs text-slate-500 light:text-slate-600">
          loading…
        </p>
      </div>
    </div>
  );
}
