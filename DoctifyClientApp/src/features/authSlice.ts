import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  token: string;
  navigateUser: boolean;
};

const initialState: InitialState = {
  token: "",
  navigateUser: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setNavigateUser: (state, action: PayloadAction<boolean>) => {
      state.navigateUser = action.payload;
    },
  },
});

export default authSlice.reducer;
export const { setToken, setNavigateUser } = authSlice.actions;
