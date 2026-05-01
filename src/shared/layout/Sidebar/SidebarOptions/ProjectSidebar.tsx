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

  // const handleSkillToggle = (skill: string) => {
  //   dispatch(toggleSkill(skill));

  //   if (selectedSkills.includes(skill)) {
  //     dispatch(removeTab(skill));
  //   } else {
  //     dispatch(
  //       addTab({
  //         id: skill,
  //         title: skill,
  //       })
  //     );
  //   }
  // };

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
            {/* React.js Skill */}
            <SkillCheckbox
              id="React.js"
              skillName="React.js"
              icon={<FaReact />}
              checked={selectedSkills.includes("React.js")}
              onChange={() => handleSkillToggle("React.js")}
              iconColor="text-blue-500"
              hoverColor="hover:text-blue-500"
            />

            {/* Redux Skill */}
            <SkillCheckbox
              id="Redux"
              skillName="Redux"
              icon={<SiRedux />}
              checked={selectedSkills.includes("Redux")}
              onChange={() => handleSkillToggle("Redux")}
              iconColor="text-purple-500"
              hoverColor="hover:text-purple-500"
            />

            {/* Next.js Skill */}
            <SkillCheckbox
              id="Next.js"
              skillName="Next.js"
              icon={<SiNextdotjs />}
              checked={selectedSkills.includes("Next.js")}
              onChange={() => handleSkillToggle("Next.js")}
              iconColor="text-gray"
              hoverColor="hover:text-gray-700"
            />

            {/* Node.js Skill */}
            <SkillCheckbox
              id="Node.js"
              skillName="Node.js"
              icon={<FaNodeJs />}
              checked={selectedSkills.includes("Node.js")}
              onChange={() => handleSkillToggle("Node.js")}
              iconColor="text-green-600"
              hoverColor="hover:text-green-600"
            />

            {/* Express.js Skill */}
            <SkillCheckbox
              id="Express.js"
              skillName="Express.js"
              icon={<SiExpress />}
              checked={selectedSkills.includes("Express.js")}
              onChange={() => handleSkillToggle("Express.js")}
              iconColor="text-gray-700"
              hoverColor="hover:text-gray-700"
            />

            {/* MongoDB Skill */}
            <SkillCheckbox
              id="MongoDB"
              skillName="MongoDB"
              icon={<SiMongodb />}
              checked={selectedSkills.includes("MongoDB")}
              onChange={() => handleSkillToggle("MongoDB")}
              iconColor="text-green-500"
              hoverColor="hover:text-green-500"
            />

            {/* Firebase Skill */}
            <SkillCheckbox
              id="Firebase"
              skillName="Firebase"
              icon={<SiFirebase />}
              checked={selectedSkills.includes("Firebase")}
              onChange={() => handleSkillToggle("Firebase")}
              iconColor="text-yellow-500"
              hoverColor="hover:text-yellow-500"
            />

            {/* TypeScript Skill */}
            <SkillCheckbox
              id="TypeScript"
              skillName="TypeScript"
              icon={<SiTypescript />}
              checked={selectedSkills.includes("TypeScript")}
              onChange={() => handleSkillToggle("TypeScript")}
              iconColor="text-blue-600"
              hoverColor="hover:text-blue-600"
            />

            {/* JavaScript Skill */}
            <SkillCheckbox
              id="JavaScript"
              skillName="JavaScript"
              icon={<SiJavascript />}
              checked={selectedSkills.includes("JavaScript")}
              onChange={() => handleSkillToggle("JavaScript")}
              iconColor="text-yellow-400"
              hoverColor="hover:text-yellow-400"
            />

            {/* TailwindCSS Skill */}
            <SkillCheckbox
              id="TailwindCSS"
              skillName="TailwindCSS"
              icon={<SiTailwindcss />}
              checked={selectedSkills.includes("TailwindCSS")}
              onChange={() => handleSkillToggle("TailwindCSS")}
              iconColor="text-blue-400"
              hoverColor="hover:text-blue-400"
            />

            {/* HTML Skill */}
            <SkillCheckbox
              id="HTML"
              skillName="HTML"
              icon={<FaHtml5 />}
              checked={selectedSkills.includes("HTML")}
              onChange={() => handleSkillToggle("HTML")}
              iconColor="text-orange-500"
              hoverColor="hover:text-orange-500"
            />

            {/* CSS Skill */}
            <SkillCheckbox
              id="CSS"
              skillName="CSS"
              icon={<FaCss3Alt />}
              checked={selectedSkills.includes("CSS")}
              onChange={() => handleSkillToggle("CSS")}
              iconColor="text-blue-300"
              hoverColor="hover:text-blue-300"
            />
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectSidebar;
