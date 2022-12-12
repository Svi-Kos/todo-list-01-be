import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  addTodo,
  deleteTodo,
  toggleCompleted,
  toggleImportant,
  changeFilter,
  assignTodo,
  editTodo,
  clearTodo,
} from './todos-actions';

export const items = createReducer([], builder => {
  builder
    .addCase(addTodo, (state, { payload }) => [payload, ...state])
    .addCase(deleteTodo, (state, { payload }) =>
      state.filter(({ id }) => id !== payload),
    )
    .addCase(toggleCompleted, (state, { payload }) =>
      state.map(todo =>
        todo.id === payload ? { ...todo, completed: !todo.completed } : todo,
      ),
    )
    .addCase(toggleImportant, (state, { payload }) =>
      state.map(todo =>
        todo.id === payload ? { ...todo, important: !todo.important } : todo,
      ),
    )
    .addCase(editTodo, (state, { payload }) =>
      state.map(todo =>
        todo.id === payload.id ? { ...todo, text: payload.text } : todo,
      ),
    );
});

export const filter = createReducer('', builder => {
  builder.addCase(changeFilter, (_, { payload }) => payload);
});

const initState = { id: '', text: '' };
export const todoToEdit = createReducer(initState, builder => {
  builder
    .addCase(assignTodo, (state, { payload }) => ({
      id: payload.id,
      text: payload.text,
    }))
    .addCase(clearTodo, () => initState);
});

export default combineReducers({
  items,
  filter,
  todoToEdit,
});
