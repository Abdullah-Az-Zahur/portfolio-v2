export default function ContactLoading() {
  return (
    <div className="mx-auto max-w-2xl animate-pulse space-y-5 p-6">
      <div className="h-6 w-1/3 rounded bg-white/10" />
      <div className="h-4 w-full rounded bg-white/10" />

      <div className="space-y-3 pt-4">
        <div className="h-10 w-full rounded bg-white/10" />
        <div className="h-10 w-full rounded bg-white/10" />
        <div className="h-32 w-full rounded bg-white/10" />
        <div className="h-10 w-32 rounded bg-white/10" />
      </div>
    </div>
  );
}
