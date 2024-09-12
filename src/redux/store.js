import { configureStore } from "@reduxjs/toolkit";
import { advertsReducer } from "./campers/slice";
import { favoriteReducer } from "./favoritesCampers/slice";
import { filterReducer } from "./filterCampers/slice";

export const store = configureStore({
  reducer: {
    adverts: advertsReducer,
    favorite: favoriteReducer,
    filters: filterReducer,
  },
});
