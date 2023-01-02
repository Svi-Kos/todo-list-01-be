import React from 'react';
import { useDispatch } from 'react-redux';
import {
  deleteTodo,
  toggleCompleted,
  toggleImportant,
  assignTodo,
} from 'redux/todos/todos-actions';
import Todo from 'components/Todo';
import s from './TodoList.module.css';

function TodoList({ toggleModal, todos }) {
  const dispatch = useDispatch();

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
            onToggleCompleted={() => dispatch(toggleCompleted(id))}
            onToggleImportant={() => dispatch(toggleImportant(id))}
            onDelete={() => dispatch(deleteTodo(id))}
            onEdit={() => dispatch(assignTodo(id, text))}
            toggleModal={toggleModal}
          />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
