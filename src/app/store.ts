import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../features/weather/weatherSlice";

export const store = configureStore({
  reducer: {
    weatherData: weatherReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
