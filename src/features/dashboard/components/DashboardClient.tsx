"use client";

import axios from "axios";
import { signOut } from "next-auth/react";
import { FormEvent, useEffect, useMemo, useState } from "react";

type PortfolioPayload = {
  portfolio: {
    _id: string;
    name: string;
    bio: string;
    contact: { phone: string; email: string };
    social: { github: string; linkedin: string; facebook: string };
  };
  projects: Array<{
    _id: string;
    name: string;
    description: string;
    image: string;
    liveLink: string;
    repoLink: string;
    skills: string[];
    order: number;
  }>;
  skills: string[];
  hobbies: Array<{
    _id: string;
    title: string;
    description: string;
    order: number;
  }>;
  education: Array<{
    _id: string;
    degree: string;
    institution: string;
    cgpa: string;
    date: string;
    description: string;
    order: number;
  }>;
  experience: Array<{
    _id: string;
    company: string;
    position: string;
    duration: string;
    description: string;
    order: number;
  }>;
};

const emptyProject = {
  name: "",
  description: "",
  image: "",
  liveLink: "",
  repoLink: "",
  skills: [] as string[],
};

const DashboardClient = () => {
  const [data, setData] = useState<PortfolioPayload | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [projectForm, setProjectForm] = useState(emptyProject);
  const [projectEditId, setProjectEditId] = useState<string | null>(null);
  const [newSkillInput, setNewSkillInput] = useState("");
  const [draggedProjectId, setDraggedProjectId] = useState<string | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);

  const loadData = async () => {
    try {
      const response = await axios.get<PortfolioPayload>("/api/portfolio");
      setData(response.data);
      setLoadError(null);
    } catch (error) {
      setLoadError("Failed to load dashboard data.");
      console.error("Failed to load dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void axios
      .get<PortfolioPayload>("/api/portfolio")
      .then((response) => {
        setData(response.data);
        setLoadError(null);
      })
      .catch((error) => {
        setLoadError("Failed to load dashboard data.");
        console.error("Failed to load dashboard data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const availableSkills = useMemo(() => {
    if (!data) {
      return [];
    }

    return Array.from(new Set([...data.skills, ...projectForm.skills])).sort(
      (a, b) => a.localeCompare(b),
    );
  }, [data, projectForm.skills]);

  const savePortfolioInfo = async (event: FormEvent) => {
    event.preventDefault();
    if (!data?.portfolio.name.trim() || !data.portfolio.contact.email.trim()) {
      return;
    }

    setSaving(true);
    await axios.put("/api/portfolio", data.portfolio);
    await loadData();
    setSaving(false);
  };

  const uploadProjectImage = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    const response = await axios.post<{ url: string }>("/api/upload", formData);
    setProjectForm((previous) => ({ ...previous, image: response.data.url }));
  };

  const submitProject = async (event: FormEvent) => {
    event.preventDefault();
    if (
      !projectForm.name.trim() ||
      !projectForm.description.trim() ||
      !projectForm.image.trim() ||
      !projectForm.liveLink.trim() ||
      !projectForm.repoLink.trim() ||
      projectForm.skills.length === 0
    ) {
      return;
    }

    if (projectEditId) {
      await axios.put(`/api/projects/${projectEditId}`, projectForm);
    } else {
      await axios.post("/api/projects", projectForm);
    }

    setProjectForm(emptyProject);
    setProjectEditId(null);
    await loadData();
  };

  const saveSimpleItem = async (
    api: "hobbies" | "education" | "experience",
    payload: Record<string, string | number>,
    id?: string,
  ) => {
    if (id) {
      await axios.put(`/api/${api}/${id}`, payload);
      return;
    }

    await axios.post(`/api/${api}`, payload);
  };

  if (loading) {
    return <div className="p-6">Loading dashboard...</div>;
  }

  if (loadError || !data) {
    return (
      <div className="p-6 text-red-400">{loadError || "Data unavailable."}</div>
    );
  }

  return (
    <div className="min-h-screen bg-[#011627] p-4 md:p-8 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Portfolio Dashboard</h1>
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="rounded border border-gray-600 px-3 py-1.5 text-sm"
        >
          Sign out
        </button>
      </div>

      <section className="rounded border border-gray-700 p-4 bg-[#0B1B2E]">
        <h2 className="text-lg mb-3">Portfolio / Personal Info</h2>
        <form
          className="grid gap-3 md:grid-cols-2"
          onSubmit={savePortfolioInfo}
        >
          <input
            className="rounded border border-gray-600 bg-[#011221] px-3 py-2"
            value={data.portfolio.name}
            onChange={(event) =>
              setData((previous) =>
                previous
                  ? {
                      ...previous,
                      portfolio: {
                        ...previous.portfolio,
                        name: event.target.value,
                      },
                    }
                  : previous,
              )
            }
            placeholder="Name"
            required
          />
          <input
            className="rounded border border-gray-600 bg-[#011221] px-3 py-2"
            value={data.portfolio.contact.email}
            onChange={(event) =>
              setData((previous) =>
                previous
                  ? {
                      ...previous,
                      portfolio: {
                        ...previous.portfolio,
                        contact: {
                          ...previous.portfolio.contact,
                          email: event.target.value,
                        },
                      },
                    }
                  : previous,
              )
            }
            placeholder="Email"
            required
          />
          <input
            className="rounded border border-gray-600 bg-[#011221] px-3 py-2"
            value={data.portfolio.contact.phone}
            onChange={(event) =>
              setData((previous) =>
                previous
                  ? {
                      ...previous,
                      portfolio: {
                        ...previous.portfolio,
                        contact: {
                          ...previous.portfolio.contact,
                          phone: event.target.value,
                        },
                      },
                    }
                  : previous,
              )
            }
            placeholder="Phone"
            required
          />
          <input
            className="rounded border border-gray-600 bg-[#011221] px-3 py-2"
            value={data.portfolio.social.github}
            onChange={(event) =>
              setData((previous) =>
                previous
                  ? {
                      ...previous,
                      portfolio: {
                        ...previous.portfolio,
                        social: {
                          ...previous.portfolio.social,
                          github: event.target.value,
                        },
                      },
                    }
                  : previous,
              )
            }
            placeholder="GitHub URL"
            required
          />
          <input
            className="rounded border border-gray-600 bg-[#011221] px-3 py-2"
            value={data.portfolio.social.linkedin}
            onChange={(event) =>
              setData((previous) =>
                previous
                  ? {
                      ...previous,
                      portfolio: {
                        ...previous.portfolio,
                        social: {
                          ...previous.portfolio.social,
                          linkedin: event.target.value,
                        },
                      },
                    }
                  : previous,
              )
            }
            placeholder="LinkedIn URL"
            required
          />
          <input
            className="rounded border border-gray-600 bg-[#011221] px-3 py-2"
            value={data.portfolio.social.facebook}
            onChange={(event) =>
              setData((previous) =>
                previous
                  ? {
                      ...previous,
                      portfolio: {
                        ...previous.portfolio,
                        social: {
                          ...previous.portfolio.social,
                          facebook: event.target.value,
                        },
                      },
                    }
                  : previous,
              )
            }
            placeholder="Facebook URL"
            required
          />
          <textarea
            className="md:col-span-2 rounded border border-gray-600 bg-[#011221] px-3 py-2 min-h-28"
            value={data.portfolio.bio}
            onChange={(event) =>
              setData((previous) =>
                previous
                  ? {
                      ...previous,
                      portfolio: {
                        ...previous.portfolio,
                        bio: event.target.value,
                      },
                    }
                  : previous,
              )
            }
            placeholder="Bio"
            required
          />
          <button
            type="submit"
            className="md:col-span-2 rounded bg-blue-600 px-3 py-2 disabled:opacity-60"
            disabled={saving}
          >
            {saving ? "Saving..." : "Save Portfolio"}
          </button>
        </form>
      </section>

      <section className="rounded border border-gray-700 p-4 bg-[#0B1B2E] space-y-4">
        <h2 className="text-lg">Projects (CRUD + Drag Reorder)</h2>
        <form className="grid gap-3 md:grid-cols-2" onSubmit={submitProject}>
          <input
            className="rounded border border-gray-600 bg-[#011221] px-3 py-2"
            placeholder="Project name"
            value={projectForm.name}
            onChange={(event) =>
              setProjectForm((previous) => ({
                ...previous,
                name: event.target.value,
              }))
            }
            required
          />
          <input
            className="rounded border border-gray-600 bg-[#011221] px-3 py-2"
            placeholder="Live link"
            value={projectForm.liveLink}
            onChange={(event) =>
              setProjectForm((previous) => ({
                ...previous,
                liveLink: event.target.value,
              }))
            }
            required
          />
          <input
            className="rounded border border-gray-600 bg-[#011221] px-3 py-2"
            placeholder="Repo link"
            value={projectForm.repoLink}
            onChange={(event) =>
              setProjectForm((previous) => ({
                ...previous,
                repoLink: event.target.value,
              }))
            }
            required
          />
          <input
            className="rounded border border-gray-600 bg-[#011221] px-3 py-2"
            placeholder="Image URL"
            value={projectForm.image}
            onChange={(event) =>
              setProjectForm((previous) => ({
                ...previous,
                image: event.target.value,
              }))
            }
            required
          />
          <input
            type="file"
            accept="image/*"
            className="md:col-span-2"
            onChange={(event) => {
              const file = event.target.files?.[0];
              if (file) {
                void uploadProjectImage(file);
              }
            }}
          />
          <textarea
            className="md:col-span-2 rounded border border-gray-600 bg-[#011221] px-3 py-2 min-h-24"
            placeholder="Description"
            value={projectForm.description}
            onChange={(event) =>
              setProjectForm((previous) => ({
                ...previous,
                description: event.target.value,
              }))
            }
            required
          />
          <div className="md:col-span-2">
            <p className="text-sm mb-2">Skills</p>
            <div className="flex flex-wrap gap-2">
              {availableSkills.map((skill) => {
                const checked = projectForm.skills.includes(skill);
                return (
                  <label
                    key={skill}
                    className="text-sm border border-gray-600 rounded px-2 py-1"
                  >
                    <input
                      type="checkbox"
                      className="mr-1"
                      checked={checked}
                      onChange={() =>
                        setProjectForm((previous) => ({
                          ...previous,
                          skills: checked
                            ? previous.skills.filter((item) => item !== skill)
                            : [...previous.skills, skill],
                        }))
                      }
                    />
                    {skill}
                  </label>
                );
              })}
            </div>
            <div className="mt-2 flex gap-2">
              <input
                className="rounded border border-gray-600 bg-[#011221] px-3 py-2 flex-1"
                placeholder="Add custom skill"
                value={newSkillInput}
                onChange={(event) => setNewSkillInput(event.target.value)}
              />
              <button
                type="button"
                onClick={() => {
                  const value = newSkillInput.trim();
                  if (!value || projectForm.skills.includes(value)) {
                    return;
                  }

                  setProjectForm((previous) => ({
                    ...previous,
                    skills: [...previous.skills, value],
                  }));
                  setNewSkillInput("");
                }}
                className="rounded border border-gray-600 px-3 py-2"
              >
                Add Skill
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="md:col-span-2 rounded bg-blue-600 px-3 py-2"
          >
            {projectEditId ? "Update Project" : "Create Project"}
          </button>
        </form>

        <div className="space-y-2">
          {data.projects
            .slice()
            .sort((a, b) => a.order - b.order)
            .map((project, index) => (
              <div
                key={project._id}
                draggable
                onDragStart={() => setDraggedProjectId(project._id)}
                onDragOver={(event) => event.preventDefault()}
                onDrop={async () => {
                  if (!draggedProjectId || draggedProjectId === project._id) {
                    return;
                  }

                  await axios.patch(
                    `/api/projects/${draggedProjectId}/reorder`,
                    {
                      order: index + 1,
                    },
                  );
                  setDraggedProjectId(null);
                  await loadData();
                }}
                className="rounded border border-gray-700 bg-[#011221] p-3 flex flex-col md:flex-row md:items-center md:justify-between gap-2"
              >
                <p>
                  {project.order}. {project.name}
                </p>
                <div className="flex gap-2">
                  <button
                    type="button"
                    className="rounded border border-gray-600 px-2 py-1 text-sm"
                    onClick={() => {
                      setProjectEditId(project._id);
                      setProjectForm({
                        name: project.name,
                        description: project.description,
                        image: project.image,
                        liveLink: project.liveLink,
                        repoLink: project.repoLink,
                        skills: project.skills,
                      });
                    }}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="rounded border border-red-700 px-2 py-1 text-sm text-red-300"
                    onClick={async () => {
                      await axios.delete(`/api/projects/${project._id}`);
                      await loadData();
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
        </div>
      </section>

      <EditableSection
        title="Hobbies"
        fields={[
          { name: "title", label: "Title", required: true },
          {
            name: "description",
            label: "Description",
            required: true,
            textarea: true,
          },
          { name: "order", label: "Order", required: true, type: "number" },
        ]}
        items={data.hobbies}
        onSave={(payload, id) => saveSimpleItem("hobbies", payload, id)}
        onDelete={(id) => axios.delete(`/api/hobbies/${id}`)}
        onRefresh={loadData}
      />

      <EditableSection
        title="Education"
        fields={[
          { name: "degree", label: "Degree", required: true },
          { name: "institution", label: "Institution", required: true },
          { name: "cgpa", label: "CGPA", required: false },
          { name: "date", label: "Date", required: true },
          {
            name: "description",
            label: "Description",
            required: true,
            textarea: true,
          },
          { name: "order", label: "Order", required: true, type: "number" },
        ]}
        items={data.education}
        onSave={(payload, id) => saveSimpleItem("education", payload, id)}
        onDelete={(id) => axios.delete(`/api/education/${id}`)}
        onRefresh={loadData}
      />

      <EditableSection
        title="Experience"
        fields={[
          { name: "company", label: "Company", required: true },
          { name: "position", label: "Position", required: true },
          { name: "duration", label: "Duration", required: true },
          {
            name: "description",
            label: "Description",
            required: true,
            textarea: true,
          },
          { name: "order", label: "Order", required: true, type: "number" },
        ]}
        items={data.experience}
        onSave={(payload, id) => saveSimpleItem("experience", payload, id)}
        onDelete={(id) => axios.delete(`/api/experience/${id}`)}
        onRefresh={loadData}
      />
    </div>
  );
};

type EditableField = {
  name: string;
  label: string;
  required: boolean;
  textarea?: boolean;
  type?: string;
};

const EditableSection = ({
  title,
  fields,
  items,
  onSave,
  onDelete,
  onRefresh,
}: {
  title: string;
  fields: EditableField[];
  items: Array<Record<string, string | number>>;
  onSave: (
    payload: Record<string, string | number>,
    id?: string,
  ) => Promise<void>;
  onDelete: (id: string) => Promise<unknown>;
  onRefresh: () => Promise<void>;
}) => {
  const emptyState = Object.fromEntries(
    fields.map((field) => [field.name, field.type === "number" ? 1 : ""]),
  );
  const [form, setForm] = useState<Record<string, string | number>>(emptyState);
  const [editingId, setEditingId] = useState<string | undefined>(undefined);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    for (const field of fields) {
      const value = form[field.name];
      if (field.required && String(value).trim() === "") {
        return;
      }
    }

    await onSave(form, editingId);
    setForm(emptyState);
    setEditingId(undefined);
    await onRefresh();
  };

  return (
    <section className="rounded border border-gray-700 p-4 bg-[#0B1B2E] space-y-4">
      <h2 className="text-lg">{title}</h2>
      <form className="grid gap-3 md:grid-cols-2" onSubmit={onSubmit}>
        {fields.map((field) => {
          if (field.textarea) {
            return (
              <textarea
                key={field.name}
                className="md:col-span-2 rounded border border-gray-600 bg-[#011221] px-3 py-2 min-h-20"
                placeholder={field.label}
                value={String(form[field.name] ?? "")}
                onChange={(event) =>
                  setForm((previous) => ({
                    ...previous,
                    [field.name]: event.target.value,
                  }))
                }
                required={field.required}
              />
            );
          }

          return (
            <input
              key={field.name}
              type={field.type ?? "text"}
              className="rounded border border-gray-600 bg-[#011221] px-3 py-2"
              placeholder={field.label}
              value={String(form[field.name] ?? "")}
              onChange={(event) =>
                setForm((previous) => ({
                  ...previous,
                  [field.name]:
                    field.type === "number"
                      ? Number(event.target.value || 0)
                      : event.target.value,
                }))
              }
              required={field.required}
            />
          );
        })}
        <button
          type="submit"
          className="md:col-span-2 rounded bg-blue-600 px-3 py-2"
        >
          {editingId ? `Update ${title}` : `Add ${title}`}
        </button>
      </form>
      <div className="space-y-2">
        {items.map((item) => {
          const id = String(item._id);
          const summary = String(
            item.title ||
              item.degree ||
              item.company ||
              item.position ||
              "Entry",
          );
          return (
            <div
              key={id}
              className="rounded border border-gray-700 bg-[#011221] p-3 flex items-center justify-between gap-2"
            >
              <p>{summary}</p>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="rounded border border-gray-600 px-2 py-1 text-sm"
                  onClick={() => {
                    const next = { ...item };
                    delete next._id;
                    setForm(next);
                    setEditingId(id);
                  }}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="rounded border border-red-700 px-2 py-1 text-sm text-red-300"
                  onClick={async () => {
                    await onDelete(id);
                    await onRefresh();
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DashboardClient;
