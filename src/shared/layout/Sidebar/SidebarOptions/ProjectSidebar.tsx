"use client";

import { addTab, removeTab } from "@/store/features/tabs/tabsSlice";
import { toggleSkill } from "@/store/features/projects/projectsSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import React, { useEffect, useState } from "react";
import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
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
import SkillCheckbox from "../SkillCheckbox/SkillCheckbox";
import { dropdownVariants } from "@/shared/utils/animationVariants";

const projectSkills = [
  {
    id: "React.js",
    skillName: "React.js",
    icon: FaReact,
    iconColor: "text-blue-500",
    hoverColor: "hover:text-blue-500",
  },
  {
    id: "Redux",
    skillName: "Redux",
    icon: SiRedux,
    iconColor: "text-purple-500",
    hoverColor: "hover:text-purple-500",
  },
  {
    id: "Next.js",
    skillName: "Next.js",
    icon: SiNextdotjs,
    iconColor: "text-gray",
    hoverColor: "hover:text-gray-700",
  },
  {
    id: "Node.js",
    skillName: "Node.js",
    icon: FaNodeJs,
    iconColor: "text-green-600",
    hoverColor: "hover:text-green-600",
  },
  {
    id: "Express.js",
    skillName: "Express.js",
    icon: SiExpress,
    iconColor: "text-gray-700",
    hoverColor: "hover:text-gray-700",
  },
  {
    id: "MongoDB",
    skillName: "MongoDB",
    icon: SiMongodb,
    iconColor: "text-green-500",
    hoverColor: "hover:text-green-500",
  },
  {
    id: "Firebase",
    skillName: "Firebase",
    icon: SiFirebase,
    iconColor: "text-yellow-500",
    hoverColor: "hover:text-yellow-500",
  },
  {
    id: "TypeScript",
    skillName: "TypeScript",
    icon: SiTypescript,
    iconColor: "text-blue-600",
    hoverColor: "hover:text-blue-600",
  },
  {
    id: "JavaScript",
    skillName: "JavaScript",
    icon: SiJavascript,
    iconColor: "text-yellow-400",
    hoverColor: "hover:text-yellow-400",
  },
  {
    id: "TailwindCSS",
    skillName: "TailwindCSS",
    icon: SiTailwindcss,
    iconColor: "text-blue-400",
    hoverColor: "hover:text-blue-400",
  },
  {
    id: "HTML",
    skillName: "HTML",
    icon: FaHtml5,
    iconColor: "text-orange-500",
    hoverColor: "hover:text-orange-500",
  },
  {
    id: "CSS",
    skillName: "CSS",
    icon: FaCss3Alt,
    iconColor: "text-blue-300",
    hoverColor: "hover:text-blue-300",
  },
] as const;

const ProjectSidebar = () => {
  const dispatch = useAppDispatch();
  const { selectedSkills } = useAppSelector((state) => state.projects);
  const { tabs } = useAppSelector((state) => state.tabs);
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  const skillTabId = (skill: string) => `project-skill:${skill}`;

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleSkillToggle = (skill: string) => {
    const isCurrentlySelected = selectedSkills.includes(skill);
    dispatch(toggleSkill(skill));

    if (isCurrentlySelected) {
      dispatch(removeTab(skillTabId(skill)));
      return;
    }

    dispatch(
      addTab({
        id: skillTabId(skill),
        title: skill,
      }),
    );
  };

  useEffect(() => {
    const selectedSkillTabIds = new Set(
      selectedSkills.map((skill) => skillTabId(skill)),
    );
    const existingSkillTabIds = new Set(
      tabs
        .filter((tab) => tab.id.startsWith("project-skill:"))
        .map((tab) => tab.id),
    );

    selectedSkills.forEach((skill) => {
      const tabId = skillTabId(skill);
      if (!existingSkillTabIds.has(tabId)) {
        dispatch(
          addTab({
            id: tabId,
            title: skill,
          }),
        );
      }
    });

    existingSkillTabIds.forEach((tabId) => {
      if (!selectedSkillTabIds.has(tabId)) {
        dispatch(removeTab(tabId));
      }
    });
  }, [dispatch, selectedSkills, tabs]);

  return (
    <>
      <motion.div
        className="flex items-center gap-2 cursor-pointer text-white hover:text-blue-500 border-b border-gray-500 py-2"
        onClick={() => toggleDropdown()}
        whileHover={{ x: 3 }}
        whileTap={{ scale: 0.98 }}
      >
        {isDropdownOpen ? (
          <IoMdArrowDropdown className="text-white" />
        ) : (
          <IoMdArrowDropright className="text-white" />
        )}
        <span>Projects</span>
      </motion.div>
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.ul
            className="ml-3 mt-2 space-y-1 overflow-hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={dropdownVariants}
          >
            {projectSkills.map((skill) => {
              const SkillIcon = skill.icon;

              return (
                <SkillCheckbox
                  key={skill.id}
                  id={skill.id}
                  skillName={skill.skillName}
                  icon={<SkillIcon />}
                  checked={selectedSkills.includes(skill.id)}
                  onChange={() => handleSkillToggle(skill.id)}
                  iconColor={skill.iconColor}
                  hoverColor={skill.hoverColor}
                />
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectSidebar;
