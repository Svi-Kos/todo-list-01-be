import * as React from 'react';
import { Box, Button, Modal } from '@mui/material';
import AddTaskIcon from '@mui/icons-material/AddTask';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ showModal, onModalClose, children }) {
  const handleOpen = () => onModalClose();
  const handleClose = () => onModalClose();

  return (
    <div>
      <Button
        variant="contained"
        startIcon={<AddTaskIcon />}
        onClick={handleOpen}
      >
        New task
      </Button>
      <Modal
        open={showModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{children}</Box>
      </Modal>
    </div>
  );
}
