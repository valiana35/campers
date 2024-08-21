import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66be628174dfc195586f59e6.mockapi.io";

export const getCampers = createAsyncThunk(
  "adverts/getCampers",
  async ({ limit, page }, thunkAPI) => {
    try {
      const { data } = await axios.get("/adverts", {
        params: {
          limit,
          page,
        },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
