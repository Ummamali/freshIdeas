import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
  name: "globalSlice",
  initialState: {},
  reducers: {},
});

export const globalActions = globalSlice.actions;

export default globalSlice;
