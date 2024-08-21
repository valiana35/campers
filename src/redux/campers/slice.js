import { createSlice } from "@reduxjs/toolkit";
import { getCampers } from "./operations";

const advertsSlice = createSlice({
  name: "adverts",
  initialState: { adverts: [], isLoading: false, error: null },
  extraReducers: (builder) =>
    builder
      .addCase(getCampers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.adverts = action.payload;
      })
      .addCase(getCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const advertsReducer = advertsSlice.reducer;
