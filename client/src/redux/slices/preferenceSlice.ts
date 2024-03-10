import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface stateType {
  cities: string[];
}

const initialState: stateType = {
  cities: [],
};

const preferenceSlice = createSlice({
  name: "preference",
  initialState,
  reducers: {
    addPreference: (state, action: PayloadAction<string>) => {
      const newCity = action.payload;
      if (!state.cities.includes(newCity) && state.cities.length < 4) {
        state.cities.push(newCity);
      }
    },
    removePreference: (state, action: PayloadAction<string>) => {
      const removeCity = action.payload;
      if (state.cities.includes(removeCity) && state.cities.length > 0) {
        state.cities = state.cities.filter((city) => city !== removeCity);
      }
    },
  },
});

export const { addPreference, removePreference } = preferenceSlice.actions;
export default preferenceSlice.reducer;
