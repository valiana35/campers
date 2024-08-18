import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66be628174dfc195586f59e6.mockapi.io";

export const getCampers = createAsyncThunk(
  "campers/getCampers",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/advert");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
