import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL =
  'https://TodoList-1-BE.svitlanakostenk.repl.co/api/v1/';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  return axios
    .get('/todos')
    .then(({ data }) => data)
    .catch(error => error);
});

export const addTodo = createAsyncThunk('todos/addTodo', async text => {
  const todo = { text, completed: false, important: false };
  return axios
    .post('/todos/new', todo)
    .then(({ data }) => data)
    .catch(error => error);
});

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async id => {
  return axios
    .delete(`/todos/${id}`)
    .then(() => id)
    .catch(error => error);
});

export const editTodo = createAsyncThunk('todos/editTodo', async param => {
  return axios
    .patch(`/todos/${param._id}`, param)
    .then(({ data }) => data)
    .catch(error => error);
});
