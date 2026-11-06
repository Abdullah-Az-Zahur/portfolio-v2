"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import { addTab, removeTab } from "@/store/features/tabs/tabsSlice";
import { toggleSkill } from "@/store/features/projects/projectsSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getAvailableProjectSkillOptions } from "@/shared/data/projectSkills";
import { dropdownVariants } from "@/shared/utils/animationVariants";
import SkillCheckbox from "../SkillCheckbox/SkillCheckbox";

export default function ProjectSidebar() {
  const dispatch = useAppDispatch();
  const { allProjects, selectedSkills } = useAppSelector(
    (state) => state.projects,
  );
  const { tabs } = useAppSelector((state) => state.tabs);
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  const skillTabId = (skill: string) => `project-skill:${skill}`;
  const availableSkills = Array.from(
    new Set(allProjects.flatMap((project) => project.skills)),
  ).sort();
  const projectSkills = getAvailableProjectSkillOptions(availableSkills);

  function handleSkillToggle(skill: string) {
    const isSelected = selectedSkills.includes(skill);
    dispatch(toggleSkill(skill));
    dispatch(
      isSelected
        ? removeTab(skillTabId(skill))
        : addTab({ id: skillTabId(skill), title: skill }),
    );
  }

  useEffect(() => {
    const selectedIds = new Set(selectedSkills.map(skillTabId));
    tabs
      .filter((tab) => tab.id.startsWith("project-skill:"))
      .filter((tab) => !selectedIds.has(tab.id))
      .forEach((tab) => dispatch(removeTab(tab.id)));
  }, [dispatch, selectedSkills, tabs]);

  return (
    <>
      <motion.div
        className="flex cursor-pointer items-center gap-2 border-b border-(--app-border-color) py-2 pl-3 text-white hover:text-[#3b82f6] light:border-[#7a8fa5] light:text-[#172337] light:hover:text-[#2563a8]"
        onClick={() => setIsDropdownOpen((open) => !open)}
        whileHover={{ x: 3 }}
        whileTap={{ scale: 0.98 }}
      >
        {isDropdownOpen ? (
          <IoMdArrowDropdown className="text-white light:text-[#172337]" />
        ) : (
          <IoMdArrowDropright className="text-white light:text-[#172337]" />
        )}
        <span>Projects</span>
      </motion.div>
      <AnimatePresence>
        {isDropdownOpen ? (
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
                  key={skill.value}
                  id={skill.value}
                  skillName={skill.label}
                  icon={<SkillIcon />}
                  checked={selectedSkills.includes(skill.value)}
                  onChange={() => handleSkillToggle(skill.value)}
                  iconColor={skill.color}
                  hoverColor="hover:text-blue-500 light:hover:text-blue-600"
                />
              );
            })}
          </motion.ul>
        ) : null}
      </AnimatePresence>
    </>
  );
}
