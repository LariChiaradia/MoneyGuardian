import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  user: "",
  senha: "",
  token: "",
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
    logout(state) {
      state.token = "";
    },
    setEmailUser(state, action){
      state.user = action.payload;
    },
    setPassword(state, action){
      state.senha = action.payload;
    },
    setName(state, action){
      state.name = action.payload;
    },
    
  },
});

export default authSlice.reducer;
export const { setEmailUser, setPassword, setName } = authSlice.actions;
export const selectUser = (state) => state.user;
