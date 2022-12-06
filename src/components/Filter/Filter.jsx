import React from 'react';
import TextField from '@mui/material/TextField';
import s from './Filter.module.css';

function Filter({ filter, onFilterChange }) {
  return (
    <div className={s.TodoFilter}>
      <TextField
        id="outlined-basic"
        label="Find task"
        variant="outlined"
        value={filter}
        onChange={onFilterChange}
      />
    </div>
  );
}

export default Filter;
