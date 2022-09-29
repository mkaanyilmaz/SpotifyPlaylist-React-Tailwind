import { createSlice } from "@reduxjs/toolkit";

export const devices = createSlice({
  name: "devices",
  initialState: {
    devices: undefined,
  },
  reducers: {
    addDevices: (state, action) => {
      state.devices = action.payload;
    },
  },
});

export const { addDevices } = devices.actions;

export default devices.reducer;
