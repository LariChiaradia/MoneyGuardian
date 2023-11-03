import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  name: "Jhones",
  email: "",
  password: "",
  token: "",
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
    logout(state) {
      state.name = "";
      state.email = "";
      state.password = "";
      state.token = "";
    },
  },
});

export default authSlice.reducer;
export const { setEmail, setPassword } = authSlice.actions;
export const selectUser = (state) => state.user;
