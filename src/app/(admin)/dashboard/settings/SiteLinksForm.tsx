"use client";

import { FormEvent, useEffect, useState } from "react";
import { FiSave } from "react-icons/fi";

const fields = [
  ["github", "GitHub URL"],
  ["linkedin", "LinkedIn URL"],
  ["facebook", "Facebook URL"],
  ["youtube", "YouTube URL"],
  ["twitter", "X/Twitter URL"],
  ["instagram", "Instagram URL"],
  ["resume", "Resume URL"],
  ["cv", "CV URL"],
  ["email", "Contact email"],
  ["phone", "Contact phone"],
] as const;

export default function SiteLinksForm() {
  const [values, setValues] = useState<Record<string, string>>({});
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    void fetch("/api/dashboard/settings/site-links")
      .then(async (response) => {
        const data = await response.json();
        if (!response.ok) throw new Error(data.message);
        setValues(data);
      })
      .catch((error: Error) => setMessage(error.message));
  }, []);

  async function save(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setMessage("");
    try {
      const response = await fetch("/api/dashboard/settings/site-links", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);
      setValues(data);
      setMessage("Site links updated successfully.");
    } catch (error) {
      setMessage(
        error instanceof Error ? error.message : "Unable to save settings.",
      );
    } finally {
      setSaving(false);
    }
  }

  return (
    <form
      onSubmit={save}
      className="rounded-3xl border border-white/10 bg-white/5 p-6"
    >
      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">
          Portfolio links
        </p>
        <h2 className="mt-2 text-xl font-semibold text-white">
          Social and contact settings
        </h2>
        <p className="mt-2 text-sm text-slate-400">
          Update these values here instead of changing source code.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {fields.map(([key, label]) => (
          <label key={key} className="space-y-2 text-sm text-slate-300">
            <span>{label}</span>
            <input
              type={key === "email" ? "email" : "text"}
              value={values[key] ?? ""}
              onChange={(event) =>
                setValues((current) => ({
                  ...current,
                  [key]: event.target.value,
                }))
              }
              required
              className="w-full rounded-xl border border-white/10 bg-[#0b1728] px-4 py-3 text-white outline-none transition focus:border-cyan-400/60"
            />
          </label>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-4">
        <button
          type="submit"
          disabled={saving}
          className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-4 py-3 text-sm font-medium text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <FiSave />
          {saving ? "Saving..." : "Save changes"}
        </button>
        {message && <p className="text-sm text-slate-300">{message}</p>}
      </div>
    </form>
  );
}
