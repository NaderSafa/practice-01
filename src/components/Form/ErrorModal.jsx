import { Modal, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: '#eee',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

const ErrorModal = ({ open, msg, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <Typography id='modal-modal-title' variant='h6' component='h2'>
          Error
        </Typography>
        <Typography id='modal-modal-description' sx={{ mt: 2 }}>
          {msg}
        </Typography>
      </Box>
    </Modal>
  )
}

export default ErrorModal
