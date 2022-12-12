import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, editTodo } from 'redux/todos/todos-actions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import Alert from '@mui/material/Alert';

function TodoEditor({ onSave }) {
  const todoToEditText = useSelector(state => state.todos.todoToEdit.text);
  const todoToEditId = useSelector(state => state.todos.todoToEdit.id);
  const [message, setMessage] = useState(todoToEditText ? todoToEditText : '');
  const [info, setInfo] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    if (message === '') {
      setInfo(true);
    } else {
      todoToEditText
        ? dispatch(editTodo(todoToEditId, message))
        : dispatch(addTodo(message));

      setInfo(false);
    }
    onSave();
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2}>
        {info && <Alert severity="warning">Enter text.</Alert>}

        <TextField
          id="outlined-basic"
          variant="outlined"
          autoComplete="off"
          value={message}
          onChange={e => setMessage(e.currentTarget.value)}
        />

        <Button
          type="submit"
          variant="contained"
          startIcon={todoToEditText ? <EditIcon /> : <AddCircleIcon />}
        >
          {todoToEditText ? 'Edit text' : 'Add task'}
        </Button>
      </Stack>
    </form>
  );
}

export default TodoEditor;
