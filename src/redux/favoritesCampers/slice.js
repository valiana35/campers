import { createSlice } from "@reduxjs/toolkit";

const favoritesCampersSlice = createSlice({
  name: "favorite",
  initialState: {
    adverts: [],
  },
  redusers: {
    toggleFavorite(state, action) {
      const index = state.adverts.findIndex(
        (advert) => advert._id === action.payload._id
      );
      if (index === -1) {
        state.adverts.push(action.payload);
      } else {
        state.adverts.splice(index, 1);
      }
    },
  },
});
export const { toggleFavorite } = favoritesCampersSlice.actions;
export const favoriteReduser = favoritesCampersSlice.reducer;
