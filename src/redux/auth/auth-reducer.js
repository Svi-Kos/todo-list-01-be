import { createReducer } from '@reduxjs/toolkit';
import { signin, logout, refreshUser } from 'redux/auth/auth-operations';

const initState = {
  user: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  authError: null,
};

const authReducer = createReducer(initState, builder => {
  builder
    .addCase(signin.fulfilled, (state, { payload }) => ({
      ...state,
      user: payload.userName,
      token: payload.token,
      isLoggedIn: true,
      isRefreshing: false,
    }))
    .addCase(signin.pending, state => ({
      ...state,
      isRefreshing: true,
      authError: null,
    }))
    .addCase(signin.rejected, (state, action) => ({
      ...state,
      authError: action.payload,
    }))
    .addCase(logout.fulfilled, () => initState)
    .addCase(logout.pending, state => ({ ...state, authError: null }))
    .addCase(logout.rejected, (state, action) => ({
      ...state,
      authError: action.payload,
    }))
    .addCase(refreshUser.fulfilled, (state, { payload }) => ({
      ...state,
      user: payload.userName,
      token: payload.token,
      isLoggedIn: true,
      isRefreshing: false,
    }))
    .addCase(refreshUser.pending, state => ({
      ...state,
      isRefreshing: true,
      authError: null,
    }))
    .addCase(refreshUser.rejected, (state, action) => ({
      ...state,
      authError: action.payload,
    }));
});

export default authReducer;
