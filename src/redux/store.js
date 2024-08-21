import { configureStore } from "@reduxjs/toolkit";
import { advertsReducer } from "./campers/slice";

export const store = configureStore({
  reducer: {
    adverts: advertsReducer,
  },
});
