import React from 'react';
// import Todo from 'components/Todo';
import s from './TodoList.module.css';

function TodoList({ todos }) {
  return (
    <ul className={s.todoList}>
      {todos.map(({ id, text, completed, important }) => (
        <li
          key={id}
          className={`${s.item} ${completed ? `${s.itemCompleted}` : ''}`}
        >
          <p>{text}</p>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
