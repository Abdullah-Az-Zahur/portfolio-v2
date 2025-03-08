"use client";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";
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
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const [expandedSubMenu, setExpandedSubMenu] = useState<string | null>(null);
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());

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
      items: SidebarItem[];
      sidebarClass: string;
    };
  }

  const toggleSubMenu = (title: string) => {
    setExpandedSubMenu(expandedSubMenu === title ? null : title);
  };

  const handleItemSelect = (title: string) => {
    const newSelection = new Set(selectedItems);
    if (newSelection.has(title)) {
      newSelection.delete(title); // Deselect if already selected
    } else {
      newSelection.add(title); // Select if not already selected
    }
    setSelectedItems(newSelection);
  };

  const sidebarConfig: SidebarConfig = {
    "/about": {
      pageName: "About",
      items: [
        {
          title: "bio",
          icon: <RiFolder3Fill className="text-blue-500" />,
          customClass: "text-gray-500 hover:text-blue-500 ml-4",
          path: "/about", // Path for internal routing
        },
        {
          title: "interests",
          icon: <RiFolder3Fill className="text-green-500" />,
          customClass: "text-gray-500 hover:text-green-500 ml-4",
          path: "/about/interests", // Path for internal routing
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
              path: "/about/education/high-school", // Path for internal routing
            },
            {
              title: "university",
              icon: <RiFolder3Fill className="text-red-500" />,
              customClass: "text-gray-500 hover:text-red-500 ml-4",
              path: "/about/education/university", // Path for internal routing
            },
          ],
        },
        {
          title: "contact",
          icon: <IoMdArrowDropdown className="" />,
          customClass:
            "text-white hover:text-blue-500 border-t border-b border-gray-500 py-2",
          isAlwaysVisible: true, // Always visible subsection
          subMenu: [
            {
              title: "abdullah.az.zahur@gmail.com",
              icon: <MdEmail className="text-purple-500" />,
              customClass: "text-gray-500 hover:text-purple-500",
              href: "mailto:abdullah.az.zahur@gmail.com", // Link to open Gmail
            },
            {
              title: "+880-1705697897",
              icon: <MdPhone className="text-green-500" />,
              customClass: "text-gray-500 hover:text-green-500",
              href: "tel:+8801705697897", // Link to make a phone call
            },
          ],
        },
      ],
      sidebarClass: "",
    },
    "/project": {
      pageName: "Projects",
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
      items: [
        {
          title: "abdullah.az.zahur@gmail.com",
          icon: <MdEmail className="text-purple-500" />,
          customClass: "text-gray-500 hover:text-purple-500 ml-4",
          href: "mailto:abdullah.az.zahur@gmail.com", // Link to open Gmail
        },
        {
          title: "+880-1705697897",
          icon: <MdPhone className="text-green-500" />,
          customClass: "text-gray-500 hover:text-green-500 ml-4",
          href: "tel:+8801705697897", // Link to make a phone call
        },
        {
          title: "find-me-also-in",
          icon: <IoMdArrowDropdown className="" />,
          customClass:
            "text-white hover:text-blue-500 border-t border-b border-gray-500 py-2",
          isAlwaysVisible: true, // Always visible subsection
          subMenu: [
            {
              title: "YouTube link",
              icon: <FaYoutube className="text-red-500" />,
              customClass: "text-gray-500 hover:text-red-500",
              href: "https://www.youtube.com", // Link to YouTube
            },
            {
              title: "Twitter link",
              icon: <FaTwitter className="text-blue-500" />,
              customClass: "text-gray-500 hover:text-blue-500",
              href: "https://www.twitter.com", // Link to Twitter
            },
            {
              title: "Instagram link",
              icon: <FaInstagram className="text-pink-500" />,
              customClass: "text-gray-500 hover:text-pink-500",
              href: "https://www.instagram.com", // Link to Instagram
            },
          ],
        },
      ],
      sidebarClass: "",
    },
  };

  const getSidebarConfig = (path: string) => {
    if (path.includes("/about")) {
      return sidebarConfig["/about"];
    } else if (path.includes("/project")) {
      return sidebarConfig["/project"];
    } else if (path.includes("/contact")) {
      return sidebarConfig["/contact"];
    } else {
      return { items: [], sidebarClass: "", pageName: "Sidebar" };
    }
  };

  const { items, sidebarClass, pageName } = getSidebarConfig(pathname);

  return (
    <div
      className={`w-1/5 border-r hidden md:block border-gray-500 h-[calc(100vh-56px-48px)] overflow-hidden ${sidebarClass}`}
    >
      <h2 className="flex text-white text-lg font-semibold mb-4 border-b border-gray-500 h-10 text-center pt-1">
        <IoMdArrowDropdown className="mt-1 mx-4" /> {pageName}
      </h2>
      <nav>
        {items.map((item, index) => (
          <div key={index} className="mb-2">
            <div
              className={`flex items-center gap-2 cursor-pointer ${item.customClass}`}
              onClick={() =>
                !item.isAlwaysVisible &&
                item.subMenu &&
                toggleSubMenu(item.title)
              }
            >
              {item.subMenu && !item.isAlwaysVisible && (
                <span className="">
                  {expandedSubMenu === item.title ? (
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
                  {item.path ? ( // Internal link
                    <Link href={item.path} className="hover:underline">
                      {item.title}
                    </Link>
                  ) : item.href ? ( // External link
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {item.title}
                    </a>
                  ) : (
                    <span>{item.title}</span> // No link
                  )}
                </>
              )}
            </div>
            {item.subMenu &&
              (item.isAlwaysVisible || expandedSubMenu === item.title) && (
                <ul className="ml-6 mt-2 space-y-1">
                  {item.subMenu.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      className={`flex items-center gap-2 text-sm ${subItem.customClass}`}
                    >
                      {subItem.icon && (
                        <span className="mr-2">{subItem.icon}</span>
                      )}
                      {subItem.path ? ( // Internal link
                        <Link href={subItem.path} className="hover:underline">
                          {subItem.title}
                        </Link>
                      ) : subItem.href ? ( // External link
                        <a
                          href={subItem.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {subItem.title}
                        </a>
                      ) : (
                        <span>{subItem.title}</span> // No link
                      )}
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
