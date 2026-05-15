import { FiCloud, FiUpload } from "react-icons/fi";

export default function DashboardMediaPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <div className="flex items-center gap-3">
          <FiCloud className="h-5 w-5 text-cyan-300" />
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">
              Media library
            </p>
            <h1 className="mt-1 text-2xl font-semibold text-white">
              Cloudinary upload area
            </h1>
          </div>
        </div>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
          This page will later handle image upload and store only the Cloudinary
          URL in MongoDB.
        </p>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_1fr]">
        <article className="rounded-3xl border border-dashed border-cyan-400/30 bg-[#0b1728] p-6">
          <div className="flex items-center gap-3">
            <FiUpload className="h-5 w-5 text-cyan-300" />
            <h2 className="text-lg font-medium text-white">
              Upload placeholder
            </h2>
          </div>
          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 px-4 py-10 text-center text-sm text-slate-400">
            Drag and drop files here or choose from device
          </div>
        </article>

        <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-lg font-medium text-white">Stored asset types</h2>
          <div className="mt-5 space-y-3 text-sm text-slate-300">
            {[
              "Project cover images",
              "About page visuals",
              "Profile and banner assets",
              "Cloudinary public IDs and URLs",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-[#0b1728] px-4 py-3"
              >
                {item}
              </div>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}
