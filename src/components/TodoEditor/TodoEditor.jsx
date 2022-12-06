import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Alert from '@mui/material/Alert';

function TodoEditor({ onSubmit }) {
  const [message, setMessage] = useState('');
  const [info, setInfo] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    if (message === '') {
      setInfo(true);
    } else {
      onSubmit(message);
      setInfo(false);
    }

    setMessage('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          {info && <Alert severity="warning">Enter text.</Alert>}

          <TextField
            id="outlined-basic"
            variant="outlined"
            value={message}
            onChange={e => setMessage(e.currentTarget.value)}
          />

          <Button
            type="submit"
            variant="contained"
            startIcon={<AddCircleIcon />}
          >
            Add task
          </Button>
        </Stack>
      </form>
    </>
  );
}

export default TodoEditor;
