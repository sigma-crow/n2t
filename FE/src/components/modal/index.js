import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import styled from 'styled-components';

const DropDownMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 192px;
  margin-top: 3px;
  border-radius: 4px;
  text-align: center;
  background-color: #a3a19b;
`;
const Menu = styled.div`
  text-decoration: none;
  color: #fff;
  transition: all 0.3s ease-in;
  font-size: medium;
  padding: 4px;
`;
const Wrapper = styled.div`
  text-decoration: none;
  &:hover {
    background: #c7c4bb;
  }
  &:active {
    background: #c7c4bb;
  }
`;
const Modal = (props) => {
  const [noteTitle, setTitle] = React.useState({title: '', content: ''});
  const handleChange = (e) => {
    setTitle({...noteTitle, [e.target.name]: e.target.value});
  };
  const addNote = () => {
    props.addNote(todo);
    handleClose();
  };
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <DropDownMenuContainer>
        <Wrapper onClick={handleClickOpen}>
          <Menu>Private</Menu>
        </Wrapper>
      </DropDownMenuContainer>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>New Note</DialogTitle>
        <DialogContent>
          <TextField
            value={noteTitle.title}
            onChange={handleChange}
            name='title'
            label='노트 이름'
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color='primary'>
            Cancel
          </Button>
          <Button autoFocus onClick={addNote} color='primary'>
            추가
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default Modal;
