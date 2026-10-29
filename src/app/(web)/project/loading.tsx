export default function ProjectLoading() {
  return (
    <div
      role="status"
      aria-busy="true"
      aria-label="Loading projects"
      className="grid gap-6 p-6 md:grid-cols-2 lg:grid-cols-3"
    >
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          aria-hidden="true"
          className="animate-pulse space-y-3 rounded-lg border border-(--app-border-color) p-4 light:border-[#cbd6e3]"
        >
          <div className="h-40 w-full rounded bg-[#ffffff1a] light:bg-[#00000010]" />
          <div className="h-4 w-3/4 rounded bg-[#ffffff1a] light:bg-[#00000010]" />
          <div className="h-4 w-full rounded bg-[#ffffff1a] light:bg-[#00000010]" />
          <div className="h-4 w-5/6 rounded bg-[#ffffff1a] light:bg-[#00000010]" />
          <div className="h-8 w-24 rounded bg-[#ffffff1a] light:bg-[#00000010]" />
        </div>
      ))}
      <span className="sr-only">Loading projects...</span>
    </div>
  );
}
