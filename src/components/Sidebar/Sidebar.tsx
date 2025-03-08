"use client";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import { sidebarConfig } from "@/config/navigationConfig";
import { IoMdArrowDropdown } from "react-icons/io";

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
    </div>
  );
};

export default Sidebar;