'use client';

import { removeTab, setActiveTab } from "@/redux/features/tabs/tabsSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { usePathname } from "next/navigation";
import React from "react";
import { FiX } from "react-icons/fi";

const TabBar = () => {
  const { tabs, activeTab } = useAppSelector((state) => state.tabs);
  const dispatch = useAppDispatch();
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return (
    <div className="hidden md:flex fixed top-14 left-0 md:left-[20%] w-full md:w-[80%] h-[41px] border-b border-l border-gray-700 items-center bg-[#011627] z-40">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`group flex items-center px-4 h-full cursor-pointer border-r border-gray-700 relative ${
            activeTab === tab.id 
              ? "bg-[#1E1E1E] text-white" 
              : "text-gray-400 hover:bg-[#1E1E1E]/60"
          }`}
          onClick={() => dispatch(setActiveTab(tab.id))}
        >
          <span className="text-sm">{tab.title}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              dispatch(removeTab(tab.id));
            }}
            className="ml-2 opacity-0 group-hover:opacity-100 text-gray-400 hover:text-white hover:bg-gray-600 rounded p-0.5 transition-all duration-150"
          >
            <FiX size={14} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default TabBar;