import { createSlice } from "@reduxjs/toolkit";

export const trackLists = createSlice({
  name: "trackLists",
  initialState: {
    trackLists: [],
  },
  reducers: {
    addTrackLists: (state, action) => {
      state.trackLists = action.payload;
    },
  },
});

export const { addTrackLists } = trackLists.actions;

export default trackLists.reducer;
