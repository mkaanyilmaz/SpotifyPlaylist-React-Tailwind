import { createSlice } from "@reduxjs/toolkit";

export const playlist = createSlice({
  name: "playlist",
  initialState: {
    playlistSongs: undefined,
  },
  reducers: {
    addPlaylist: (state, action) => {
      state.playlistSongs = action.payload;
    },
  },
});

export const { addPlaylist } = playlist.actions;

export default playlist.reducer;
