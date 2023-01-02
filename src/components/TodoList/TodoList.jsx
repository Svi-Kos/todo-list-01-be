import React from 'react';
import { useDispatch } from 'react-redux';
import { assignTodo } from 'redux/todos/todos-actions';
import { deleteTodo, editTodo } from 'redux/todos/todos-operations';
import Todo from 'components/Todo';
import s from './TodoList.module.css';

function TodoList({ toggleModal, todos }) {
  const dispatch = useDispatch();

  return (
    <ul className={s.todoList}>
      {todos.map(({ _id, text, completed, important }) => (
        <li
          key={_id}
          className={`${s.item} ${completed ? `${s.itemCompleted}` : ''}`}
        >
          <Todo
            text={text}
            completed={completed}
            important={important}
            onToggleCompleted={() =>
              dispatch(
                editTodo({ _id, text, completed: !completed, important }),
              )
            }
            onToggleImportant={() =>
              dispatch(
                editTodo({ _id, text, completed, important: !important }),
              )
            }
            onDelete={() => dispatch(deleteTodo(_id))}
            onEdit={() => dispatch(assignTodo(_id, text, completed, important))}
            toggleModal={toggleModal}
          />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
