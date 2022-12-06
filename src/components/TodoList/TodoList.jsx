import React from 'react';
import Todo from 'components/Todo';
import s from './TodoList.module.css';

function TodoList({
  todos,
  onDeleteTodo,
  onToggleCompleted,
  onToggleImportant,
}) {
  return (
    <ul className={s.todoList}>
      {todos.map(({ id, text, completed, important }) => (
        <li
          key={id}
          className={`${s.item} ${completed ? `${s.itemCompleted}` : ''}`}
        >
          <Todo
            text={text}
            completed={completed}
            important={important}
            onDelete={() => onDeleteTodo(id)}
            onToggleCompleted={() => onToggleCompleted(id)}
            onToggleImportant={() => onToggleImportant(id)}
          />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
