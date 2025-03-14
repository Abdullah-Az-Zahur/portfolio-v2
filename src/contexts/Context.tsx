"use client";
import { createContext, useContext, useState } from "react";

interface Tab {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface ContextType {
  tabs: Tab[];
  addTab: (tab: Tab) => void;
  removeTab: (id: string) => void;
  setActiveTab: (id: string) => void;
  activeTab: string | null;
  selectedSkills: Set<string>; // Add selectedSkills to the context
  setSelectedSkills: (skills: Set<string>) => void; // Add setSelectedSkills to the context
}

const TabContext = createContext<ContextType | undefined>(undefined);

export const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [tabs, setTabs] = useState<Tab[]>([]);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [selectedSkills, setSelectedSkills] = useState<Set<string>>(new Set()); // State for selected skills

  const addTab = (tab: Tab) => {
    setTabs((prevTabs) => {
      const existingTab = prevTabs.find((t) => t.id === tab.id);
      if (existingTab) {
        setActiveTab(tab.id);
        return prevTabs;
      }
      return [...prevTabs, tab];
    });
    setActiveTab(tab.id);
  };

  const removeTab = (id: string) => {
    setTabs((prevTabs) => {
      const newTabs = prevTabs.filter((tab) => tab.id !== id);
      if (activeTab === id) {
        setActiveTab(
          newTabs.length > 0 ? newTabs[newTabs.length - 1].id : null
        );
      }
      return newTabs;
    });
  };

  return (
    <TabContext.Provider
      value={{
        tabs,
        addTab,
        removeTab,
        setActiveTab,
        activeTab,
        selectedSkills, // Provide selectedSkills
        setSelectedSkills, // Provide setSelectedSkills
      }}
    >
      {children}
    </TabContext.Provider>
  );
};

export const useTabs = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error("useTabs must be used within a ContextProvider");
  }
  return context;
};