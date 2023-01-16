import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { changeFilter, assignTodo, clearTodo } from './todos-actions';
import {
  fetchTodos,
  addTodo,
  deleteTodo,
  editTodo,
} from 'redux/todos/todos-operations';

export const items = createReducer([], builder => {
  builder
    .addCase(fetchTodos.fulfilled, (_, action) => action.payload)
    .addCase(addTodo.fulfilled, (state, { payload }) => [payload, ...state])
    .addCase(deleteTodo.fulfilled, (state, { payload }) =>
      state.filter(({ _id }) => _id !== payload),
    )
    .addCase(editTodo.fulfilled, (state, { payload }) =>
      state.map(todo => (todo._id === payload._id ? payload : todo)),
    );
});

export const filter = createReducer('', builder => {
  builder.addCase(changeFilter, (_, { payload }) => payload);
});

const initStateForEdit = {
  id: '',
  text: '',
  completed: false,
  important: false,
};
export const todoToEdit = createReducer(initStateForEdit, builder => {
  builder
    .addCase(assignTodo, (state, { payload }) => ({
      id: payload.id,
      text: payload.text,
    }))
    .addCase(clearTodo, () => initStateForEdit);
});

const isLoading = createReducer(false, builder => {
  builder
    .addCase(fetchTodos.pending, () => true)
    .addCase(fetchTodos.fulfilled, () => false)
    .addCase(fetchTodos.rejected, () => false)
    .addCase(addTodo.pending, () => true)
    .addCase(addTodo.fulfilled, () => false)
    .addCase(addTodo.rejected, () => false)
    .addCase(deleteTodo.pending, () => true)
    .addCase(deleteTodo.fulfilled, () => false)
    .addCase(deleteTodo.rejected, () => false)
    .addCase(editTodo.pending, () => true)
    .addCase(editTodo.fulfilled, () => false)
    .addCase(editTodo.rejected, () => false);
});

const error = createReducer(null, builder => {
  builder
    .addCase(fetchTodos.pending, () => null)
    .addCase(fetchTodos.rejected, () => (_, action) => action.payload)
    .addCase(addTodo.pending, () => null)
    .addCase(addTodo.rejected, () => (_, action) => action.payload)
    .addCase(deleteTodo.pending, () => null)
    .addCase(deleteTodo.rejected, () => (_, action) => action.payload)
    .addCase(editTodo.pending, () => null)
    .addCase(editTodo.rejected, () => (_, action) => action.payload);
});

export default combineReducers({
  items,
  filter,
  todoToEdit,
  isLoading,
  error,
});
