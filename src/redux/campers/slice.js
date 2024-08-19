import { createSlice } from "@reduxjs/toolkit";
import { getCampers } from "./operations";

const campersSlice = createSlice({
  name: "advert",
  initialState: { advert: [], isLoading: false, error: null },
  extraReducers: (builder) =>
    builder
      .addCase(getCampers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.advert = action.payload;
      })
      .addCase(getCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const campersReducer = campersSlice.reducer;
