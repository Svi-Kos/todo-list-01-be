import React from 'react';
import { Checkbox, Tooltip, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import EditIcon from '@mui/icons-material/Edit';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Todo({
  text,
  completed,
  onToggleCompleted,
  onToggleImportant,
  onDelete,
  onEdit,
  important,
  toggleModal,
}) {
  const handleClick = () => {
    toggleModal();
    onEdit();
  };

  return (
    <>
      <Checkbox {...label} checked={completed} onChange={onToggleCompleted} />

      <Typography variant="body1" marginRight="auto">
        {text}
      </Typography>

      <Tooltip title="Marc as important">
        <Checkbox
          {...label}
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon color="warning" />}
          sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
          checked={important}
          onChange={onToggleImportant}
        />
      </Tooltip>

      <Tooltip title="Edit">
        <IconButton
          aria-label="edit"
          size="large"
          color="primary"
          onClick={handleClick}
        >
          <EditIcon fontSize="inherit" />
        </IconButton>
      </Tooltip>

      <Tooltip title="Delete">
        <IconButton
          aria-label="delete"
          size="large"
          color="primary"
          onClick={onDelete}
        >
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </Tooltip>
    </>
  );
}

export default Todo;
