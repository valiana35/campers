import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66be628174dfc195586f59e6.mockapi.io";

export const getCampers = createAsyncThunk(
  "campers/getCampers",
  async ({ limit, page }, thunkAPI) => {
    try {
      const res = await axios.get("/advert", {
        params: {
          limit,
          page,
        }
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCamperById = createAsyncThunk(
  "campers/getCamper",
  async (_id, thunkAPI) => {
    try {
      const res = await axios.get(`/advert/${_id}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);