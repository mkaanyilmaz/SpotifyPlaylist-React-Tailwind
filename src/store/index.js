import { configureStore } from "@reduxjs/toolkit";
import playlistReducer from "./playlist";
import tracklistReducer from "./trackLists";
import currentTrackReducer from "./currentTrack";
import devicesReducer from "./devices";

export default configureStore({
  reducer: {
    playlist: playlistReducer,
    tracklist: tracklistReducer,
    currentTrack: currentTrackReducer,
    devices: devicesReducer,
  },
});
