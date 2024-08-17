import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: [],
};

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    getAllJobs: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { getAllJobs } = jobSlice.actions;

export default jobSlice.reducer;
