import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import RegisterPage from './signform';

const ModalDialog = ({open, handleClose}) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <RegisterPage handleClose={handleClose} />
    </Dialog>
  );
};

export default ModalDialog;
