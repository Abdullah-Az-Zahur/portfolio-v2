'use client'; 

import { useTabs } from "@/contexts/Context";
import { usePathname } from "next/navigation"; 
import React from "react";

const TabBar = () => {
  const { tabs, removeTab, setActiveTab, activeTab } = useTabs();
  const pathname = usePathname(); // Get the current path

  if (pathname === "/") {
    return null;
  }

  return (
    <div className="hidden md:flex fixed top-14 left-0 md:left-[20%] w-full md:w-[80%] h-[41px] border-b border-l border-gray-500 items-center bg-[#011627] z-40">
      {tabs.map((tab) => (
        <React.Fragment key={tab.id}>
          <div
            className={`flex items-center px-4 py-2 cursor-pointer border-r border-gray-500 ${
              activeTab === tab.id ? "bg-gray-700" : ""
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span>{tab.title}</span>
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent the tab from being activated when closing
                removeTab(tab.id);
              }}
              className="ml-4 text-gray-400 hover:text-red-600"
            >
              x
            </button>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default TabBar;