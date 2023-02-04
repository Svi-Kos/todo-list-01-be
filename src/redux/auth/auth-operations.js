import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://todolist-back-end-01-r2f4.vercel.app/api/v1';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const signin = createAsyncThunk(
  'auth/signin',
  async (credentials, { rejectWithValue }) => {
    return axios
      .post('/users/signin', credentials)
      .then(({ data }) => {
        token.set(data.result.token);
        return data.result;
      })
      .catch(error => rejectWithValue(error.response.data));
  },
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    return axios
      .get('/users/logout')
      .then(({ data }) => {
        token.unset();
        return data;
      })
      .catch(error => rejectWithValue(error.response.data));
  },
);

export const refreshUser = createAsyncThunk(
  'auth/current',
  async (_, { getState, rejectWithValue }) => {
    const persistedToken = getState().auth.token;
    if (persistedToken === null) {
      return rejectWithValue();
    }

    token.set(persistedToken);

    return axios
      .get('/users/current')
      .then(({ data }) => data.result)
      .catch(error => rejectWithValue(error.response.data));
  },
);
