"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import {
  FiChevronDown,
  FiExternalLink,
  FiPlus,
  FiSave,
  FiTrash2,
} from "react-icons/fi";
import { aboutContent } from "@/shared/data/aboutContent";
import {
  aboutColorClass,
  aboutColorOptions,
  aboutIconOptions,
} from "@/shared/data/aboutIconOptions";

type AboutEntry = {
  key: string;
  category: string;
  group: string;
  label: string;
  content: string;
  iconKey: string;
  color: string;
  resourceUrl?: string;
  showResource?: boolean;
  order?: number;
};

type NewItem = Omit<AboutEntry, "category" | "group" | "order"> & {
  category: string;
  group: string;
};

const emptyItem: NewItem = {
  key: "",
  category: "professional-info",
  group: "experience",
  label: "",
  content: "",
  iconKey: "user",
  color: "blue",
  resourceUrl: "",
  showResource: false,
};

function seedEntries(): AboutEntry[] {
  return aboutContent.flatMap((category) =>
    category.groups.flatMap((group) =>
      group.items.map((item, order) => ({
        key: item.id,
        label: item.label,
        content: item.content,
        iconKey: item.iconKey,
        color: item.color,
        resourceUrl: item.resourceUrl,
        showResource: Boolean(item.resourceUrl),
        category: category.id,
        group: group.id,
        order,
      })),
    ),
  );
}

function previewUrl(url: string) {
  return url.replace(/\/view(?:\?.*)?$/, "/preview");
}

function IconPicker({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="grid grid-cols-5 gap-2">
      {Object.entries(aboutIconOptions).map(([key, option]) => {
        const Icon = option.icon;
        return (
          <button
            key={key}
            type="button"
            title={option.label}
            aria-label={option.label}
            onClick={() => onChange(key)}
            className={`grid place-items-center rounded-xl border p-3 text-lg transition ${value === key ? "border-cyan-400 bg-cyan-400/15 text-cyan-200" : "border-white/10 bg-[#0b1728] text-slate-400 hover:border-cyan-400/40"}`}
          >
            <Icon />
          </button>
        );
      })}
    </div>
  );
}

function ColorPicker({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {aboutColorOptions.map((option) => (
        <button
          key={option.value}
          type="button"
          title={option.label}
          aria-label={option.label}
          onClick={() => onChange(option.value)}
          className={`h-8 w-8 rounded-full border-2 ${option.borderClassName} ${option.backgroundClassName} ${value === option.value ? "ring-2 ring-white ring-offset-2 ring-offset-[#0b1728]" : "border-transparent"}`}
        />
      ))}
    </div>
  );
}

export default function DashboardProfilePage() {
  const [entries, setEntries] = useState<AboutEntry[]>(seedEntries);
  const [newItem, setNewItem] = useState<NewItem>(emptyItem);
  const [showNewItem, setShowNewItem] = useState(false);
  const [savingKey, setSavingKey] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [activeCategory, setActiveCategory] = useState("professional-info");

  useEffect(() => {
    async function loadEntries() {
      try {
        const response = await fetch("/api/dashboard/profile/about");
        const data = await response.json();
        if (response.ok && Array.isArray(data.entries))
          setEntries(data.entries);
      } catch {
        setMessage("MongoDB is unavailable. Showing CV seed content.");
      }
    }
    void loadEntries();
  }, []);

  const categoryGroups = useMemo(
    () =>
      aboutContent.map((category) => ({
        ...category,
        groups: category.groups.map((group) => ({
          ...group,
          items: entries
            .filter(
              (entry) =>
                entry.category === category.id && entry.group === group.id,
            )
            .sort((a, b) => (a.order ?? 0) - (b.order ?? 0)),
        })),
      })),
    [entries],
  );

  function updateEntry(key: string, field: keyof AboutEntry, value: string) {
    setEntries((current) =>
      current.map((entry) =>
        entry.key === key ? { ...entry, [field]: value } : entry,
      ),
    );
  }

  async function saveEntry(entry: AboutEntry) {
    setSavingKey(entry.key);
    const response = await fetch("/api/dashboard/profile/about", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(entry),
    });
    const data = await response.json();
    setMessage(response.ok ? `${entry.label} saved.` : data.message);
    setSavingKey(null);
  }

  async function createEntry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSavingKey("new");
    const response = await fetch("/api/dashboard/profile/about", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    });
    const data = await response.json();
    if (response.ok) {
      setEntries((current) => [...current, data.entry]);
      setNewItem(emptyItem);
      setShowNewItem(false);
      setMessage(`${data.entry.label} added.`);
    } else setMessage(data.message ?? "Unable to create About item.");
    setSavingKey(null);
  }

  async function deleteEntry(key: string) {
    if (!window.confirm("Delete this About item?")) return;
    const response = await fetch(
      `/api/dashboard/profile/about?key=${encodeURIComponent(key)}`,
      { method: "DELETE" },
    );
    if (response.ok) {
      setEntries((current) => current.filter((entry) => entry.key !== key));
      setMessage("About item deleted.");
    } else setMessage("Unable to delete About item.");
  }

  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">
              About CMS
            </p>
            <h1 className="mt-2 text-2xl font-semibold text-white">
              Edit About page content
            </h1>
          </div>
          <button
            type="button"
            onClick={() => setShowNewItem((open) => !open)}
            className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-4 py-3 text-sm font-medium text-slate-950"
          >
            <FiPlus />
            {showNewItem ? "Close item form" : "Add item"}
          </button>
        </div>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
          The three root categories stay fixed. Items can be created with
          controlled icons, colors, ordering, and certificate links.
        </p>
      </section>

      {showNewItem ? (
        <form
          onSubmit={createEntry}
          className="space-y-4 rounded-3xl border border-cyan-400/30 bg-cyan-400/5 p-6"
        >
          <h2 className="text-lg font-medium text-white">Create About item</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-2 text-sm text-slate-300">
              Category
              <select
                value={newItem.category}
                onChange={(event) =>
                  setNewItem((item) => ({
                    ...item,
                    category: event.target.value,
                    group:
                      aboutContent.find(
                        (category) => category.id === event.target.value,
                      )?.groups[0]?.id ?? "",
                  }))
                }
                className="w-full rounded-xl border border-white/10 bg-[#0b1728] px-3 py-3 text-white"
              >
                {aboutContent.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="space-y-2 text-sm text-slate-300">
              Group
              <select
                value={newItem.group}
                onChange={(event) =>
                  setNewItem((item) => ({ ...item, group: event.target.value }))
                }
                className="w-full rounded-xl border border-white/10 bg-[#0b1728] px-3 py-3 text-white"
              >
                {(
                  aboutContent.find(
                    (category) => category.id === newItem.category,
                  )?.groups ?? []
                ).map((group) => (
                  <option key={group.id} value={group.id}>
                    {group.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="space-y-2 text-sm text-slate-300">
              Item key
              <input
                required
                value={newItem.key}
                onChange={(event) =>
                  setNewItem((item) => ({
                    ...item,
                    key: event.target.value.toLowerCase().replace(/\s+/g, "-"),
                  }))
                }
                className="w-full rounded-xl border border-white/10 bg-[#0b1728] px-3 py-3 text-white"
              />
              <span className="block text-xs text-slate-500">
                Permanent unique ID for this item. Use lowercase words with
                hyphens, for example: `ai-data-science`.
              </span>
            </label>
            <label className="space-y-2 text-sm text-slate-300">
              Label
              <input
                required
                value={newItem.label}
                onChange={(event) =>
                  setNewItem((item) => ({ ...item, label: event.target.value }))
                }
                className="w-full rounded-xl border border-white/10 bg-[#0b1728] px-3 py-3 text-white"
              />
              <span className="block text-xs text-slate-500">
                The readable name visitors will see in the About sidebar.
              </span>
            </label>
          </div>
          <label className="block space-y-2 text-sm text-slate-300">
            Content
            <textarea
              required
              rows={5}
              value={newItem.content}
              onChange={(event) =>
                setNewItem((item) => ({ ...item, content: event.target.value }))
              }
              className="w-full rounded-xl border border-white/10 bg-[#0b1728] px-3 py-3 text-white"
            />
          </label>
          <div className="grid gap-4 md:grid-cols-3">
            <label className="space-y-2 text-sm text-slate-300">
              Icon
              <IconPicker
                value={newItem.iconKey}
                onChange={(value) =>
                  setNewItem((item) => ({ ...item, iconKey: value }))
                }
              />
            </label>
            <label className="space-y-2 text-sm text-slate-300">
              Color
              <ColorPicker
                value={newItem.color}
                onChange={(value) =>
                  setNewItem((item) => ({ ...item, color: value }))
                }
              />
            </label>
            <label className="space-y-2 text-sm text-slate-300">
              Certificate/resource URL
              <input
                value={newItem.resourceUrl}
                onChange={(event) =>
                  setNewItem((item) => ({
                    ...item,
                    resourceUrl: event.target.value,
                  }))
                }
                className="w-full rounded-xl border border-white/10 bg-[#0b1728] px-3 py-3 text-white"
              />
              <span className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  checked={newItem.showResource}
                  onChange={(event) =>
                    setNewItem((item) => ({
                      ...item,
                      showResource: event.target.checked,
                    }))
                  }
                />
                Show on public About page
              </span>
            </label>
          </div>
          <button
            disabled={savingKey === "new"}
            className="rounded-xl bg-cyan-400 px-5 py-3 text-sm font-medium text-slate-950 disabled:opacity-50"
          >
            {savingKey === "new" ? "Adding..." : "Add item"}
          </button>
        </form>
      ) : null}

      <div className="grid grid-cols-3 gap-2 rounded-2xl border border-white/10 bg-white/5 p-2">
        {categoryGroups.map((category) => (
          <button
            key={category.id}
            type="button"
            onClick={() => setActiveCategory(category.id)}
            className={`rounded-xl px-3 py-3 text-sm transition ${activeCategory === category.id ? "bg-cyan-400 text-slate-950" : "text-slate-300 hover:bg-white/10"}`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {categoryGroups
        .filter((category) => category.id === activeCategory)
        .map((category) => (
          <details
            key={category.id}
            open
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium text-white">
              <span>{category.label}</span>
              <FiChevronDown className="text-cyan-300" />
            </summary>
            <div className="mt-5 space-y-4 border-l border-white/10 pl-4">
              {category.groups.map((group) => (
                <details
                  key={group.id}
                  open
                  className="rounded-2xl border border-white/10 bg-[#0b1728] p-4"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-cyan-200">
                    <span>{group.label}</span>
                    <FiChevronDown />
                  </summary>
                  <div className="mt-4 space-y-4">
                    {group.items.map((entry) => {
                      const Icon =
                        aboutIconOptions[
                          entry.iconKey as keyof typeof aboutIconOptions
                        ]?.icon ?? aboutIconOptions.user.icon;
                      return (
                        <div
                          key={entry.key}
                          className="rounded-2xl border border-white/10 bg-white/5 p-4"
                        >
                          <div className="flex items-center justify-between gap-3">
                            <div className="flex items-center gap-2 text-sm font-medium text-white">
                              <Icon className={aboutColorClass(entry.color)} />
                              {entry.label}
                            </div>
                            <button
                              type="button"
                              onClick={() => void deleteEntry(entry.key)}
                              className="text-rose-300"
                              aria-label={`Delete ${entry.label}`}
                            >
                              <FiTrash2 />
                            </button>
                          </div>
                          <textarea
                            value={entry.content}
                            onChange={(event) =>
                              updateEntry(
                                entry.key,
                                "content",
                                event.target.value,
                              )
                            }
                            rows={5}
                            className="mt-3 w-full resize-y rounded-xl border border-white/10 bg-[#0b1728] px-3 py-3 text-sm leading-6 text-slate-300 outline-none focus:border-cyan-400/50"
                          />
                          <div className="mt-3 space-y-3">
                            <div>
                              <p className="mb-2 text-xs text-slate-500">
                                Icon
                              </p>
                              <IconPicker
                                value={entry.iconKey}
                                onChange={(value) =>
                                  updateEntry(entry.key, "iconKey", value)
                                }
                              />
                            </div>
                            <div>
                              <p className="mb-2 text-xs text-slate-500">
                                Color
                              </p>
                              <ColorPicker
                                value={entry.color}
                                onChange={(value) =>
                                  updateEntry(entry.key, "color", value)
                                }
                              />
                            </div>
                            <input
                              value={entry.resourceUrl ?? ""}
                              onChange={(event) =>
                                updateEntry(
                                  entry.key,
                                  "resourceUrl",
                                  event.target.value,
                                )
                              }
                              placeholder="Certificate/resource URL"
                              className="rounded-xl border border-white/10 bg-[#0b1728] px-3 py-2 text-sm text-white"
                            />
                            {entry.resourceUrl ? (
                              <label className="flex items-center gap-2 text-sm text-slate-300">
                                <input
                                  type="checkbox"
                                  checked={entry.showResource ?? false}
                                  onChange={(event) =>
                                    setEntries((current) =>
                                      current.map((item) =>
                                        item.key === entry.key
                                          ? {
                                              ...item,
                                              showResource:
                                                event.target.checked,
                                            }
                                          : item,
                                      ),
                                    )
                                  }
                                />
                                Show this resource on the public About page
                              </label>
                            ) : null}
                          </div>
                          <div className="mt-3 flex flex-wrap items-center gap-3">
                            <button
                              type="button"
                              onClick={() => void saveEntry(entry)}
                              disabled={savingKey === entry.key}
                              className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-4 py-2 text-sm font-medium text-slate-950 disabled:opacity-50"
                            >
                              <FiSave />
                              {savingKey === entry.key
                                ? "Saving..."
                                : "Save item"}
                            </button>
                            {entry.resourceUrl ? (
                              <a
                                href={entry.resourceUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 text-sm text-cyan-200"
                              >
                                <FiExternalLink />
                                Open resource
                              </a>
                            ) : null}
                            {entry.showResource &&
                            entry.resourceUrl?.includes("drive.google.com") ? (
                              <details className="w-full">
                                <summary className="cursor-pointer text-sm text-slate-400">
                                  Preview certificate
                                </summary>
                                <iframe
                                  title={`${entry.label} preview`}
                                  src={previewUrl(entry.resourceUrl)}
                                  className="mt-3 h-96 w-full rounded-xl border border-white/10"
                                />
                              </details>
                            ) : null}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </details>
              ))}
            </div>
          </details>
        ))}
      {message ? <p className="text-sm text-cyan-200">{message}</p> : null}
    </div>
  );
}
