import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";

export interface AuthState {
  isUserCreated: boolean;
  isAuthenticated: boolean;
  user: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  } | null;
}

const initialState: AuthState = {
  isUserCreated: false,
  isAuthenticated: false,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    createUser: (state, action: PayloadAction<any>) => {
      state.isUserCreated = true;
      state.user = action.payload;
    },
  },
});

export const { login, logout, createUser } = authSlice.actions;

export const selectUser = (state: RootState) => state.auth.user;
export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;
export const selectIsUserCreated = (state: RootState) =>
  state.auth.isUserCreated;

export default authSlice.reducer;
