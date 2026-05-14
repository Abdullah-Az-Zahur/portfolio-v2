"use client";
import { useAppSelector } from "@/store/hooks";
import CommentText from "@/shared/ui/CommentText/CommentText";
import { usePortfolioData } from "@/shared/hooks/usePortfolioData";
import BioInfo from "./PersonalInfo/Bio/BioInfo";

const formatEducation = (entry?: {
  degree: string;
  institution: string;
  date: string;
  cgpa: string;
  description: string;
}) =>
  entry
    ? `${entry.degree}
${entry.institution} | ${entry.date}
${entry.cgpa ? `CGPA: ${entry.cgpa}` : ""}
${entry.description}`
    : "";

const formatExperience = (entry?: {
  company: string;
  position: string;
  duration: string;
  description: string;
}) =>
  entry
    ? `${entry.company} | ${entry.position}
${entry.duration}
${entry.description}`
    : "";

const AboutClient = () => {
  const { activeTab } = useAppSelector((state) => state.tabs);
  const data = usePortfolioData();

  const education = (data?.education || [])
    .slice()
    .sort((a, b) => a.order - b.order);
  const experience = (data?.experience || [])
    .slice()
    .sort((a, b) => a.order - b.order);
  const hobbies = (data?.hobbies || [])
    .slice()
    .sort((a, b) => a.order - b.order);
  const certifications = education.find((item) =>
    item.degree.toLowerCase().includes("course"),
  );

  const tabTextMap: Record<string, string | undefined> = {
    "bio-item": data?.portfolio.bio,
    "interest-item":
      "Outside code, I stay curious in ways that sharpen my work: team sports (football, cricket), travel that widens perspective, and hands-on experiments with new web and AI tools.",
    "high-school": formatEducation(
      education.find((item) => item.degree.includes("Secondary School")),
    ),
    college: formatEducation(
      education.find((item) => item.degree.includes("Higher Secondary")),
    ),
    university: formatEducation(
      education.find((item) => item.degree.includes("Bachelor of Science")),
    ),
    "msc-ict": formatEducation(
      education.find((item) => item.degree.includes("M.Sc.")),
    ),
    "bachelor-thesis": formatEducation(
      education.find((item) => item.degree.includes("Thesis")),
    ),
    "technical-skills":
      data?.skills.length && data?.skills.length > 0
        ? `Technical Skills
${data.skills.join(", ")}`
        : undefined,
    certifications: certifications
      ? `${certifications.degree}
${certifications.institution}
${certifications.description}`
      : undefined,
    "qwik-it": formatExperience(
      experience.find((item) => item.company.toLowerCase().includes("qwik")),
    ),
    "encoder-it": formatExperience(
      experience.find((item) => item.company.toLowerCase().includes("encoder")),
    ),
    books: hobbies.find((item) => item.title.toLowerCase() === "books")
      ?.description,
    music: hobbies.find((item) => item.title.toLowerCase() === "music")
      ?.description,
    games: hobbies.find((item) => item.title.toLowerCase() === "games")
      ?.description,
    hiking: hobbies.find((item) => item.title.toLowerCase() === "hiking")
      ?.description,
    "nature-walks": hobbies.find((item) =>
      item.title.toLowerCase().includes("nature"),
    )?.description,
  };

  const text = activeTab ? tabTextMap[activeTab] : data?.portfolio.bio;

  if (!text) {
    return <BioInfo />;
  }

  return (
    <div>
      <CommentText text={text} />
    </div>
  );
};

export default AboutClient;
