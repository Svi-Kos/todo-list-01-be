import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

export const addTodo = createAction('todos/add', function prepare(text) {
  return {
    payload: {
      id: shortid.generate(),
      text,
      completed: false,
      important: false,
    },
  };
});

export const deleteTodo = createAction('todos/delete');

export const toggleCompleted = createAction('todos/toggleCompleted');

export const toggleImportant = createAction('todos/toggleImportant');

export const editTodo = createAction(
  'todos/editTodo',
  function prepare(id, text) {
    return {
      payload: {
        id,
        text,
      },
    };
  },
);

export const changeFilter = createAction('todos/changeFilter');

export const assignTodo = createAction(
  'todos/assignTodo',
  function prepare(id, text) {
    return {
      payload: {
        id,
        text,
      },
    };
  },
);

export const clearTodo = createAction('todos/clearTodo');
