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
    <div
      className={`md:fixed w-full md:w-1/5 border-r border-gray-500 md:h-[calc(100vh-56px-48px)] h-auto overflow-y-auto bg-[#011627]`}
    >
      <nav className="md:h-full">
        {ActiveSidebar ? <ActiveSidebar /> : null}
      </nav>
    </div>
  );
};

export default Sidebar;
