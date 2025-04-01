"use client";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaGraduationCap, FaSchool, FaUniversity } from "react-icons/fa";
import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoMdArrowDropdown,
  IoMdArrowDropright,
} from "react-icons/io";
import { MdEmail, MdPhone } from "react-icons/md";
import { RiFolder3Fill } from "react-icons/ri";

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const [openDropdowns, setOpenDropdowns] = useState<Set<string>>(new Set());

  const toggleDropdown = (title: string) => {
    const newOpenDropdowns = new Set(openDropdowns);
    if (newOpenDropdowns.has(title)) {
      newOpenDropdowns.delete(title);
    } else {
      newOpenDropdowns.add(title);
    }
    setOpenDropdowns(newOpenDropdowns);
  };

  const isDropdownOpen = (title: string) => {
    return openDropdowns.has(title);
  };

  if (pathname === "/") {
    return null;
  }

  return (
    <div
      className={`md:fixed w-full md:w-1/5 h-auto md:h-[calc(100vh-56px-48px)] overflow-y-auto border-r border-gray-500 bg-[#011627]`}
    >
      <nav>
        {/* About Page */}
        {pathname === "/about" && (
          <>
            {/* About Dropdown */}
            <div
              onClick={() => toggleDropdown("about")}
              className="flex items-center gap-2 pl-2 cursor-pointer text-white hover:text-blue-500 border-b border-gray-500 py-2"
            >
              {isDropdownOpen("about") ? (
                <IoMdArrowDropdown className="text-white" />
              ) : (
                <IoMdArrowDropright className="text-white" />
              )}
              <span>personal-info</span>
            </div>
            {isDropdownOpen("about") && (
              <ul className="border-b border-gray-500 pl-2 py-1 space-y-1">
                {/* Bio */}
                <li onClick={() => toggleDropdown("bio")} className="">
                  <div className="flex items-center gap-2 cursor-pointer ">
                    <IoIosArrowForward className="" />
                    <RiFolder3Fill className="text-orange-400" />
                    <span>bio</span>
                  </div>
                </li>
                {/* interest */}
                <li onClick={() => toggleDropdown("interest")} className="">
                  <div className="flex items-center gap-2 cursor-pointer ">
                    <IoIosArrowForward className="" />
                    <RiFolder3Fill className="text-green-500" />
                    <span>interest</span>
                  </div>
                </li>
                {/* Education */}
                <li onClick={() => toggleDropdown("education")} className="">
                  <div className="flex items-center gap-2 cursor-pointer ">
                    {isDropdownOpen("education") ? (
                      <IoIosArrowDown className="" />
                    ) : (
                      <IoIosArrowForward className="" />
                    )}
                    <RiFolder3Fill className="text-purple-500" />
                    <span>education</span>
                  </div>
                  {isDropdownOpen("education") && (
                    <ul className="md:ml-6 py-1 space-y-1">
                      <li className="flex items-center gap-2">
                        {" "}
                        <FaSchool className="text-blue-800" /> high-school
                      </li>
                      <li className="flex items-center gap-2">
                        {" "}
                        <FaGraduationCap className="text-green-700" /> college
                      </li>
                      <li className="flex items-center gap-2">
                        {" "}
                        <FaUniversity className="text-red-800" /> university
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}

            {/* about contact Dropdown */}
            <div
              onClick={() => toggleDropdown("about-contact")}
              className="flex items-center gap-2 pl-2 cursor-pointer text-white hover:text-blue-500 border-b border-gray-500 py-2"
            >
              {isDropdownOpen("about-contact") ? (
                <IoMdArrowDropdown className="text-white" />
              ) : (
                <IoMdArrowDropright className="text-white" />
              )}
              <span>contact</span>
            </div>
            {isDropdownOpen("about-contact") && (
              <ul className="border-b border-gray-500 pl-2 py-1 space-y-1">
                <li className="flex items-center gap-2 text-gray-500 hover:text-blue-600">
                  <MdEmail className="text-blue-600 flex-shrink-0" />
                  <a
                    href="mailto:abdullah.az.zahur@gmail.com"
                    className="truncate"
                    title="abdullah.az.zahur@gmail.com"
                  >
                    abdullah.az.zahur@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2 text-gray-500 hover:text-green-600">
                  <MdPhone className="text-green-600" />
                  <a href="tel:+8801705697897" className="truncate">+880-1705697897</a>
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
