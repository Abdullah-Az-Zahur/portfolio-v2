import { Card } from "@/components/ui";

const profileSections = [
  "Personal bio",
  "Professional summary",
  "Education timeline",
  "Work experience",
  "Certificates",
  "Hobbies and interests",
];

export default function DashboardProfilePage() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">
          Profile CMS
        </p>
        <h1 className="mt-2 text-2xl font-semibold text-white">
          Edit personal and professional info
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
          This page will later load existing MongoDB data into editable fields
          so you can update everything from the dashboard.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {profileSections.map((section) => (
          <Card key={section} className="p-5">
            <h2 className="text-base font-medium text-white">{section}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Placeholder card for dynamic form fields, fetched data, and
              validation.
            </p>
          </Card>
        ))}
      </section>
    </div>
  );
}
