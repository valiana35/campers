import { createSlice } from "@reduxjs/toolkit";
import { getCamperById, getCampers } from "./operations";

const campersSlice = createSlice({
  name: "campers",
  initialState: { items: [], camper: null, isLoading: false, error: null },
  extraReducers: (builder) =>
    builder
      .addCase(getCampers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(getCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getCamperById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCamperById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.camper = action.payload;
        // state.items.find(camper => camper._id === action.payload._id);
      })
      .addCase(getCamperById.rejected, (state) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const campersReducer = campersSlice.reducer;
