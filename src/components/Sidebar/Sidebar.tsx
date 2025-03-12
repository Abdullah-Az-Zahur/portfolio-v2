"use client";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import {
  FaAngular,
  FaCss3Alt,
  FaHtml5,
  FaReact,
  FaVuejs,
  FaYoutube,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { RiFolder3Fill } from "react-icons/ri";

// Define types
interface SidebarItem {
  title: string;
  icon: React.ReactNode;
  customClass: string;
  path?: string;
  href?: string;
  isSelectable?: boolean;
  isAlwaysVisible?: boolean;
  subMenu?: SidebarItem[];
}

interface SidebarConfig {
  [key: string]: {
    pageName: string;
    mainTitle: {
      title: string;
      icon: React.ReactNode;
      customClass: string;
    };
    items: SidebarItem[];
    sidebarClass: string;
  };
}

// Sidebar Configuration
const sidebarConfig: SidebarConfig = {
  "/about": {
    pageName: "About",
    mainTitle: {
      title: "About",
      icon: <IoMdArrowDropdown className="text-white" />,
      customClass: "text-white hover:text-blue-500",
    },
    items: [
      {
        title: "bio",
        icon: <RiFolder3Fill className="text-blue-500" />,
        customClass: "text-gray-500 hover:text-blue-500 ml-4",
        path: "/about",
      },
      {
        title: "interests",
        icon: <RiFolder3Fill className="text-green-500" />,
        customClass: "text-gray-500 hover:text-green-500 ml-4",
        path: "/about/interests",
      },
      {
        title: "education",
        icon: <RiFolder3Fill className="text-purple-500" />,
        customClass: "text-gray-500 hover:text-purple-500 ml-4",
        subMenu: [
          {
            title: "high-school",
            icon: <RiFolder3Fill className="text-yellow-500" />,
            customClass: "text-gray-500 hover:text-yellow-500 ml-4",
            path: "/about/education/high-school",
          },
          {
            title: "university",
            icon: <RiFolder3Fill className="text-red-500" />,
            customClass: "text-gray-500 hover:text-red-500 ml-4",
            path: "/about/education/university",
          },
        ],
      },
      {
        title: "contact",
        icon: <IoMdArrowDropdown className="" />,
        customClass:
          "text-white hover:text-blue-500 border-t border-b border-gray-500 py-2",
        isAlwaysVisible: true,
        subMenu: [
          {
            title: "abdullah.az.zahur@gmail.com",
            icon: <MdEmail className="text-purple-500" />,
            customClass: "text-gray-500 hover:text-purple-500",
            href: "mailto:abdullah.az.zahur@gmail.com",
          },
          {
            title: "+880-1705697897",
            icon: <MdPhone className="text-green-500" />,
            customClass: "text-gray-500 hover:text-green-500",
            href: "tel:+8801705697897",
          },
        ],
      },
    ],
    sidebarClass: "",
  },
  "/project": {
    pageName: "Projects",
    mainTitle: {
      title: "Projects",
      icon: <IoMdArrowDropdown className="text-white" />,
      customClass: "text-white hover:text-blue-500",
    },
    items: [
      {
        title: "React",
        icon: <FaReact className="text-blue-500" />,
        customClass: "text-gray-500 hover:text-blue-500 ml-4",
        isSelectable: true,
      },
      {
        title: "Vue",
        icon: <FaVuejs className="text-green-500" />,
        customClass: "text-gray-500 hover:text-green-500 ml-4",
        isSelectable: true,
      },
      {
        title: "Angular",
        icon: <FaAngular className="text-red-500" />,
        customClass: "text-gray-500 hover:text-red-500 ml-4",
        isSelectable: true,
      },
      {
        title: "HTML",
        icon: <FaHtml5 className="text-orange-500" />,
        customClass: "text-gray-500 hover:text-orange-500 ml-4",
        isSelectable: true,
      },
      {
        title: "CSS",
        icon: <FaCss3Alt className="text-blue-300" />,
        customClass: "text-gray-500 hover:text-blue-300 ml-4",
        isSelectable: true,
      },
    ],
    sidebarClass: "",
  },
  "/contact": {
    pageName: "Contact",
    mainTitle: {
      title: "Contact",
      icon: <IoMdArrowDropdown className="text-white" />,
      customClass: "text-white hover:text-blue-500",
    },
    items: [
      {
        title: "abdullah.az.zahur@gmail.com",
        icon: <MdEmail className="text-purple-500" />,
        customClass: "text-gray-500 hover:text-purple-500 ml-4",
        href: "mailto:abdullah.az.zahur@gmail.com",
      },
      {
        title: "+880-1705697897",
        icon: <MdPhone className="text-green-500" />,
        customClass: "text-gray-500 hover:text-green-500 ml-4",
        href: "tel:+8801705697897",
      },
      {
        title: "find-me-also-in",
        icon: <IoMdArrowDropdown className="" />,
        customClass:
          "text-white hover:text-blue-500 border-t border-b border-gray-500 py-2",
        isAlwaysVisible: true,
        subMenu: [
          {
            title: "YouTube link",
            icon: <FaYoutube className="text-red-500" />,
            customClass: "text-gray-500 hover:text-red-500",
            href: "https://www.youtube.com",
          },
          {
            title: "Twitter link",
            icon: <FaTwitter className="text-blue-500" />,
            customClass: "text-gray-500 hover:text-blue-500",
            href: "https://www.twitter.com",
          },
          {
            title: "Instagram link",
            icon: <FaInstagram className="text-pink-500" />,
            customClass: "text-gray-500 hover:text-pink-500",
            href: "https://www.instagram.com",
          },
        ],
      },
    ],
    sidebarClass: "",
  },
};

// Sidebar Component
const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const [expandedSubMenu, setExpandedSubMenu] = useState<string | null>(null);
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const [isMainTitleExpanded, setIsMainTitleExpanded] = useState<boolean>(true);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const toggleSubMenu = (title: string) => {
    setExpandedSubMenu(expandedSubMenu === title ? null : title);
  };

  const toggleSection = (title: string) => {
    const newExpandedSections = new Set(expandedSections);
    if (newExpandedSections.has(title)) {
      newExpandedSections.delete(title);
    } else {
      newExpandedSections.add(title);
    }
    setExpandedSections(newExpandedSections);
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

  const getSidebarConfig = (path: string) => {
    if (path.includes("/about")) {
      return sidebarConfig["/about"];
    } else if (path.includes("/project")) {
      return sidebarConfig["/project"];
    } else if (path.includes("/contact")) {
      return sidebarConfig["/contact"];
    } else {
      return { items: [], sidebarClass: "", pageName: "Sidebar", mainTitle: null };
    }
  };

  const { items, sidebarClass, pageName, mainTitle } = getSidebarConfig(pathname);

  return (
    <div
      className={`w-full md:w-1/5 border-r border-gray-500 md:h-[calc(100vh-56px-48px)] h-auto overflow-hidden ${sidebarClass}`}
    >
      <h2
        className="flex text-white text-lg font-semibold mb-4 border-b border-gray-500 h-10 text-center pt-1 cursor-pointer"
        onClick={() => setIsMainTitleExpanded(!isMainTitleExpanded)}
      >
        {mainTitle && (
          <span className={`flex items-center gap-2 ${mainTitle.customClass}`}>
            {mainTitle.icon}
            {mainTitle.title}
          </span>
        )}
      </h2>
      {isMainTitleExpanded && (
        <nav>
          {items.map((item, index) => (
            <div key={index} className="mb-2">
              <div
                className={`flex items-center gap-2 cursor-pointer ${item.customClass}`}
                onClick={() =>
                  item.isAlwaysVisible
                    ? toggleSection(item.title)
                    : item.subMenu && toggleSubMenu(item.title)
                }
              >
                {item.subMenu && (
                  <span className="">
                    {expandedSections.has(item.title) || expandedSubMenu === item.title ? (
                      <BiChevronDown />
                    ) : (
                      <BiChevronRight />
                    )}
                  </span>
                )}
                {item.isSelectable ? (
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedItems.has(item.title)}
                      onChange={() => handleItemSelect(item.title)}
                      className="mr-2"
                    />
                    {item.icon && <span>{item.icon}</span>}
                    <span>{item.title}</span>
                  </label>
                ) : (
                  <>
                    {item.icon && <span className="mr-2">{item.icon}</span>}
                    {item.path ? (
                      <Link href={item.path} className="hover:underline">
                        {item.title}
                      </Link>
                    ) : item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {item.title}
                      </a>
                    ) : (
                      <span>{item.title}</span>
                    )}
                  </>
                )}
              </div>
              {item.subMenu &&
                (expandedSections.has(item.title) || expandedSubMenu === item.title) && (
                  <ul className="ml-6 mt-2 space-y-1">
                    {item.subMenu.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className={`flex items-center gap-2 text-sm ${subItem.customClass}`}
                      >
                        {subItem.icon && (
                          <span className="mr-2">{subItem.icon}</span>
                        )}
                        {subItem.path ? (
                          <Link href={subItem.path} className="hover:underline">
                            {subItem.title}
                          </Link>
                        ) : subItem.href ? (
                          <a
                            href={subItem.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                          >
                            {subItem.title}
                          </a>
                        ) : (
                          <span>{subItem.title}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
            </div>
          ))}
        </nav>
      )}
    </div>
  );
};

export default Sidebar;