import { createSlice } from "@reduxjs/toolkit";
import { AppReduxState } from "../../interfaces";

const initialState: AppReduxState = {
  colorTheme: "light",
};
export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAppTheme: (state, action) => {
      state.colorTheme = action.payload;
    },
  },
});

export const { setAppTheme } = appSlice.actions;

export default appSlice.reducer;
