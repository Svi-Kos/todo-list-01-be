import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, editTodo } from 'redux/todos/todos-operations';
import { getTodoToEdit } from 'redux/todos/todos-selectors';
import { Button, Alert, Stack, TextField } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';

function TodoEditor({ onSave }) {
  const todoToEdit = useSelector(getTodoToEdit);
  const { id, text } = todoToEdit;

  const [message, setMessage] = useState(text ? text : '');
  const [info, setInfo] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    if (message.trim() === '') {
      setInfo(true);
    } else {
      text
        ? dispatch(
            editTodo({
              _id: id,
              text: message,
            }),
          )
        : dispatch(addTodo(message));

      setInfo(false);
      onSave();
      setMessage('');
    }
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
          startIcon={text ? <EditIcon /> : <AddCircleIcon />}
        >
          {text ? 'Edit text' : 'Add task'}
        </Button>
      </Stack>
    </form>
  );
}

export default TodoEditor;
