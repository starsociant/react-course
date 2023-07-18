import { createSlice } from "@reduxjs/toolkit";
import { UserActions, UserInterface } from "./types";

const initialState: { user: UserInterface | null } = {
  user: null,
};

const userReducer = createSlice({
  name: "users",
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = null;
    },
  },
});

export const { login, logout } = userReducer.actions;

export default userReducer.reducer;
