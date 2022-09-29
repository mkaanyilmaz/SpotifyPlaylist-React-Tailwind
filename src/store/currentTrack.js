import { createSlice } from "@reduxjs/toolkit";

export const currentTrack = createSlice({
  name: "currentTrack",
  initialState: {
    currentTrack: undefined,
  },
  reducers: {
    addCurrentTrack: (state, action) => {
      state.currentTrack = action.payload;
    },
  },
});

export const { addCurrentTrack } = currentTrack.actions;

export default currentTrack.reducer;
