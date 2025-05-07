import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Tab {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface TabsState {
  tabs: Tab[];
  activeTab: string | null;
}

const initialState: TabsState = {
  tabs: [],
  activeTab: null,
};

const tabsSlice = createSlice({
  name: "tabs",
  initialState,
  reducers: {
    addTab: (state, action: PayloadAction<Tab>) => {
      const existingTab = state.tabs.find(
        (tab) => tab.id === action.payload.id
      );
      if (!existingTab) {
        state.tabs.push(action.payload);
      }
      state.activeTab = action.payload.id;
    },
    removeTab: (state, action: PayloadAction<string>) => {
      state.tabs = state.tabs.filter((tab) => tab.id !== action.payload);
      if (state.activeTab === action.payload) {
        state.activeTab =
          state.tabs.length > 0 ? state.tabs[state.tabs.length - 1].id : null;
      }
    },
    setActiveTab: (state, action: PayloadAction<string>) => {
      state.activeTab = action.payload;
    },
    clearTabs: (state) => {
      state.tabs = [];
      state.activeTab = null;
    },
  },
});

export const { addTab, removeTab, setActiveTab, clearTabs } = tabsSlice.actions;
export default tabsSlice.reducer;
