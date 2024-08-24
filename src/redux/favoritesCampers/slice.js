import { createSlice } from "@reduxjs/toolkit";

const favoritesCampersSlice = createSlice({
  name: "favorite",
  initialState: {
    adverts: JSON.parse(localStorage.getItem("favorite")) || [],
  },
  reducers: {
    toggleFavorite(state, action) {
      if (state.adverts.includes(action.payload)) {
        state.adverts = state.adverts.filter(_id => _id !== action.payload);
      } else {
        state.adverts.push(action.payload);
      }
      localStorage.setItem("favorite", JSON.stringify(state.adverts));
    },
  },
});
export const { toggleFavorite } = favoritesCampersSlice.actions;
export const favoriteReduser = favoritesCampersSlice.reducer;