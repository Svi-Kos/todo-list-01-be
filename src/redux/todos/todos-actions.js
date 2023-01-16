import { createAction } from '@reduxjs/toolkit';

export const changeFilter = createAction('todos/changeFilter');

export const assignTodo = createAction(
  'todos/assignTodo',
  function prepare(id, text, completed, important) {
    return {
      payload: {
        id,
        text,
      },
    };
  },
);

export const clearTodo = createAction('todos/clearTodo');
