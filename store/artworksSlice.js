import { createSlice } from "@reduxjs/toolkit";
import { getFilename, titleIt } from "../utilCode/neutralFuncs";

const artworksSlice = createSlice({
  name: "artworksSlice",
  initialState: {
    loaded: {},
    preloadedCats: [],
    requested: { data: null, err: null },
  },
  reducers: {
    load: (state, action) => {
      // action.payload >>> {id: string, .....other attributes about artwork}
      // DON'T USE THIS REDUCER DIRECTLY, RATHER USE THE THUNK BELOW
      for (const item of action.payload) {
        state.loaded[item.id] = item;
      }
    },
    catPreloaded: (state, action) => {
      state.preloadedCats.push(action.payload);
    },
  },
});

export const artworksActions = artworksSlice.actions;

function hydrateArtworkObjects(artworksArr) {
  // adds some attributes to artwork objects if not present
  return artworksArr.map((a) => {
    let [fName, ftype] = getFilename(a.src).split(".");

    let { title = titleIt(fName), pallets = [], type = ftype, ...others } = a;

    return { title, pallets, type, ...others };
  });
}

export function loadArtworks(artworksArray) {
  return (dispatch, getStore) => {
    const loadedArtworks = getStore().artworks.loaded;
    const newArtworks = artworksArray.filter((a) => !(a.id in loadedArtworks));
    if (newArtworks.length > 0) {
      dispatch(artworksActions.load(hydrateArtworkObjects(newArtworks)));
    }
  };
}

export default artworksSlice;
