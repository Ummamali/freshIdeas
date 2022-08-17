import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
  name: "globalSlice",
  initialState: { loadMore: false },
  reducers: {
    triggerLoad: (state) => {
      state.loadMore = true;
    },
  },
});

export const globalActions = globalSlice.actions;

export default globalSlice;
