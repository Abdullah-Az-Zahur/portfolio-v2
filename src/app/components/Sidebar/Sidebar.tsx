"use client";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import {
  FaAngular,
  FaCss3Alt,
  FaFacebook,
  FaHtml5,
  FaLinkedin,
  FaReact,
  FaVuejs,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { RiFolder3Fill } from "react-icons/ri";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const [expandedSubMenu, setExpandedSubMenu] = useState<string | null>(null);
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());

  const toggleSubMenu = (title: string) => {
    setExpandedSubMenu(expandedSubMenu === title ? null : title);
  };

  const handleItemSelect = (title: string) => {
    const newSelection = new Set(selectedItems);
    if (newSelection.has(title)) {
      newSelection.delete(title);
    } else {
      newSelection.add(title);
    }
    setSelectedItems(newSelection);
  };

  type SidebarItem = {
    title: string;
    icon?: React.ReactNode;
    subMenu?: {
      title: string;
      icon?: React.ReactNode;
    }[];
    customClass?: string; // Custom class for the item
    customIconClass?: string; // Custom class for the icon
  };

  type SidebarConfig = {
    [key: string]: SidebarItem[];
  };

  const sidebarConfig: SidebarConfig = {
    "/about": [
      {
        title: "bio",
        
        icon: <RiFolder3Fill /> ,
        customClass: "text-gray-500",
        customIconClass: "text-blue-500",
      },
      {
        title: "interests",
        icon: <RiFolder3Fill />,
      },
      {
        title: "education",
        icon: <RiFolder3Fill />,
        subMenu: [
          {
            title: "high-school",
            icon: <RiFolder3Fill /> ,
            
          },
          {
            title: "university",
            icon: <RiFolder3Fill />,
          },
        ],
      },
    ],
    "/project": [
      { title: "React", icon: <FaReact />, customIconClass: "text-blue-500" },
      { title: "Vue", icon: <FaVuejs />, customIconClass: "text-green-500" },
      { title: "Angular", icon: <FaAngular />, customIconClass: "text-red-500" },
      { title: "HTML", icon: <FaHtml5 />, customIconClass: "text-orange-500" },
      { title: "CSS", icon: <FaCss3Alt />, customIconClass: "text-blue-300" },
    ],
    "/contact": [
      { title: "Email", icon: <MdEmail /> },
      { title: "Phone", icon: <MdPhone /> },
      {
        title: "Social",
        icon: <FaFacebook />,
        subMenu: [
          { title: "Facebook", icon: <FaFacebook /> },
          { title: "LinkedIn", icon: <FaLinkedin /> },
          { title: "YouTube", icon: <FaYoutube /> },
        ],
      },
    ],
  };

  const sidebarItems = sidebarConfig[pathname] || [];

  return (
    <div className="w-1/5 border-r p-4 hidden md:block border-gray-500 h-[calc(100vh-56px-48px)] overflow-hidden">
      <h2 className="text-lg font-semibold mb-4">Sidebar</h2>
      <nav>
        {sidebarItems.map((item, index) => (
          <div key={index} className="mb-2">
            <div
              className={`flex items-center gap-2 text-gray-700 font-medium cursor-pointer ${item.customClass}`}
              onClick={() => item.subMenu && toggleSubMenu(item.title)}
            >
              {item.subMenu && (
                <span className="mr-2">
                  {expandedSubMenu === item.title ? (
                    <BiChevronDown />
                  ) : (
                    <BiChevronRight />
                  )}
                </span>
              )}
              {item.icon && (
                <span className={`mr-2 ${item.customIconClass}`}>
                  {item.icon}
                </span>
              )}
              <span onClick={() => handleItemSelect(item.title)}>{item.title}</span>
            </div>
            {item.subMenu && expandedSubMenu === item.title && (
              <ul className="ml-6 mt-2 space-y-1">
                {item.subMenu.map((subItem, subIndex) => (
                  <li key={subIndex} className="flex items-center gap-2 text-sm text-gray-600">
                    {subItem.icon && (
                      <span className={`mr-2 ${subItem.customIconClass}`}>
                        {subItem.icon}
                      </span>
                    )}
                    {subItem.title}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
