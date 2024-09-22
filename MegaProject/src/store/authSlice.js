import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
      // state.userData = action.payload;
    },
    logout: (state) => {
      state.status = falsae;
      state.userData = null;
    },
  },
});

export const { login, logout } = authSlice.actions; // actions means methods in reducer
export default authSlice.reducer;
