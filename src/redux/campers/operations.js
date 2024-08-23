import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66be628174dfc195586f59e6.mockapi.io";
axios.defaults.params = {
  limit: 4,
};

export const getCampers = createAsyncThunk(
  "adverts/getCampers",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/adverts?&page=1");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCampersPage = createAsyncThunk(
  "adverts/getCampersPage",
  async (page, thunkAPI) => {
    try {
      const { data } = await axios.get(`/adverts?&page=${page}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
