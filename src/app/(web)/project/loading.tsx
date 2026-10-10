export default function ProjectLoading() {
  return (
    <div className="grid gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="animate-pulse space-y-3 rounded-lg border border-app-divider-soft p-4"
        >
          <div className="h-40 w-full rounded bg-white/10" />
          <div className="h-4 w-3/4 rounded bg-white/10" />
          <div className="h-4 w-full rounded bg-white/10" />
          <div className="h-4 w-5/6 rounded bg-white/10" />
          <div className="h-8 w-24 rounded bg-white/10" />
        </div>
      ))}
    </div>
  );
}
