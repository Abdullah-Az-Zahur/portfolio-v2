import { configureStore } from "@reduxjs/toolkit";
import tabsReducer from "./features/tabs/tabsSlice";
import projectsReducer from "./features/projects/projectsSlice";

export const store = configureStore({
  reducer: {
    tabs: tabsReducer,
    projects: projectsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
