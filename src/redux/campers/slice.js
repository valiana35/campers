import { createSlice } from "@reduxjs/toolkit";
import { getCampers } from "./operations";

const campersSlice = createSlice({
  name: "advert",
  initialState: { items: [], isLoading: false, error: null },
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
      }),
});

export const campersReducer = campersSlice.reducer;

