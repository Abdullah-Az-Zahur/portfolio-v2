"use client";
import { div } from "framer-motion/client";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const [isMainDropdownOpen, setIsMainDropdownOpen] = useState(false);
  const [isSubDropdownOpen, setIsSubDropdownOpen] = useState(false);

  const mainDropdownToggle = () => {
    setIsMainDropdownOpen((prev) => !prev);
  };
  const subDropdownToggle = () => {
    setIsSubDropdownOpen((prev) => !prev);
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
              className="border-b border-gray-500 py-2"
              onClick={mainDropdownToggle}
            >
              {}
            </div>

            { isMainDropdownOpen && (
                <ul className=" space-y-1">
                  <li>

                  </li>
                </ul>
              ) }

          </>
        )}
      </nav>
    </div>
  );
};

export default Sidebar;
