import type { ReactNode } from "react";
import type { IconType } from "react-icons";

export type SidebarItem = {
  id: string;
  title: string;
  label: string;
  icon: IconType;
  activeClass: string;
  hoverClass: string;
  iconClass: string;
  content?: ReactNode;
};

export type SidebarGroup = {
  id: string;
  label: string;
  arrowClass: string;
  folderClass: string;
  hoverClass?: string; // ← নতুন (optional, backward-compatible)
  items: SidebarItem[];
};

export type SidebarCategory = {
  id: string;
  label: string;
  icon: IconType;
  iconClass: string;
  groups: SidebarGroup[];
};
