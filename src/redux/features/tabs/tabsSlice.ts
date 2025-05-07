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
  },
});

export const { addTab } = tabsSlice.actions;
export default tabsSlice.reducer;
