"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import BioInfo from "@/components/About/PersonalInfo/Bio/BioInfo";

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

interface TabState {
  tabs: Tab[];
  activeTab: string | null;
}

type TabAction =
  | { type: "reset" }
  | { type: "add"; payload: Tab }
  | { type: "remove"; payload: string }
  | { type: "setActive"; payload: string };

const initialTabState: TabState = {
  tabs: [],
  activeTab: null,
};

const tabReducer = (state: TabState, action: TabAction): TabState => {
  switch (action.type) {
    case "reset":
      return initialTabState;
    case "add": {
      const existingTab = state.tabs.find(
        (tab) => tab.id === action.payload.id,
      );
      if (existingTab) {
        return {
          ...state,
          activeTab: action.payload.id,
        };
      }
      return {
        tabs: [...state.tabs, action.payload],
        activeTab: action.payload.id,
      };
    }
    case "remove": {
      const newTabs = state.tabs.filter((tab) => tab.id !== action.payload);
      const nextActiveTab =
        state.activeTab === action.payload
          ? newTabs.length > 0
            ? newTabs[newTabs.length - 1].id
            : null
          : state.activeTab;
      return {
        tabs: newTabs,
        activeTab: nextActiveTab,
      };
    }
    case "setActive":
      return {
        ...state,
        activeTab: action.payload,
      };
    default:
      return state;
  }
};

const TabContext = createContext<ContextType | undefined>(undefined);

export const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [tabState, dispatchTab] = useReducer(tabReducer, initialTabState);
  const [selectedSkills, setSelectedSkills] = useState<Set<string>>(new Set());
  const pathname = usePathname();
  const router = useRouter();

  const addTab = (tab: Tab) => {
    dispatchTab({ type: "add", payload: tab });
  };

  // Clear tabs when the route changes
  useEffect(() => {
    dispatchTab({ type: "reset" });
  }, [pathname]);

  // Add default tabs based on the route
  useEffect(() => {
    if (pathname.includes("/about")) {
      addTab({
        id: "bio",
        title: "Bio",
        content: <BioInfo />,
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
    if (tabState.tabs.length === 0 && pathname !== "/") {
      // Check if the tabs were cleared due to a route change or manual closure
      const isManualClosure =
        !pathname.includes("/about") &&
        !pathname.includes("/project") &&
        !pathname.includes("/contact");
      if (isManualClosure) {
        router.push("/");
      }
    }
  }, [tabState.tabs, pathname, router]);

  const removeTab = (id: string) => {
    dispatchTab({ type: "remove", payload: id });
  };

  const setActiveTab = (id: string) => {
    dispatchTab({ type: "setActive", payload: id });
  };

  return (
    <TabContext.Provider
      value={{
        tabs: tabState.tabs,
        addTab,
        removeTab,
        setActiveTab,
        activeTab: tabState.activeTab,
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
