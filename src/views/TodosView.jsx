import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleTodos, getTodoToEdit } from 'redux/todos/todos-selectors';
import { fetchTodos } from 'redux/todos/todos-operations';
import { clearTodo } from 'redux/todos/todos-actions';
import BasicModal from 'components/Modal';
import TodoEditor from 'components/TodoEditor';
import Stats from 'components/Stats';
import DefaultMsg from 'components/DefaultMsg';
import Filter from 'components/Filter';
import TodoList from 'components/TodoList';

const TodosView = () => {
  const [showModal, setShowModal] = useState(false);
  const todos = useSelector(getVisibleTodos);
  const todoToEdit = useSelector(getTodoToEdit);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  function toggleModal() {
    setShowModal(prev => !prev);
    if (todoToEdit.text) {
      dispatch(clearTodo());
    }
  }

  return (
    <>
      <BasicModal onModalClose={toggleModal} showModal={showModal}>
        <TodoEditor onSave={toggleModal} />
      </BasicModal>

      <Stats />

      {todos.length === 0 ? (
        <DefaultMsg />
      ) : (
        <>
          <Filter />
          <TodoList toggleModal={toggleModal} todos={todos} />
        </>
      )}
    </>
  );
};

export default TodosView;
