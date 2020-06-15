import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const WarningPage = ({ alert, setAlert }) => {
  const handleClose = () => {
    setAlert(false);
  };

  return (
    <>
      <Dialog
        open={alert}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Warning!'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Going back will lose any changes you have made to this story so far.
            Are you sure you want to quit?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            No
          </Button>
          <Button onClick={handleClose} component={Link} to="/" color="primary">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default WarningPage;
