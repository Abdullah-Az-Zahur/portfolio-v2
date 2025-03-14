"use client";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoMdArrowDropdown,
  IoMdArrowDropright,
} from "react-icons/io";
import {
  FaAngular,
  FaCss3Alt,
  FaHtml5,
  FaReact,
  FaVuejs,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaSchool,
  FaUserGraduate,
} from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { RiFolder3Fill } from "react-icons/ri";
import { useTabs } from "@/contexts/Context"; // Import the TabContext
import Bio from "../../components/About/Bio"; // Import your components
import Interests from "../../components/About/Interests";
import HighSchool from "../../components/About/HighSchool";
import University from "../../components/About/University";

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const [expandedDropdowns, setExpandedDropdowns] = useState<Set<string>>(
    new Set()
  );
  const [selectedSkills, setSelectedSkills] = useState<Set<string>>(new Set());
  const { addTab } = useTabs(); // Use the TabContext to add tabs

  const toggleDropdown = (title: string) => {
    const newExpandedDropdowns = new Set(expandedDropdowns);
    if (newExpandedDropdowns.has(title)) {
      newExpandedDropdowns.delete(title);
    } else {
      newExpandedDropdowns.add(title);
    }
    setExpandedDropdowns(newExpandedDropdowns);
  };

  const isDropdownExpanded = (title: string) => expandedDropdowns.has(title);

  const handleSkillSelect = (skill: string) => {
    const newSelection = new Set(selectedSkills);
    if (newSelection.has(skill)) {
      newSelection.delete(skill);
    } else {
      newSelection.add(skill);
    }
    setSelectedSkills(newSelection);
  };

  // Function to handle sidebar item clicks for About page
  const handleAboutItemClick = (title: string, component: React.ReactNode) => {
    addTab({
      id: title.toLowerCase().replace(/\s+/g, "-"), // Generate a unique ID for the tab
      title,
      content: component,
    });
  };

  return (
    <div
      className={`w-full md:w-1/5 border-r border-gray-500 md:h-[calc(100vh-56px-48px)] h-auto overflow-hidden`}
    >
      <nav>
        {/* About Page */}
        {pathname.includes("/about") && (
          <>
            {/* About Dropdown */}
            <div
              className="flex items-center gap-2 cursor-pointer text-white hover:text-blue-500 border-b border-gray-500 py-2"
              onClick={() => toggleDropdown("about")}
            >
              {isDropdownExpanded("about") ? (
                <IoMdArrowDropdown className="text-white" />
              ) : (
                <IoMdArrowDropright className="text-white" />
              )}
              <span>About</span>
            </div>
            {isDropdownExpanded("about") && (
              <ul className="ml-4 mt-2 space-y-1">
                {/* Bio */}
                <li
                  className="flex items-center gap-2 text-gray-500 hover:text-blue-500 cursor-pointer"
                  onClick={() => handleAboutItemClick("Bio", <Bio />)}
                >
                  <RiFolder3Fill className="text-blue-500" />
                  <span>bio</span>
                </li>

                {/* Interests */}
                <li
                  className="flex items-center gap-2 text-gray-500 hover:text-green-500 cursor-pointer"
                  onClick={() =>
                    handleAboutItemClick("Interests", <Interests />)
                  }
                >
                  <RiFolder3Fill className="text-green-500" />
                  <span>interests</span>
                </li>

                {/* Education Dropdown */}
                <li
                  className="flex items-center gap-2 text-gray-500 hover:text-purple-500 cursor-pointer"
                  onClick={() => toggleDropdown("education")}
                >
                  {isDropdownExpanded("education") ? (
                    <IoIosArrowDown className="text-purple-500" />
                  ) : (
                    <IoIosArrowForward className="text-purple-500" />
                  )}
                  <RiFolder3Fill className="text-purple-500" />
                  <span>education</span>
                </li>
                {isDropdownExpanded("education") && (
                  <ul className="ml-6 mt-1 space-y-1">
                    {/* High School */}
                    <li
                      className="flex items-center gap-2 text-sm text-gray-500 hover:text-yellow-500 cursor-pointer"
                      onClick={() =>
                        handleAboutItemClick("High School", <HighSchool />)
                      }
                    >
                      <FaSchool className="text-yellow-500" />
                      <span>high-school</span>
                    </li>

                    {/* University */}
                    <li
                      className="flex items-center gap-2 text-sm text-gray-500 hover:text-red-500 cursor-pointer"
                      onClick={() =>
                        handleAboutItemClick("University", <University />)
                      }
                    >
                      <FaUserGraduate className="text-red-500" />
                      <span>university</span>
                    </li>
                  </ul>
                )}
              </ul>
            )}

            {/* Contact Dropdown */}
            <div
              className="flex items-center gap-2 cursor-pointer text-white hover:text-blue-500 border-y border-gray-500 py-2 "
              onClick={() => toggleDropdown("contact")}
            >
              {isDropdownExpanded("contact") ? (
                <IoMdArrowDropdown className="text-white " />
              ) : (
                <IoMdArrowDropright className="text-white" />
              )}
              <span>contact</span>
            </div>
            {isDropdownExpanded("contact") && (
              <ul className="ml-4 mt-2 space-y-1">
                <li className="flex items-center gap-2 text-gray-500 hover:text-purple-500">
                  <MdEmail className="text-purple-500 flex-shrink-0" />{" "}
                  {/* Prevent icon from shrinking */}
                  <a
                    href="mailto:abdullah.az.zahur@gmail.com"
                    className="truncate"
                    title="abdullah.az.zahur@gmail.com" // Show full email on hover
                  >
                    abdullah.az.zahur@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2 text-gray-500 hover:text-green-500">
                  <MdPhone className="text-green-500" />
                  <a href="tel:+8801705697897">+880-1705697897</a>
                </li>
              </ul>
            )}
          </>
        )}

        {/* Projects Page */}
        {pathname.includes("/project") && (
          <>
            {/* Projects Dropdown */}
            <div
              className="flex items-center gap-2 cursor-pointer text-white hover:text-blue-500 border-b border-gray-500 py-2"
              onClick={() => toggleDropdown("projects")}
            >
              {isDropdownExpanded("projects") ? (
                <IoMdArrowDropdown className="text-white" />
              ) : (
                <IoMdArrowDropright className="text-white" />
              )}
              <span>Projects</span>
            </div>
            {isDropdownExpanded("projects") && (
              <ul className="ml-4 mt-2 space-y-1">
                {/* React Skill */}
                <label
                  htmlFor="React"
                  className="flex items-center gap-2 cursor-pointer text-gray-500 hover:text-blue-500"
                >
                  <input
                    type="checkbox"
                    id="React"
                    checked={selectedSkills.has("React")}
                    onChange={() => handleSkillSelect("React")}
                    className="mr-2"
                  />
                  <FaReact className="text-blue-500" />
                  <span>React</span>
                </label>

                {/* Vue Skill */}
                <label
                  htmlFor="Vue"
                  className="flex items-center gap-2 cursor-pointer text-gray-500 hover:text-green-500"
                >
                  <input
                    type="checkbox"
                    id="Vue"
                    checked={selectedSkills.has("Vue")}
                    onChange={() => handleSkillSelect("Vue")}
                    className="mr-2"
                  />
                  <FaVuejs className="text-green-500" />
                  <span>Vue</span>
                </label>

                {/* Angular Skill */}
                <label
                  htmlFor="Angular"
                  className="flex items-center gap-2 cursor-pointer text-gray-500 hover:text-red-500"
                >
                  <input
                    type="checkbox"
                    id="Angular"
                    checked={selectedSkills.has("Angular")}
                    onChange={() => handleSkillSelect("Angular")}
                    className="mr-2"
                  />
                  <FaAngular className="text-red-500" />
                  <span>Angular</span>
                </label>

                {/* HTML Skill */}
                <label
                  htmlFor="HTML"
                  className="flex items-center gap-2 cursor-pointer text-gray-500 hover:text-orange-500"
                >
                  <input
                    type="checkbox"
                    id="HTML"
                    checked={selectedSkills.has("HTML")}
                    onChange={() => handleSkillSelect("HTML")}
                    className="mr-2"
                  />
                  <FaHtml5 className="text-orange-500" />
                  <span>HTML</span>
                </label>

                {/* CSS Skill */}
                <label
                  htmlFor="CSS"
                  className="flex items-center gap-2 cursor-pointer text-gray-500 hover:text-blue-300"
                >
                  <input
                    type="checkbox"
                    id="CSS"
                    checked={selectedSkills.has("CSS")}
                    onChange={() => handleSkillSelect("CSS")}
                    className="mr-2"
                  />
                  <FaCss3Alt className="text-blue-300" />
                  <span>CSS</span>
                </label>
              </ul>
            )}
          </>
        )}

        {/* Contact Page */}
        {pathname.includes("/contact") && (
          <>
            {/* Contact Dropdown */}
            <div
              className="flex items-center gap-2 cursor-pointer text-white hover:text-blue-500 border-b border-gray-500 py-2"
              onClick={() => toggleDropdown("contact")}
            >
              {isDropdownExpanded("contact") ? (
                <IoMdArrowDropdown className="text-white" />
              ) : (
                <IoMdArrowDropright className="text-white" />
              )}
              <span>Contact</span>
            </div>
            {isDropdownExpanded("contact") && (
              <ul className="ml-4 mt-2 space-y-1">
                <li className="flex items-center gap-2 text-gray-500 hover:text-purple-500">
                  <MdEmail className="text-purple-500 flex-shrink-0" />{" "}
                  <a
                    href="mailto:abdullah.az.zahur@gmail.com"
                    className="truncate"
                    title="abdullah.az.zahur@gmail.com"
                  >
                    abdullah.az.zahur@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2 text-gray-500 hover:text-green-500">
                  <MdPhone className="text-green-500" />
                  <a href="tel:+8801705697897">+880-1705697897</a>
                </li>
              </ul>
            )}

            {/* Find Me Also In Dropdown */}
            <div
              className="flex items-center gap-2 cursor-pointer text-white hover:text-blue-500 border-y border-gray-500 py-2 "
              onClick={() => toggleDropdown("find-me-also-in")}
            >
              {isDropdownExpanded("find-me-also-in") ? (
                <IoMdArrowDropdown className="text-white" />
              ) : (
                <IoMdArrowDropright className="text-white" />
              )}
              <span>find-me-also-in</span>
            </div>
            {isDropdownExpanded("find-me-also-in") && (
              <ul className="ml-4 mt-2 space-y-1">
                <li className="flex items-center gap-2 text-gray-500 hover:text-red-500">
                  <FaYoutube className="text-red-500" />
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    YouTube
                  </a>
                </li>
                <li className="flex items-center gap-2 text-gray-500 hover:text-blue-500">
                  <FaTwitter className="text-blue-500" />
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </li>
                <li className="flex items-center gap-2 text-gray-500 hover:text-pink-500">
                  <FaInstagram className="text-pink-500" />
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            )}
          </>
        )}
      </nav>
    </div>
  );
};

export default Sidebar;
