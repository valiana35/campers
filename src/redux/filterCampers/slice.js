import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    location: "",
    equipment: {
        airConditioner: 0,
        automatic: "",
        kitchen: 0,
        TV: 0,
        shower: 0,
    },
    type: "",
  },
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setDetails: (state, action) => {
      state.equipment.airConditioner = action.payload;
      state.equipment.automatic = action.payload;
      state.equipment.kitchen = action.payload;
      state.equipment.TV = action.payload;
      state.equipment.shower = action.payload;
    },
    setForm: (state, action) => {
      state.type = action.payload;
    },
  },
});

export const { setLocation, setDetails, setForm } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
