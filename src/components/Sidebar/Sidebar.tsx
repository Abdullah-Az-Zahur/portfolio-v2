"use client";
import { usePathname } from "next/navigation";
import React from "react";
import AboutMeSidebar from "./SidebarOptions/AboutMeSidebar";
import ProjectSidebar from "./SidebarOptions/ProjectSidebar";
import ContactSidebar from "./SidebarOptions/ContactSidebar";

const Sidebar = () => {
  const pathname = usePathname();
  if (pathname == "/") {
    return null;
  }
  return (
    <div
      className={`md:fixed w-full md:w-1/5 border-r border-gray-500 md:h-[calc(100vh-56px-48px)] h-auto overflow-y-auto bg-[#011627]`}
    >
      <nav>
        {pathname == "/about" && <AboutMeSidebar />}
        {pathname == "/project" && <ProjectSidebar />}
        {pathname == "/contact" && <ContactSidebar />}
      </nav>
    </div>
  );
};

export default Sidebar;
