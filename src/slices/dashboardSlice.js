import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  insightSummary: {},
  categoryDistribution: {},
  responseTimes: { day_wise: [], week_wise: [] },
  userSatisfaction: { ratings: [] },
  usageStatistics: { by_platform: {}, by_country: {} },
};

// Slice
const aiDataSlice = createSlice({
  name: "aiData",
  initialState,
  reducers: {
    setInsightSummary: (state, action) => {
      state.insightSummary = action.payload;
    },
    setCategoryDistribution: (state, action) => {
      state.categoryDistribution = action.payload;
    },
    setResponseTimes: (state, action) => {
      state.responseTimes = action.payload;
    },
    setUserSatisfaction: (state, action) => {
      state.userSatisfaction = action.payload;
    },
    setUsageStatistics: (state, action) => {
      state.usageStatistics = action.payload;
    },
  },
});

// Actions
export const {
  setInsightSummary,
  setCategoryDistribution,
  setResponseTimes,
  setUserSatisfaction,
  setUsageStatistics,
} = aiDataSlice.actions;

export default aiDataSlice.reducer;
