import { configureStore } from "@reduxjs/toolkit";
import tabsReducer from "./features/tabs/tabsSlice";
import skillsReducer from "./features/skills/skillsSlice";

export const store = configureStore({
  reducer: {
    tabs: tabsReducer,
    skills: skillsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
