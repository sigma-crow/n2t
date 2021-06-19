import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(0, 3),
    },
  },
}));

const FolderBtn = (props) => {
  const classes = useStyles();
  const [folder, setFolder] = useState({folderName: ''});
  const handleChange = (e) => {
    setFolder({...folder, [e.target.name]: e.target.value});
  };
  const addFolder = () => {
    props.addFolder(folder);
    handleClose();
    setFolder({folderName: ''});
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className={classes.root}>
        <Button
          size='small'
          variant='contained'
          disableElevation
          onClick={handleOpen}
        >
          add folder
        </Button>
      </div>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>New Folder</DialogTitle>
        <DialogContent>
          <TextField
            value={folder.folderName}
            onChange={handleChange}
            name='folderName'
            label='폴더 이름'
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color='primary'>
            취소
          </Button>
          <Button autoFocus onClick={addFolder} color='primary'>
            추가
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FolderBtn;
