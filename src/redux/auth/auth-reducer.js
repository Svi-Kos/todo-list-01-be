import { createReducer } from '@reduxjs/toolkit';
// import { } from 'redux/auth/auth-operations';

const initState = {
  user: null,
  token: null,
  isLoggedIn: false,
};
const authReducer = createReducer(initState, () => {});

export default authReducer;
