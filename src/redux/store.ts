import { configureStore } from "@reduxjs/toolkit";
import tabsReducer from "./features/tabs/tabsSlice";

export const store = configureStore({
  reducer: {
    tabs: tabsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
