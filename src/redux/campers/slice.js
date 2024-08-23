import { createSlice } from "@reduxjs/toolkit";
import { getCampers, getCampersPage } from "./operations";

const advertsSlice = createSlice({
  name: "adverts",
  initialState: { adverts: [], isLoading: false, error: null, isAllLoad: false },
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
      })
      .addCase(getCampersPage.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCampersPage.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        if (payload.length === 0) {
          state.isAllLoad = true;
        } else {
          state.adverts.push(...payload);
          if (payload.length < 4) {
            state.isAllLoad = true;
          }
        }
      })
      .addCase(getCampersPage.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      }),
});

export const advertsReducer = advertsSlice.reducer;
