import { configureStore } from "@reduxjs/toolkit";
import aiDataSliceReducer from "../slices/dashboardSlice";

export const store = configureStore({
  reducer: {
    aiData: aiDataSliceReducer,
  },
});
