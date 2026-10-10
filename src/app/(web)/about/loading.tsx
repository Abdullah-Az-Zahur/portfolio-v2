export default function AboutLoading() {
  return (
    <div className="flex min-h-[calc(100dvh-200px)]">
      {/* Sidebar skeleton */}
      <aside className="hidden w-1/4 border-r border-app-divider p-4 md:block">
        <div className="animate-pulse space-y-3">
          <div className="h-4 w-3/4 rounded bg-white/10" />
          <div className="h-4 w-2/3 rounded bg-white/10" />
          <div className="h-4 w-4/5 rounded bg-white/10" />
          <div className="h-4 w-3/5 rounded bg-white/10" />
        </div>
      </aside>

      {/* Content skeleton */}
      <main className="flex-1 p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-6 w-1/3 rounded bg-white/10" />
          <div className="space-y-3">
            <div className="h-4 w-full rounded bg-white/10" />
            <div className="h-4 w-11/12 rounded bg-white/10" />
            <div className="h-4 w-10/12 rounded bg-white/10" />
            <div className="h-4 w-full rounded bg-white/10" />
            <div className="h-4 w-8/12 rounded bg-white/10" />
          </div>
        </div>
      </main>
    </div>
  );
}
