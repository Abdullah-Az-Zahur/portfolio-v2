export type ProjectInput = {
  name: string;
  description: string;
  liveLink?: string;
  repoLink?: string;
  image?: string;
  skills?: string[];
  order?: number;
};

export function parseProjectInput(value: unknown): ProjectInput {
  if (!value || typeof value !== "object") {
    throw new Error("Project payload must be an object.");
  }

  const payload = value as Record<string, unknown>;
  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const description =
    typeof payload.description === "string" ? payload.description.trim() : "";

  if (!name || !description) {
    throw new Error("Project name and description are required.");
  }

  const skills = Array.isArray(payload.skills)
    ? payload.skills.filter(
        (skill): skill is string => typeof skill === "string",
      )
    : [];

  return {
    name,
    description,
    liveLink: typeof payload.liveLink === "string" ? payload.liveLink : "",
    repoLink: typeof payload.repoLink === "string" ? payload.repoLink : "",
    image: typeof payload.image === "string" ? payload.image : "",
    skills,
    order: typeof payload.order === "number" ? payload.order : 0,
  };
}
