import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface stateType {
  id: string;
  token: string;
}

const initialState: stateType = {
  id: "",
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addCredential: (state, action: PayloadAction<stateType>) => {
      const { id, token } = action.payload;
      state.id = id;
      state.token = token;
    },
    removeCredential: (state) => {
      state.id = "";
      state.token = "";
    },
  },
});

export const { addCredential, removeCredential } = authSlice.actions;
export default authSlice.reducer;
