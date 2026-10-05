"use client";

import { useEffect, useState } from "react";
import { FiChevronDown, FiSave } from "react-icons/fi";
import { aboutContent } from "@/shared/data/aboutContent";

type ContentMap = Record<string, string>;

function initialContent(): ContentMap {
  return Object.fromEntries(
    aboutContent.flatMap((category) =>
      category.groups.flatMap((group) =>
        group.items.map((item) => [item.id, item.content]),
      ),
    ),
  );
}

export default function DashboardProfilePage() {
  const [content, setContent] = useState<ContentMap>(initialContent);
  const [savingKey, setSavingKey] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function loadContent() {
      try {
        const response = await fetch("/api/dashboard/profile/about");
        const data = await response.json();
        if (response.ok && Array.isArray(data.entries)) {
          setContent((current) => ({
            ...current,
            ...Object.fromEntries(
              data.entries.map((entry: { key: string; content: string }) => [
                entry.key,
                entry.content,
              ]),
            ),
          }));
        }
      } catch {
        setMessage(
          "MongoDB is unavailable. Showing the existing About content.",
        );
      }
    }

    void loadContent();
  }, []);

  async function saveContent(key: string) {
    setSavingKey(key);
    setMessage("");
    try {
      const response = await fetch("/api/dashboard/profile/about", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key, content: content[key] }),
      });
      const data = await response.json();
      setMessage(response.ok ? `${data.entry.label} saved.` : data.message);
    } catch {
      setMessage("Unable to save About content.");
    } finally {
      setSavingKey(null);
    }
  }

  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">
          About CMS
        </p>
        <h1 className="mt-2 text-2xl font-semibold text-white">
          Edit About page content
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
          This follows the public About page hierarchy exactly: professional
          info, personal info, and hobbies with their nested groups and items.
        </p>
      </section>

      {aboutContent.map((category) => (
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
                  {group.items.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <label
                        htmlFor={item.id}
                        className="text-sm font-medium text-white"
                      >
                        {item.label}
                      </label>
                      <textarea
                        id={item.id}
                        value={content[item.id] ?? ""}
                        onChange={(event) =>
                          setContent((current) => ({
                            ...current,
                            [item.id]: event.target.value,
                          }))
                        }
                        rows={5}
                        className="mt-3 w-full resize-y rounded-xl border border-white/10 bg-[#0b1728] px-3 py-3 text-sm leading-6 text-slate-300 outline-none focus:border-cyan-400/50"
                      />
                      <button
                        type="button"
                        onClick={() => saveContent(item.id)}
                        disabled={savingKey === item.id}
                        className="mt-3 inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-cyan-300 disabled:opacity-50"
                      >
                        <FiSave className="h-4 w-4" />
                        {savingKey === item.id ? "Saving..." : "Save item"}
                      </button>
                    </div>
                  ))}
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
