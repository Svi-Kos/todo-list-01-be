import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/todos/todos-actions';
import TextField from '@mui/material/TextField';
import s from './Filter.module.css';

function Filter() {
  const filter = useSelector(state => state.todos.filter);
  const dispatch = useDispatch();

  return (
    <div className={s.TodoFilter}>
      <TextField
        id="outlined-basic"
        label="Find task"
        variant="outlined"
        autoComplete="off"
        value={filter}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
}

export default Filter;
