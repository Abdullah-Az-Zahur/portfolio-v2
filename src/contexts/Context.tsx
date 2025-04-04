"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Bio from "@/components/About/Bio";

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
  selectedSkills: Set<string>;
  setSelectedSkills: (skills: Set<string>) => void;
}

const TabContext = createContext<ContextType | undefined>(undefined);

export const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [tabs, setTabs] = useState<Tab[]>([]);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [selectedSkills, setSelectedSkills] = useState<Set<string>>(new Set());
  const pathname = usePathname();
  const router = useRouter();

  // Clear tabs when the route changes
  useEffect(() => {
    setTabs([]); // Clear all tabs
    setActiveTab(null); // Reset the active tab
  }, [pathname]);

  // Add default tabs based on the route
  useEffect(() => {
    if (pathname.includes("/about")) {
      addTab({
        id: "bio",
        title: "Bio",
        content: <Bio />,
      });
    } else if (pathname.includes("/project")) {
      addTab({
        id: "projects",
        title: "Projects",
        content: <div>Projects Content</div>,
      });
    } else if (pathname.includes("/contact")) {
      addTab({
        id: "contact",
        title: "Contact",
        content: <div>Contact Content</div>,
      });
    }
  }, [pathname]);

  // Redirect to home only if all tabs are manually closed
  useEffect(() => {
    if (tabs.length === 0 && pathname !== "/") {
      // Check if the tabs were cleared due to a route change or manual closure
      const isManualClosure =
        !pathname.includes("/about") &&
        !pathname.includes("/project") &&
        !pathname.includes("/contact");
      if (isManualClosure) {
        router.push("/");
      }
    }
  }, [tabs, pathname, router]);

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
        selectedSkills,
        setSelectedSkills,
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
