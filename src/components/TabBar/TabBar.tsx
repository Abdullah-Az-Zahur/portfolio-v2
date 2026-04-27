"use client";

import { uncheckedSkill } from "@/store/features/projects/projectsSlice";
import { removeTab, setActiveTab } from "@/store/features/tabs/tabsSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { usePathname } from "next/navigation";
import { FiX } from "react-icons/fi";

const PROJECT_SKILL_TAB_PREFIX = "project-skill:";

const TabBar = () => {
  const { tabs, activeTab } = useAppSelector((state) => state.tabs);
  const dispatch = useAppDispatch();
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return (
    <div className="hidden md:block fixed top-14 left-0 md:left-[20%] w-full md:w-[80%] h-[41px] border-b border-l border-gray-700 bg-[#011627] z-40">
      <div className="tabbar-scroll flex h-full w-full items-center overflow-x-auto overflow-y-hidden">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`group flex shrink-0 items-center px-4 h-full cursor-pointer border-r border-gray-700 relative ${
              activeTab === tab.id
                ? "bg-[#1E1E1E] text-white"
                : "text-gray-400 hover:bg-[#1E1E1E]/60"
            }`}
            onClick={() => dispatch(setActiveTab(tab.id))}
          >
            <span className="text-sm whitespace-nowrap">{tab.title}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (tab.id.startsWith(PROJECT_SKILL_TAB_PREFIX)) {
                  const skillName = tab.id.replace(
                    PROJECT_SKILL_TAB_PREFIX,
                    "",
                  );
                  dispatch(uncheckedSkill(skillName));
                }
                dispatch(removeTab(tab.id));
              }}
              className={`ml-2 text-gray-400 hover:text-white hover:bg-gray-600 rounded p-0.5 transition-all duration-150 ${
                activeTab === tab.id
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-100"
              }`}
            >
              <FiX size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabBar;
