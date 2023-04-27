import { createSlice } from "@reduxjs/toolkit";
import { AppReduxState } from "../../interfaces";

const initialState: AppReduxState = {
  colorTheme: "light",
  isModalOpen: false,
  snackbar: false,
};
export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAppTheme: (state, action) => {
      state.colorTheme = action.payload;
    },
    setModalStatus: (state, action) => {
      state.isModalOpen = action.payload;
    },
    setSnackBarStatus: (state, action) => {
      state.snackbar = action.payload;
    },
  },
});

export const { setAppTheme, setModalStatus, setSnackBarStatus } =
  appSlice.actions;

export default appSlice.reducer;
