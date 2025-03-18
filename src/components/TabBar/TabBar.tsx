import { useTabs } from "@/contexts/Context";
import React from "react";

const TabBar = () => {
  const { tabs, removeTab, setActiveTab, activeTab } = useTabs();

  return (
    <div className="h-[41px] border-b border-gray-500 flex items-center">
      {tabs.map((tab, index) => (
        <React.Fragment key={tab.id}>
          <div
            className={`flex items-center px-4 py-2 cursor-pointer ${
              activeTab === tab.id ? "bg-gray-700" : "bg-gray-800"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span>{tab.title}</span>
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent the tab from being activated when closing
                removeTab(tab.id);
              }}
              className="ml-2 text-gray-400 hover:text-red-600"
            >
              x
            </button>
          </div>
          {/* Add a separator after each tab except the last one */}
          {index < tabs.length - 1 && (
            <div className="h-5 w-px bg-gray-500 mx-1"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default TabBar;