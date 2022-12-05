import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Tooltip from '@mui/material/Tooltip';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Todo({
  text,
  completed,
  important,
  onDelete,
  onToggleCompleted,
  onToggleImportant,
}) {
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
