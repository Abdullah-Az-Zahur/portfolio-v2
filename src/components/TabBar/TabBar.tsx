import { useTabs } from "@/contexts/Context";
import React from "react";

const TabBar = () => {
  const { tabs, removeTab, setActiveTab, activeTab } = useTabs();
  return (
    <div className="h-10 border-b border-gray-500 flex items-center">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`flex items-center px-4 py-2 cursor-pointer ${
            activeTab === tab.id ? "bg-gray-700" : "bg-gray-800"
          } `}
          onClick={() => setActiveTab(tab.id)}
        >
          <span>{tab.title}</span>
          <button
            onClick={() => removeTab(tab.id)}
            className="ml-2 text-gray-400 hover:text-gray-200"
          >
            x
          </button>
        </div>
      ))}
    </div>
  );
};

export default TabBar;
