import { createSlice } from "@reduxjs/toolkit";

interface alertState {
  message: string | null;
}

const initialState: alertState = {
  message: "",
};

export const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    setAlert: (state, { payload }) => {
      state.message = payload;
    },
  },
});

export const { setAlert } = alertSlice.actions;

export default alertSlice.reducer;
