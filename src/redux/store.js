import { configureStore } from "@reduxjs/toolkit";
import { advertsReducer } from "./campers/slice";
import { favoriteReduser } from "./favoritesCampers/slice";

export const store = configureStore({
  reducer: {
    adverts: advertsReducer,
    favorite: favoriteReduser,
  },
});
