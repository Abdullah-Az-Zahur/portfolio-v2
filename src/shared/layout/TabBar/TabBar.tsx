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
    <div className="fixed top-14 left-0 z-40 hidden h-10.25 w-full border-b border-l border-(--app-border-color,#4a627a) bg-[#011627] md:left-[20%] md:block md:w-[80%] [html[data-theme=light]_&]:border-[#7a8fa5] [html[data-theme=light]_&]:bg-[#eef3f8]">
      <div className="flex h-full w-full items-center overflow-x-auto overflow-y-hidden scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;

          return (
            <div
              key={tab.id}
              className={`group relative flex h-full shrink-0 cursor-pointer items-center border-r border-(--app-border-color,#4a627a) px-4 transition-colors duration-180 [html[data-theme=light]_&]:border-[#7a8fa5] ${
                isActive
                  ? "bg-[#1e1e1e] text-white [html[data-theme=light]_&]:bg-[#dce7f0] [html[data-theme=light]_&]:text-[#0f172a] [html[data-theme=light]_&]:font-semibold"
                  : "text-[#607b96] hover:bg-[#1e1e1e]/60 hover:text-[#e5e9f0] [html[data-theme=light]_&]:text-[#52657d] [html[data-theme=light]_&]:hover:bg-[#172337]/10 [html[data-theme=light]_&]:hover:text-[#172337]"
              }`}
              onClick={() => dispatch(setActiveTab(tab.id))}
            >
              <span className="whitespace-nowrap text-sm font-medium">
                {tab.title}
              </span>
              <button
                type="button"
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
                className={`ml-2 rounded p-0.5 text-[#607b96] transition-all duration-150 hover:bg-[#374151] hover:text-white [html[data-theme=light]_&]:text-[#52657d] [html[data-theme=light]_&]:hover:bg-[#cbd6e3] [html[data-theme=light]_&]:hover:text-[#0f172a] ${
                  isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
                aria-label={`Close ${tab.title} tab`}
              >
                <FiX size={14} />
              </button>

              {/* Active Indicator Bar */}
              {isActive && (
                <span className="pointer-events-none absolute top-0 left-0 h-0.5 w-full bg-orange-400 [html[data-theme=light]_&]:bg-blue-600" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TabBar;
