'use client";';

import { toggleSkill } from "@/redux/features/projects/projectsSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React, { useState } from "react";
import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import {
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import SkillCheckbox from "../SkillCheckbox/SkillCheckbox";

const ProjectSidebar = () => {
  const dispatch = useAppDispatch();
  const { selectedSkills } = useAppSelector((state) => state.projects);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleSkillToggle = (skill: string) => {
    dispatch(toggleSkill(skill));
  };

  return (
    <>
      <div
        className="flex items-center gap-2 cursor-pointer text-white hover:text-blue-500 border-b border-gray-500 py-2"
        onClick={() => toggleDropdown()}
      >
        {isDropdownOpen ? (
          <IoMdArrowDropdown className="text-white" />
        ) : (
          <IoMdArrowDropright className="text-white" />
        )}
        <span>Projects</span>
      </div>
      {isDropdownOpen && (
        <ul className="ml-4 mt-2 space-y-1">
          {/* React.js Skill */}
          <SkillCheckbox
            id="React.js"
            skillName="React.js"
            icon={<FaReact />}
            checked={selectedSkills.includes("React.js")}
            onChange={() => handleSkillToggle("React.js")}
            iconColor="text-blue-500"
            hoverColor="text-blue-500"
          />

          {/* Next.js Skill */}
          <SkillCheckbox
            id="Next.js"
            skillName="Next.js"
            icon={<SiNextdotjs />}
            checked={selectedSkills.includes("Next.js")}
            onChange={() => handleSkillToggle("Next.js")}
            iconColor="text-black"
            hoverColor="text-black"
          />

          {/* Node.js Skill */}
          <SkillCheckbox
            id="Node.js"
            skillName="Node.js"
            icon={<FaNodeJs />}
            checked={selectedSkills.includes("Node.js")}
            onChange={() => handleSkillToggle("Node.js")}
            iconColor="text-green-600"
            hoverColor="text-green-600"
          />

          {/* Express.js Skill */}
          <SkillCheckbox
            id="Express.js"
            skillName="Express.js"
            icon={<SiExpress />}
            checked={selectedSkills.includes("Express.js")}
            onChange={() => handleSkillToggle("Express.js")}
            iconColor="text-gray-700"
            hoverColor="text-gray-700"
          />

          {/* MongoDB Skill */}
          <SkillCheckbox
            id="MongoDB"
            skillName="MongoDB"
            icon={<SiMongodb />}
            checked={selectedSkills.includes("MongoDB")}
            onChange={() => handleSkillToggle("MongoDB")}
            iconColor="text-green-500"
            hoverColor="text-green-500"
          />

          {/* Firebase Skill */}
          <SkillCheckbox
            id="Firebase"
            skillName="Firebase"
            icon={<SiFirebase />}
            checked={selectedSkills.includes("Firebase")}
            onChange={() => handleSkillToggle("Firebase")}
            iconColor="text-yellow-500"
            hoverColor="text-yellow-500"
          />

          {/* TypeScript Skill */}
          <SkillCheckbox
            id="TypeScript"
            skillName="TypeScript"
            icon={<SiTypescript />}
            checked={selectedSkills.includes("TypeScript")}
            onChange={() => handleSkillToggle("TypeScript")}
            iconColor="text-blue-600"
            hoverColor="text-blue-600"
          />

          {/* JavaScript Skill */}
          <SkillCheckbox
            id="JavaScript"
            skillName="JavaScript"
            icon={<SiJavascript />}
            checked={selectedSkills.includes("JavaScript")}
            onChange={() => handleSkillToggle("JavaScript")}
            iconColor="text-yellow-400"
            hoverColor="text-yellow-400"
          />

          {/* TailwindCSS Skill */}
          <SkillCheckbox
            id="TailwindCSS"
            skillName="TailwindCSS"
            icon={<SiTailwindcss />}
            checked={selectedSkills.includes("TailwindCSS")}
            onChange={() => handleSkillToggle("TailwindCSS")}
            iconColor="text-blue-400"
            hoverColor="text-blue-400"
          />

          {/* HTML Skill */}
          <SkillCheckbox
            id="HTML"
            skillName="HTML"
            icon={<FaHtml5 />}
            checked={selectedSkills.includes("HTML")}
            onChange={() => handleSkillToggle("HTML")}
            iconColor="text-orange-500"
            hoverColor="text-orange-500"
          />

          {/* CSS Skill */}
          <SkillCheckbox
            id="CSS"
            skillName="CSS"
            icon={<FaCss3Alt />}
            checked={selectedSkills.includes("CSS")}
            onChange={() => handleSkillToggle("CSS")}
            iconColor="text-blue-300"
            hoverColor="text-blue-300"
          />
        </ul>
      )}
    </>
  );
};

export default ProjectSidebar;
