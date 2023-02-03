import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://todolist-back-end-01-r2f4.vercel.app/api/v1';

export const register = createAsyncThunk('auth/signin', async credentials => {
  return axios
    .get('/auth/signin', credentials)
    .then(({ data }) => data.result)
    .catch(error => error);
});
