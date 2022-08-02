import { configureStore } from "@reduxjs/toolkit";

// Slices
import artworksSlice from "./artworksSlice";
import globalSlice from "./globalSlice";

const mainStore = configureStore({
  reducer: {
    global: globalSlice.reducer,
    artworks: artworksSlice.reducer,
  },
});

export default mainStore;
