"use client";

import Bio from "@/components/About/Bio";
import College from "@/components/About/College";
import HighSchool from "@/components/About/HighSchool";
import Interests from "@/components/About/Interests";
import University from "@/components/About/University";
import { useState } from "react";
import { FaSchool, FaUserGraduate } from "react-icons/fa";
import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoMdArrowDropdown,
  IoMdArrowDropright,
} from "react-icons/io";
import { RiFolder3Fill } from "react-icons/ri";

const AboutMeSidebar = () => {
  const [expandedDropdowns, setExpandedDropdowns] = useState<Set<string>>(
    () => new Set()
  );
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const toggleDropdown = (title: string) => {
    setExpandedDropdowns((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(title)) {
        newSet.delete(title);
      } else {
        newSet.add(title);
      }
      return newSet;
    });
  };

  const isDropdownExpanded = (title: string): boolean => {
    return expandedDropdowns.has(title);
  };

  const handleSideBarItemClick = (title: string, component: React.ReactNode) => {
    setActiveItem(title);
    console.log(title, component);
  };

  const isItemActive = (title: string): boolean => {
    return activeItem === title;
  };

  // Check if any education item is active
  const isEducationActive = ["High School", "College", "University"].some(isItemActive);

  return (
    <>
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
          <li
            className={`flex items-center gap-2 ${
              isItemActive("Bio")
                ? "text-blue-500 font-medium"
                : "text-gray-500 hover:text-blue-500"
            } cursor-pointer`}
            onClick={() => handleSideBarItemClick("Bio", <Bio />)}
          >
            <IoIosArrowForward className="text-blue-500" />
            <RiFolder3Fill className="text-blue-500" />
            <span>bio</span>
          </li>
          <li
            className={`flex items-center gap-2 ${
              isItemActive("Interests")
                ? "text-green-500 font-medium"
                : "text-gray-500 hover:text-green-500"
            } cursor-pointer`}
            onClick={() => handleSideBarItemClick("Interests", <Interests />)}
          >
            <IoIosArrowForward className="text-green-500" />
            <RiFolder3Fill className="text-green-500" />
            <span>interests</span>
          </li>
          <li
            className={`flex items-center gap-2 ${
              isEducationActive
                ? "text-purple-500 font-medium"
                : "text-gray-500 hover:text-purple-500"
            } cursor-pointer`}
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
              <li
                className={`flex items-center gap-2 text-sm ${
                  isItemActive("High School")
                    ? "text-yellow-500 font-medium"
                    : "text-gray-500 hover:text-yellow-500"
                } cursor-pointer`}
                onClick={() =>
                  handleSideBarItemClick("High School", <HighSchool />)
                }
              >
                <FaSchool className="text-yellow-500" />
                <span>high-school</span>
              </li>
              <li
                className={`flex items-center gap-2 text-sm ${
                  isItemActive("College")
                    ? "text-red-500 font-medium"
                    : "text-gray-500 hover:text-red-500"
                } cursor-pointer`}
                onClick={() => handleSideBarItemClick("College", <College />)}
              >
                <FaUserGraduate className="text-red-500" />
                <span>college</span>
              </li>
              <li
                className={`flex items-center gap-2 text-sm ${
                  isItemActive("University")
                    ? "text-red-500 font-medium"
                    : "text-gray-500 hover:text-red-500"
                } cursor-pointer`}
                onClick={() =>
                  handleSideBarItemClick("University", <University />)
                }
              >
                <FaUserGraduate className="text-red-500" />
                <span>university</span>
              </li>
            </ul>
          )}
        </ul>
      )}
    </>
  );
};

export default AboutMeSidebar;