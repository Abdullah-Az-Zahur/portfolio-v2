import { Card } from "@/components/ui";

export default function DashboardSettingsPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">
          Settings
        </p>
        <h1 className="mt-2 text-2xl font-semibold text-white">
          Admin configuration
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
          This section will later hold authentication settings, content
          defaults, and CMS behavior controls.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {[
          "NextAuth providers",
          "MongoDB connection",
          "Cloudinary credentials",
          "Default project status",
          "Editor preferences",
          "Cache and refresh rules",
        ].map((item) => (
          <Card key={item} className="p-5 text-sm text-slate-300">
            {item}
          </Card>
        ))}
      </section>
    </div>
  );
}
