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

  return (
    <aside className="h-auto w-full overflow-y-auto border-r border-(--app-border-color) bg-[#011627] text-[#94a3b8] transition-colors duration-180 ease-in-out light:bg-[#eef3f8] light:border-[#7a8fa5] light:text-[#52657d] md:fixed md:h-[calc(100vh-56px-48px)] md:w-1/5">
      <nav className="md:h-full">
        {ActiveSidebar ? <ActiveSidebar /> : null}
      </nav>
    </aside>
  );
};

export default Sidebar;
