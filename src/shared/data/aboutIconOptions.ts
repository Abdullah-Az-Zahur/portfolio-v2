import {
  FaBookOpen,
  FaBriefcase,
  FaCertificate,
  FaCode,
  FaGamepad,
  FaGlobeAsia,
  FaGraduationCap,
  FaLanguage,
  FaLaptopCode,
  FaLeaf,
  FaLink,
  FaPlane,
  FaRunning,
  FaUser,
} from "react-icons/fa";
import { FaPersonHiking } from "react-icons/fa6";

export const aboutIconOptions = {
  briefcase: { label: "Experience", icon: FaBriefcase },
  code: { label: "Code", icon: FaCode },
  laptop: { label: "Technical", icon: FaLaptopCode },
  certificate: { label: "Certificate", icon: FaCertificate },
  user: { label: "Personal", icon: FaUser },
  graduation: { label: "Education", icon: FaGraduationCap },
  research: { label: "Research", icon: FaBookOpen },
  "book-open": { label: "Books", icon: FaBookOpen },
  language: { label: "Language", icon: FaLanguage },
  globe: { label: "Technology", icon: FaGlobeAsia },
  running: { label: "Sports", icon: FaRunning },
  gamepad: { label: "Gaming", icon: FaGamepad },
  plane: { label: "Travel", icon: FaPlane },
  hiking: { label: "Outdoor", icon: FaPersonHiking },
  leaf: { label: "Wellness", icon: FaLeaf },
  link: { label: "Link", icon: FaLink },
} as const;

export type AboutIconKey = keyof typeof aboutIconOptions;

export const aboutColorOptions = [
  {
    value: "blue",
    label: "Blue",
    className: "text-blue-500",
    borderClassName: "border-blue-500",
    backgroundClassName: "bg-blue-500",
  },
  {
    value: "green",
    label: "Green",
    className: "text-green-500",
    borderClassName: "border-green-500",
    backgroundClassName: "bg-green-500",
  },
  {
    value: "purple",
    label: "Purple",
    className: "text-purple-500",
    borderClassName: "border-purple-500",
    backgroundClassName: "bg-purple-500",
  },
  {
    value: "cyan",
    label: "Cyan",
    className: "text-cyan-500",
    borderClassName: "border-cyan-500",
    backgroundClassName: "bg-cyan-500",
  },
  {
    value: "orange",
    label: "Orange",
    className: "text-orange-500",
    borderClassName: "border-orange-500",
    backgroundClassName: "bg-orange-500",
  },
  {
    value: "amber",
    label: "Amber",
    className: "text-amber-500",
    borderClassName: "border-amber-500",
    backgroundClassName: "bg-amber-500",
  },
  {
    value: "rose",
    label: "Rose",
    className: "text-rose-500",
    borderClassName: "border-rose-500",
    backgroundClassName: "bg-rose-500",
  },
  {
    value: "emerald",
    label: "Emerald",
    className: "text-emerald-500",
    borderClassName: "border-emerald-500",
    backgroundClassName: "bg-emerald-500",
  },
] as const;

export type AboutColorKey = (typeof aboutColorOptions)[number]["value"];

export function aboutColorClass(color: string) {
  return (
    aboutColorOptions.find((option) => option.value === color)?.className ??
    "text-blue-500"
  );
}
