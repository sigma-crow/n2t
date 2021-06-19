import styled from 'styled-components';
import {FaPlus} from 'react-icons/fa';
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

const NewLabel = styled.div`
  color: #987c7c;
  display: inline-flex;
  text-decoration: none;
  height: 100%;
  width: 90%;
  margin-left: -10px;
  line-height: 42px;
  font-weight: bold;
  font-size: large;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  &:hover {
    background: #c7c4bb;
  }
  span {
    margin-left: 15px;
    margin-right: 20px;
    font-size: 20px;
  }
`;
const NewNoteBtn = (props) => {
  const [note, setNote] = React.useState({title: ''});
  const handleChange = (e) => {
    setNote({...note, [e.target.name]: e.target.value});
  };
  const addNote = () => {
    props.addNote(note);
    handleClose();
    setNote({title: ''});
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
      <NewLabel onClick={handleOpen}>
        <span>
          <FaPlus />
        </span>
        New
      </NewLabel>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>New Note</DialogTitle>
        <DialogContent>
          <TextField
            value={note.title}
            onChange={handleChange}
            name='title'
            label='노트 이름'
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color='primary'>
            취소
          </Button>
          <Button autoFocus onClick={addNote} color='primary'>
            추가
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default NewNoteBtn;
