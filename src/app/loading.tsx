export default function GlobalLoading() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#607b96] border-t-transparent" />
        <p className="text-sm text-[#607b96]">Loading...</p>
      </div>
    </div>
  );
}
