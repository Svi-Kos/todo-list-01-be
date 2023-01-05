import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearTodo } from 'redux/todos/todos-actions';
import { fetchTodos } from 'redux/todos/todos-operations';
import { getVisibleTodos, getTodoToEdit } from 'redux/todos/todos-selectors';
import Container from 'components/Container';
import TodoList from 'components/TodoList';
import TodoEditor from 'components/TodoEditor';
import BasicModal from 'components/Modal';
import Filter from 'components/Filter';
import DefaultMsg from 'components/DefaultMsg';
import Stats from 'components/Stats';

function App() {
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
    <Container>
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
    </Container>
  );
}

export default App;
