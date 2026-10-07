"use client";

import { FormEvent, useEffect, useState } from "react";
import {
  FiChevronDown,
  FiChevronUp,
  FiEdit3,
  FiFolderPlus,
  FiPlus,
  FiSave,
  FiTrash2,
} from "react-icons/fi";
import { projects as fallbackProjects } from "@/shared/data/projects";
import { projectSkills } from "@/shared/data/projectSkills";

type DashboardProject = {
  _id?: string;
  name: string;
  description: string;
  liveLink: string;
  repoLink: string;
  image: string;
  skills: string[];
  order?: number;
};

const emptyProject: DashboardProject = {
  name: "",
  description: "",
  liveLink: "",
  repoLink: "",
  image: "",
  skills: [],
};

function fallbackData() {
  return fallbackProjects.map((project, order) => ({
    name: project.name,
    description: project.description,
    liveLink: project.liveLink,
    repoLink: project.repoLink,
    image: project.image,
    skills: project.skills,
    order,
  }));
}

export default function DashboardProjectsPage() {
  const [projects, setProjects] = useState<DashboardProject[]>([]);
  const [selected, setSelected] = useState<DashboardProject>(emptyProject);
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [draggedId, setDraggedId] = useState<string | null>(null);

  useEffect(() => {
    async function loadProjects() {
      try {
        const response = await fetch("/api/dashboard/projects");
        const data = await response.json();
        const loaded =
          response.ok && data.projects?.length ? data.projects : fallbackData();
        setProjects(loaded);
        setSelected(loaded[0] ?? emptyProject);
      } catch {
        const fallback = fallbackData();
        setProjects(fallback);
        setSelected(fallback[0] ?? emptyProject);
        setMessage("MongoDB is unavailable. Showing existing project data.");
      }
    }

    void loadProjects();
  }, []);

  function changeField(field: keyof DashboardProject, value: string) {
    setSelected((current) => ({ ...current, [field]: value }));
  }

  async function saveProject(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setMessage("");

    const payload = {
      name: selected.name,
      description: selected.description,
      liveLink: selected.liveLink,
      repoLink: selected.repoLink,
      image: selected.image,
      skills: selected.skills,
      order: selected.order ?? projects.length,
    };

    try {
      const response = await fetch(
        selected._id
          ? `/api/dashboard/projects/${selected._id}`
          : "/api/dashboard/projects",
        {
          method: selected._id ? "PATCH" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
      );
      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message ?? "Unable to save this project.");
        return;
      }

      const saved = data.project as DashboardProject;
      setProjects((current) =>
        selected._id
          ? current.map((project) =>
              project._id === saved._id ? saved : project,
            )
          : [...current, saved],
      );
      setSelected(saved);
      setMessage("Project saved to MongoDB.");
    } catch {
      setMessage("Unable to reach the projects API.");
    } finally {
      setSaving(false);
    }
  }

  async function deleteProject() {
    if (!selected._id || !window.confirm(`Delete ${selected.name}?`)) return;

    const response = await fetch(`/api/dashboard/projects/${selected._id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      setMessage("Unable to delete this project.");
      return;
    }

    const remaining = projects.filter(
      (project) => project._id !== selected._id,
    );
    setProjects(remaining);
    setSelected(remaining[0] ?? emptyProject);
    setMessage("Project deleted.");
  }

  async function uploadImage(file: File) {
    setUploading(true);
    setMessage("");
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (!response.ok) {
        setMessage(data.message ?? "Unable to upload image.");
        return;
      }
      setSelected((current) => ({ ...current, image: data.url }));
      setMessage("Image uploaded. Save the project to keep it.");
    } catch {
      setMessage("Unable to reach the image upload service.");
    } finally {
      setUploading(false);
    }
  }

  function moveProject(index: number, direction: -1 | 1) {
    const nextIndex = index + direction;
    if (nextIndex < 0 || nextIndex >= projects.length) return;
    const nextProjects = [...projects];
    [nextProjects[index], nextProjects[nextIndex]] = [
      nextProjects[nextIndex],
      nextProjects[index],
    ];
    setProjects(nextProjects.map((project, order) => ({ ...project, order })));
  }

  function dropProject(targetId: string) {
    if (!draggedId || draggedId === targetId) return;
    const fromIndex = projects.findIndex(
      (project) => project._id === draggedId,
    );
    const toIndex = projects.findIndex((project) => project._id === targetId);
    if (fromIndex < 0 || toIndex < 0) return;
    const nextProjects = [...projects];
    const [movedProject] = nextProjects.splice(fromIndex, 1);
    nextProjects.splice(toIndex, 0, movedProject);
    setProjects(nextProjects.map((project, order) => ({ ...project, order })));
    setDraggedId(null);
  }

  async function saveOrder() {
    const ids = projects.map((project) => project._id).filter(Boolean);
    if (ids.length !== projects.length) {
      setMessage("Save each new project before changing its order.");
      return;
    }

    const response = await fetch("/api/dashboard/projects/reorder", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ids }),
    });
    setMessage(
      response.ok
        ? "Project order saved to MongoDB."
        : "Unable to save project order.",
    );
  }

  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
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
          <button
            type="button"
            onClick={() =>
              setSelected({ ...emptyProject, order: projects.length })
            }
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-4 py-3 text-sm font-medium text-slate-950 transition hover:bg-cyan-300"
          >
            <FiPlus className="h-4 w-4" /> New project
          </button>
        </div>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
          Existing project values are loaded first. Saved changes use MongoDB
          without changing the public card design.
        </p>
      </section>

      <section className="grid gap-6 xl:grid-cols-[0.85fr_1.15fr]">
        <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-lg font-medium text-white">
              Current projects ({projects.length})
            </h2>
            <button
              type="button"
              onClick={saveOrder}
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 px-3 py-2 text-xs text-cyan-200 transition hover:bg-cyan-400/10"
            >
              <FiSave className="h-4 w-4" /> Save order
            </button>
          </div>
          <div className="mt-5 max-h-[620px] space-y-3 overflow-y-auto pr-1">
            {projects.map((project, index) => (
              <div
                key={project._id ?? `${project.name}-${index}`}
                draggable={Boolean(project._id)}
                onDragStart={() => setDraggedId(project._id ?? null)}
                onDragOver={(event) => event.preventDefault()}
                onDrop={() => dropProject(project._id ?? "")}
                className={`flex items-center gap-2 rounded-2xl border px-3 py-2 transition ${selected._id === project._id ? "border-cyan-400/40 bg-cyan-400/10" : "border-white/10 bg-[#0b1728]"}`}
              >
                <button
                  type="button"
                  onClick={() =>
                    setSelected({ ...project, skills: [...project.skills] })
                  }
                  className="flex min-w-0 flex-1 items-center gap-3 py-1 text-left"
                >
                  <span className="text-xs text-cyan-300">{index + 1}</span>
                  <span className="min-w-0 flex-1 truncate text-sm text-slate-200">
                    {project.name}
                  </span>
                  <FiEdit3 className="h-4 w-4 text-slate-500" />
                </button>
                <button
                  type="button"
                  onClick={() => moveProject(index, -1)}
                  disabled={index === 0}
                  aria-label={`Move ${project.name} up`}
                  className="p-1 text-slate-400 hover:text-cyan-300 disabled:opacity-30"
                >
                  <FiChevronUp />
                </button>
                <button
                  type="button"
                  onClick={() => moveProject(index, 1)}
                  disabled={index === projects.length - 1}
                  aria-label={`Move ${project.name} down`}
                  className="p-1 text-slate-400 hover:text-cyan-300 disabled:opacity-30"
                >
                  <FiChevronDown />
                </button>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center gap-3">
            <FiEdit3 className="h-5 w-5 text-cyan-300" />
            <h2 className="text-lg font-medium text-white">Project editor</h2>
          </div>
          <form className="mt-5 space-y-4" onSubmit={saveProject}>
            <label className="block space-y-2 text-sm text-slate-300">
              Project title
              <input
                value={selected.name}
                onChange={(event) => changeField("name", event.target.value)}
                required
                className="w-full rounded-xl border border-white/10 bg-[#0b1728] px-4 py-3 text-white outline-none focus:border-cyan-400/50"
              />
            </label>
            <label className="block space-y-2 text-sm text-slate-300">
              Description
              <textarea
                value={selected.description}
                onChange={(event) =>
                  changeField("description", event.target.value)
                }
                rows={4}
                required
                className="w-full rounded-xl border border-white/10 bg-[#0b1728] px-4 py-3 text-white outline-none focus:border-cyan-400/50"
              />
            </label>
            <div className="grid gap-4 md:grid-cols-2">
              {(
                [
                  ["liveLink", "Live URL"],
                  ["repoLink", "GitHub URL"],
                  ["image", "Image path or URL"],
                ] as const
              ).map(([field, label]) => (
                <label
                  key={field}
                  className="block space-y-2 text-sm text-slate-300"
                >
                  {label}
                  <input
                    value={selected[field]}
                    onChange={(event) => changeField(field, event.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-[#0b1728] px-4 py-3 text-sm text-white outline-none focus:border-cyan-400/50"
                  />
                </label>
              ))}
              <label className="block space-y-2 text-sm text-slate-300">
                Display order
                <input
                  type="number"
                  min="0"
                  value={selected.order ?? 0}
                  onChange={(event) =>
                    setSelected((current) => ({
                      ...current,
                      order: Number(event.target.value),
                    }))
                  }
                  className="w-full rounded-xl border border-white/10 bg-[#0b1728] px-4 py-3 text-sm text-white outline-none focus:border-cyan-400/50"
                />
              </label>
            </div>
            <label className="block space-y-2 text-sm text-slate-300">
              Upload project image
              <input
                type="file"
                accept="image/*"
                disabled={uploading}
                onChange={(event) => {
                  const file = event.target.files?.[0];
                  if (file) void uploadImage(file);
                }}
                className="w-full rounded-xl border border-white/10 bg-[#0b1728] px-4 py-3 text-sm text-slate-300 file:mr-4 file:rounded-lg file:border-0 file:bg-cyan-400 file:px-3 file:py-2 file:text-sm file:text-slate-950"
              />
              <span className="text-xs text-slate-500">
                {uploading
                  ? "Uploading to Cloudinary..."
                  : "PNG, JPG, WEBP up to 5 MB"}
              </span>
            </label>
            {selected.image ? (
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b1728]">
                <div
                  className="aspect-video bg-cover bg-center"
                  style={{ backgroundImage: `url("${selected.image}")` }}
                  role="img"
                  aria-label={`${selected.name || "Project"} preview`}
                />
              </div>
            ) : null}
            <fieldset className="space-y-2 text-sm text-slate-300">
              <legend>Skills</legend>
              <div className="grid gap-2 sm:grid-cols-2">
                {projectSkills.map((skill) => {
                  const SkillIcon = skill.icon;
                  const checked = selected.skills.includes(skill.id);
                  return (
                    <label
                      key={skill.id}
                      className="flex cursor-pointer items-center gap-2 rounded-xl border border-white/10 bg-[#0b1728] px-3 py-2 hover:border-cyan-400/40"
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() =>
                          setSelected((current) => ({
                            ...current,
                            skills: checked
                              ? current.skills.filter(
                                  (item) => item !== skill.id,
                                )
                              : [...current.skills, skill.id],
                          }))
                        }
                      />
                      <SkillIcon className={skill.color} />
                      <span>{skill.label}</span>
                    </label>
                  );
                })}
              </div>
            </fieldset>
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                type="submit"
                disabled={saving}
                className="rounded-xl bg-cyan-400 px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-cyan-300 disabled:opacity-50"
              >
                {saving ? "Saving..." : "Save project"}
              </button>
              {selected._id ? (
                <button
                  type="button"
                  onClick={deleteProject}
                  className="inline-flex items-center gap-2 rounded-xl border border-rose-400/30 px-5 py-3 text-sm text-rose-200 transition hover:bg-rose-400/10"
                >
                  <FiTrash2 className="h-4 w-4" /> Delete
                </button>
              ) : null}
            </div>
            {message ? (
              <p className="text-sm text-cyan-200">{message}</p>
            ) : null}
          </form>
        </article>
      </section>
    </div>
  );
}
