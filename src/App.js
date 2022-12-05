import React, { useState, useEffect } from 'react';
// import shortid from 'shortid';
import Container from 'components/Container';
import TodoList from 'components/TodoList';
import TodoEditor from 'components/TodoEditor';
import BasicModal from 'components/Modal';

function App() {
  const [todos, setTodos] = useState([
    {
      id: '1',
      text: 'test1',
      completed: true,
      important: true,
    },
  ]);
  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal(prev => !prev);
  }

  return (
    <Container>
      <BasicModal onModalClose={toggleModal} showModal={showModal}>
        <TodoEditor
          onSubmit={x => {
            console.log(x);
          }}
        />
      </BasicModal>

      <TodoList todos={todos} />
    </Container>
  );
}

export default App;
