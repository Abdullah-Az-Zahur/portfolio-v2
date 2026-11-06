import {
  FaBrain,
  FaChartLine,
  FaCode,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiNextdotjs,
  SiNumpy,
  SiPandas,
  SiPostman,
  SiPytorch,
  SiRedux,
  SiScikitlearn,
  SiTailwindcss,
  SiTypescript,
  SiNetlify,
} from "react-icons/si";
import type { IconType } from "react-icons";

type ProjectSkillDefinition = {
  label: string;
  aliases: string[];
  icon: IconType;
  color: string;
};

export const projectSkillDefinitions: ProjectSkillDefinition[] = [
  {
    label: "React.js",
    aliases: ["React.js", "React"],
    icon: FaReact,
    color: "text-blue-500",
  },
  {
    label: "Redux",
    aliases: ["Redux", "ReduxToolkit", "Redux Toolkit"],
    icon: SiRedux,
    color: "text-purple-500",
  },
  {
    label: "Next.js",
    aliases: ["Next.js", "Nextjs", "Next"],
    icon: SiNextdotjs,
    color: "text-gray-700",
  },
  {
    label: "Node.js",
    aliases: ["Node.js", "Nodejs", "Node"],
    icon: FaNodeJs,
    color: "text-green-600",
  },
  {
    label: "Express.js",
    aliases: ["Express.js", "Expressjs", "Express"],
    icon: SiExpress,
    color: "text-gray-700",
  },
  {
    label: "MongoDB",
    aliases: ["MongoDB", "Mongo"],
    icon: SiMongodb,
    color: "text-green-500",
  },
  {
    label: "Firebase",
    aliases: ["Firebase"],
    icon: SiFirebase,
    color: "text-yellow-500",
  },
  {
    label: "TypeScript",
    aliases: ["TypeScript", "Typescript"],
    icon: SiTypescript,
    color: "text-blue-600",
  },
  {
    label: "JavaScript",
    aliases: ["JavaScript", "Javascript"],
    icon: SiJavascript,
    color: "text-yellow-400",
  },
  {
    label: "TailwindCSS",
    aliases: ["TailwindCSS", "Tailwind CSS", "Tailwind"],
    icon: SiTailwindcss,
    color: "text-blue-400",
  },
  {
    label: "HTML",
    aliases: ["HTML", "HTML5"],
    icon: FaHtml5,
    color: "text-orange-500",
  },
  {
    label: "CSS",
    aliases: ["CSS", "CSS3"],
    icon: FaCss3Alt,
    color: "text-blue-300",
  },
  {
    label: "Python",
    aliases: ["Python"],
    icon: FaPython,
    color: "text-yellow-400",
  },
  {
    label: "PHP",
    aliases: ["PHP"],
    icon: FaPhp,
    color: "text-indigo-400",
  },
  {
    label: "Machine Learning",
    aliases: ["Machine Learning", "ML"],
    icon: FaBrain,
    color: "text-pink-400",
  },
  {
    label: "Deep Learning",
    aliases: ["Deep Learning", "DL"],
    icon: FaBrain,
    color: "text-rose-400",
  },
  {
    label: "CNN",
    aliases: ["CNN", "Convolutional Neural Network"],
    icon: FaBrain,
    color: "text-fuchsia-400",
  },
  {
    label: "Neural Networks",
    aliases: ["Neural Networks", "Neural Network"],
    icon: FaBrain,
    color: "text-purple-400",
  },
  {
    label: "PyTorch",
    aliases: ["PyTorch"],
    icon: SiPytorch,
    color: "text-orange-500",
  },
  {
    label: "Scikit-Learn",
    aliases: ["Scikit-Learn", "ScikitLearn", "sklearn"],
    icon: SiScikitlearn,
    color: "text-orange-400",
  },
  {
    label: "Pandas",
    aliases: ["Pandas"],
    icon: SiPandas,
    color: "text-indigo-400",
  },
  {
    label: "NumPy",
    aliases: ["NumPy", "Numpy"],
    icon: SiNumpy,
    color: "text-blue-400",
  },
  {
    label: "Matplotlib",
    aliases: ["Matplotlib"],
    icon: FaChartLine,
    color: "text-cyan-400",
  },
  {
    label: "REST APIs",
    aliases: ["REST APIs", "REST API", "REST"],
    icon: FaCode,
    color: "text-green-400",
  },
  {
    label: "React Hook Form",
    aliases: ["React Hook Form", "ReactHookForm"],
    icon: FaReact,
    color: "text-red-400",
  },
  {
    label: "Git",
    aliases: ["Git"],
    icon: FaGitAlt,
    color: "text-orange-600",
  },
  {
    label: "GitHub",
    aliases: ["GitHub", "Github"],
    icon: FaGithub,
    color: "text-gray-300",
  },
  {
    label: "Postman",
    aliases: ["Postman"],
    icon: SiPostman,
    color: "text-orange-500",
  },
  {
    label: "Netlify",
    aliases: ["Netlify"],
    icon: SiNetlify,
    color: "text-cyan-400",
  },
  {
    label: "JWT",
    aliases: ["JWT", "JSON Web Token", "JSON Web Tokens"],
    icon: SiJsonwebtokens,
    color: "text-pink-500",
  },
];

const normalizeSkill = (skill: string) =>
  skill.toLowerCase().replace(/[^a-z0-9]/g, "");

export function getProjectSkillOptions(availableSkills: string[]) {
  return projectSkillDefinitions.map((definition) => {
    const value = availableSkills.find((skill) =>
      definition.aliases.some(
        (alias) => normalizeSkill(alias) === normalizeSkill(skill),
      ),
    );

    return { ...definition, value: value ?? definition.label };
  });
}

export function getAvailableProjectSkillOptions(availableSkills: string[]) {
  return projectSkillDefinitions.flatMap((definition) => {
    const value = availableSkills.find((skill) =>
      definition.aliases.some(
        (alias) => normalizeSkill(alias) === normalizeSkill(skill),
      ),
    );

    return value ? [{ ...definition, value }] : [];
  });
}

export function projectHasSkill(
  projectSkills: string[],
  selectedSkill: string,
) {
  const definition = projectSkillDefinitions.find(
    (item) => item.label === selectedSkill,
  );
  return projectSkills.some((skill) =>
    (definition?.aliases ?? [selectedSkill]).some(
      (alias) => normalizeSkill(alias) === normalizeSkill(skill),
    ),
  );
}
