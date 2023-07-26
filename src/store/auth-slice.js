import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  token: null,
  name: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.name = action.payload.name;
    },

    logout(state) {
      state.isLoggedIn = false;
      state.token = null;
      state.name = null;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
