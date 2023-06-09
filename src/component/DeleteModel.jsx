import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function KeepMountedModal({open, onClose, handleDelete, data}) {


  return (
    <div>
      
      <Modal
      open={open}
      onClose={onClose}
        keepMounted
     
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            Are you confirm to delete this ? 
          </Typography>
          <div>
          <Button onClick={()=>handleDelete(data)}>Confirm</Button>
          <Button onClick={onClose}>Cancel</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}