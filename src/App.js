import React, { useState, useEffect } from 'react';
import shortid from 'shortid';
import Container from 'components/Container';
import TodoList from 'components/TodoList';
import TodoEditor from 'components/TodoEditor';
import BasicModal from 'components/Modal';
import Filter from 'components/Filter';
import DefaultMsg from 'components/DefaultMsg';
import Stats from 'components/Stats';

function App() {
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem('todos')) ?? [];
  });
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState('');

  const normalizedFilter = filter.toLowerCase();

  const visibleTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(normalizedFilter),
  );

  const completedTodos = todos.reduce(
    (total, todo) => (todo.completed ? total + 1 : total),
    0,
  );

  const importantTodos = todos.reduce(
    (total, todo) => (todo.important ? total + 1 : total),
    0,
  );

  const inProgressTodos = todos.reduce(
    (total, todo) => (!todo.completed ? total + 1 : total),
    0,
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function toggleModal() {
    setShowModal(prev => !prev);
  }

  function addTodo(text) {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
      important: false,
    };

    setTodos(prev => [todo, ...prev]);

    toggleModal();
  }

  function deleteTodo(todoId) {
    setTodos(prev => prev.filter(todo => todo.id !== todoId));
  }

  function toggleCompleted(todoId) {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }

  function toggleImportant(todoId) {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === todoId ? { ...todo, important: !todo.important } : todo,
      ),
    );
  }

  function changeFilter(e) {
    setFilter(e.currentTarget.value);
  }

  return (
    <Container>
      <BasicModal onModalClose={toggleModal} showModal={showModal}>
        <TodoEditor onSubmit={addTodo} />
      </BasicModal>

      <Stats
        todos={todos}
        completedTodos={completedTodos}
        importantTodos={importantTodos}
        inProgressTodos={inProgressTodos}
      />

      {todos.length === 0 ? (
        <DefaultMsg />
      ) : (
        <>
          <Filter filter={filter} onFilterChange={changeFilter} />
          <TodoList
            todos={visibleTodos}
            onDeleteTodo={deleteTodo}
            onToggleCompleted={toggleCompleted}
            onToggleImportant={toggleImportant}
          />
        </>
      )}
    </Container>
  );
}

export default App;
