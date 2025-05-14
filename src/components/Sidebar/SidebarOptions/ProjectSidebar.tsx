'use client";';

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";

const ProjectSidebar = () => {
  const dispatch = useAppDispatch();
  const { selectedSkills } = useAppSelector((state) => state.projects);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleSkillsToggle = (skill: string) => {
    dispatch( 
        toggleSkill
        (skill));
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
          <label
            htmlFor="React.js"
            className="flex items-center gap-2 cursor-pointer text-gray-500 hover:text-blue-500"
          >
            <input
              type="checkbox"
              id="React.js"
              checked={selectedSkills.includes("React.js")}
              onChange={() => handleSkillsToggle("React.js")}
            />
          </label>
        </ul>
      )}
    </>
  );
};

export default ProjectSidebar;
