export default function AboutLoading() {
  return (
    <div className="min-h-[calc(100dvh-200px)] p-6">
      <div className="animate-pulse space-y-4">
        <div className="h-6 w-1/3 rounded bg-white/10 light:bg-[#0f172a]/10" />
        <div className="space-y-3">
          <div className="h-4 w-full rounded bg-white/10 light:bg-[#0f172a]/10" />
          <div className="h-4 w-11/12 rounded bg-white/10 light:bg-[#0f172a]/10" />
          <div className="h-4 w-10/12 rounded bg-white/10 light:bg-[#0f172a]/10" />
          <div className="h-4 w-full rounded bg-white/10 light:bg-[#0f172a]/10" />
          <div className="h-4 w-8/12 rounded bg-white/10 light:bg-[#0f172a]/10" />
        </div>
      </div>
    </div>
  );
}
