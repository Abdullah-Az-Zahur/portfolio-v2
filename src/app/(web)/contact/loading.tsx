export default function ContactLoading() {
  return (
    <div
      role="status"
      aria-busy="true"
      aria-label="Loading contact form"
      className="mx-auto max-w-2xl animate-pulse space-y-5 p-6"
    >
      <div
        className="h-6 w-1/3 rounded bg-[#ffffff1a] light:bg-[#00000010]"
        aria-hidden="true"
      />
      <div
        className="h-4 w-full rounded bg-[#ffffff1a] light:bg-[#00000010]"
        aria-hidden="true"
      />

      <div className="space-y-3 pt-4">
        <div
          className="h-10 w-full rounded bg-[#ffffff1a] light:bg-[#00000010]"
          aria-hidden="true"
        />
        <div
          className="h-10 w-full rounded bg-[#ffffff1a] light:bg-[#00000010]"
          aria-hidden="true"
        />
        <div
          className="h-32 w-full rounded bg-[#ffffff1a] light:bg-[#00000010]"
          aria-hidden="true"
        />
        <div
          className="h-10 w-32 rounded bg-[#ffffff1a] light:bg-[#00000010]"
          aria-hidden="true"
        />
      </div>
      <span className="sr-only">Loading contact form...</span>
    </div>
  );
}
