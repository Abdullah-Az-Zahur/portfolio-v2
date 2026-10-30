"use client";

import type { ComponentType } from "react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import AboutMeSidebar from "./SidebarOptions/AboutMeSidebar";
import ProjectSidebar from "./SidebarOptions/ProjectSidebar";
import ContactSidebar from "./SidebarOptions/ContactSidebar";
import { useAppDispatch } from "@/store/hooks";
import { clearTabs } from "@/store/features/tabs/tabsSlice";

const sidebarByPath: Record<string, ComponentType> = {
  "/about": AboutMeSidebar,
  "/project": ProjectSidebar,
  "/contact": ContactSidebar,
};

const Sidebar = () => {
  const pathname = usePathname();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(clearTabs());
  }, [pathname, dispatch]);

  if (pathname === "/") {
    return null;
  }

  const ActiveSidebar = sidebarByPath[pathname];

  if (!ActiveSidebar) {
    return null;
  }

  return (
    <aside className="h-auto w-full border-r border-(--app-border-color) bg-[#011627] text-[#94a3b8] transition-colors duration-200 ease-in-out light:border-[#cbd6e3] light:bg-[#eef3f8] light:text-[#52657d] md:h-full md:w-64 lg:w-72 md:overflow-y-auto shrink-0">
      <nav aria-label="Sidebar Inner Navigation" className="h-full w-full">
        <ActiveSidebar />
      </nav>
    </aside>
  );
};

export default Sidebar;
