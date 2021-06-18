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

const DropdownMenu = (props) => {
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
    <div>
      <DropDownMenuContainer>
        <Wrapper onClick={handleOpen}>
          <Menu>Private</Menu>
        </Wrapper>
      </DropDownMenuContainer>

      <Dialog onClose={handleClose} open={open}>
        <DialogTitle it='form-dialog-title'>New Note</DialogTitle>
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
    </div>
  );
};
export default DropdownMenu;
