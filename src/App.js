import React, { useState, useEffect } from 'react';
import shortid from 'shortid';
import Container from 'components/Container';
import TodoList from 'components/TodoList';
import TodoEditor from 'components/TodoEditor';
import BasicModal from 'components/Modal';

function App() {
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem('todos')) ?? [];
  });
  const [showModal, setShowModal] = useState(false);

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

  return (
    <Container>
      <BasicModal onModalClose={toggleModal} showModal={showModal}>
        <TodoEditor onSubmit={addTodo} />
      </BasicModal>

      <TodoList
        todos={todos}
        onDeleteTodo={deleteTodo}
        onToggleCompleted={toggleCompleted}
        onToggleImportant={toggleImportant}
      />
    </Container>
  );
}

export default App;
