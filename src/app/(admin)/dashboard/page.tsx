import Link from "next/link";
import {
  FiArrowRight,
  FiBarChart2,
  FiClock,
  FiFolder,
  FiImage,
  FiUser,
} from "react-icons/fi";

const stats = [
  { label: "Profile sections", value: "6", icon: FiUser },
  { label: "Projects", value: "13+", icon: FiFolder },
  { label: "Media assets", value: "Cloudinary", icon: FiImage },
  { label: "Recent updates", value: "Live", icon: FiClock },
];

const quickLinks = [
  { label: "Edit profile", href: "/dashboard/profile" },
  { label: "Manage projects", href: "/dashboard/projects" },
  { label: "Upload media", href: "/dashboard/media" },
  { label: "Settings", href: "/dashboard/settings" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/10 via-white/5 to-transparent p-6 shadow-2xl shadow-cyan-950/20">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">
              CMS overview
            </p>
            <h1 className="text-3xl font-semibold text-white md:text-4xl">
              Welcome to your portfolio dashboard
            </h1>
            <p className="max-w-xl text-sm leading-7 text-slate-300 md:text-base">
              This skeleton is ready for MongoDB-driven content, Cloudinary
              uploads, project reordering, and profile management without
              changing the public UI.
            </p>
          </div>
          <Link
            href="/dashboard/projects"
            className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-cyan-300"
          >
            Open projects
            <FiArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <article
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-slate-400">{stat.label}</p>
                  <p className="mt-2 text-2xl font-semibold text-white">
                    {stat.value}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-cyan-300">
                  <Icon className="h-5 w-5" />
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center gap-3">
            <FiBarChart2 className="h-5 w-5 text-cyan-300" />
            <h2 className="text-lg font-medium text-white">
              What this dashboard will manage
            </h2>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {[
              "Personal information",
              "Professional information",
              "Hobbies and interests",
              "Project metadata and skills",
              "Cloudinary image URLs",
              "Project order and filters",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-[#0b1728] px-4 py-3 text-sm text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-lg font-medium text-white">Quick actions</h2>
          <div className="mt-5 space-y-3">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#0b1728] px-4 py-3 text-sm text-slate-300 transition hover:border-cyan-400/30 hover:text-white"
              >
                <span>{link.label}</span>
                <FiArrowRight className="h-4 w-4 text-cyan-300" />
              </Link>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}
