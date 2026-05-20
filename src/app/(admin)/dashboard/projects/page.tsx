import { requireAdminAuth } from "@/lib/auth/adminServerAuth";
import { FiArrowUp, FiFolderPlus, FiMove } from "react-icons/fi";
import { Card } from "@/components/ui";

const projectSteps = [
  "Add title, description, and live links",
  "Select used skills with checkboxes",
  "Upload project images to Cloudinary",
  "Save Cloudinary URL and metadata to MongoDB",
  "Drag projects to reorder display priority",
];

export default async function DashboardProjectsPage() {
  await requireAdminAuth("/dashboard/projects");

  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <div className="flex items-center gap-3">
          <FiFolderPlus className="h-5 w-5 text-cyan-300" />
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">
              Projects CMS
            </p>
            <h1 className="mt-1 text-2xl font-semibold text-white">
              Create, edit, and sort projects
            </h1>
          </div>
        </div>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
          This area will later become the project editor with image upload,
          skill tags, and drag-and-drop ordering.
        </p>
      </section>

      <section className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
        <Card className="border-dashed border-cyan-400/30 p-6">
          <h2 className="text-lg font-medium text-white">
            New project form placeholder
          </h2>
          <div className="mt-5 space-y-3 text-sm text-slate-400">
            {[
              "Project title",
              "Description",
              "Live URL",
              "GitHub URL",
              "Skill checkbox group",
              "Image upload field",
              "Order value",
            ].map((field) => (
              <Card key={field} className="px-4 py-3">
                {field}
              </Card>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3">
            <FiMove className="h-5 w-5 text-cyan-300" />
            <h2 className="text-lg font-medium text-white">
              Drag and drop sorting
            </h2>
          </div>
          <div className="mt-5 space-y-3">
            {projectSteps.map((step, index) => (
              <div
                key={step}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-[#0b1728] px-4 py-3 text-sm text-slate-300"
              >
                <span className="rounded-full bg-cyan-400/10 px-2 py-1 text-xs text-cyan-300">
                  {index + 1}
                </span>
                <span>{step}</span>
              </div>
            ))}
          </div>
          <Card className="mt-5 border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">
            Existing projects will appear here later for reordering and editing.
          </Card>
        </Card>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <div className="flex items-center gap-3">
          <FiArrowUp className="h-5 w-5 text-cyan-300" />
          <h2 className="text-lg font-medium text-white">
            Current projects list
          </h2>
        </div>
        <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-[#0b1728] px-4 py-4 text-sm text-slate-400"
            >
              Project card placeholder #{index + 1}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
