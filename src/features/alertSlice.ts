import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AlertState {
  message: string | null;
}

const initialState: AlertState = {
  message: null,
};

export const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    setAlert: (state, { payload }: PayloadAction<string>) => {
      state.message = payload;
    },
    resetAlert: (state) => {
      state.message = null;
    },
  },
});

export const { setAlert, resetAlert } = alertSlice.actions;

export default alertSlice.reducer;
