import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export const projectSkills = [
  { id: "React.js", label: "React.js", icon: FaReact, color: "text-blue-500" },
  { id: "Redux", label: "Redux", icon: SiRedux, color: "text-purple-500" },
  {
    id: "Next.js",
    label: "Next.js",
    icon: SiNextdotjs,
    color: "text-gray-700",
  },
  { id: "Node.js", label: "Node.js", icon: FaNodeJs, color: "text-green-600" },
  {
    id: "Express.js",
    label: "Express.js",
    icon: SiExpress,
    color: "text-gray-700",
  },
  { id: "MongoDB", label: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  {
    id: "Firebase",
    label: "Firebase",
    icon: SiFirebase,
    color: "text-yellow-500",
  },
  {
    id: "TypeScript",
    label: "TypeScript",
    icon: SiTypescript,
    color: "text-blue-600",
  },
  {
    id: "JavaScript",
    label: "JavaScript",
    icon: SiJavascript,
    color: "text-yellow-400",
  },
  {
    id: "TailwindCSS",
    label: "TailwindCSS",
    icon: SiTailwindcss,
    color: "text-blue-400",
  },
  { id: "HTML", label: "HTML", icon: FaHtml5, color: "text-orange-500" },
  { id: "CSS", label: "CSS", icon: FaCss3Alt, color: "text-blue-300" },
] as const;
