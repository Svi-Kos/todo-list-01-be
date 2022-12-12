import React from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import s from './Stats.module.css';

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Stats() {
  const todos = useSelector(state => state.todos.items);

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

  return (
    <div className={s.stats}>
      <Stack direction="row" spacing={2}>
        <Item>All: {todos.length}</Item>
        <Item>In progress: {inProgressTodos}</Item>
        <Item>Completed: {completedTodos}</Item>
        <Item>Important: {importantTodos}</Item>
      </Stack>
    </div>
  );
}

export default Stats;
