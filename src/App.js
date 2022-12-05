import React, { useState, useEffect } from 'react';
// import shortid from 'shortid';
import Container from 'components/Container';
import TodoList from 'components/TodoList';

function App() {
  const [todos, setTodos] = useState([
    {
      id: '1',
      text: 'test1',
      completed: true,
      important: false,
    },
  ]);

  return (
    <Container>
      <TodoList todos={todos} />
    </Container>
  );
}

export default App;
