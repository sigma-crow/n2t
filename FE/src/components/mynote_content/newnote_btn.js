import styled from 'styled-components';
import {FaPlus} from 'react-icons/fa';
import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import {createNote} from '@api/';

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
  const {isPublic, setSend} = props;
  const [open, setOpen] = useState(false);
  const [note, setNote] = useState({title: ''});
  const handleChange = (e) => {
    setNote({...note, [e.target.name]: e.target.value});
  };
  const addNote = () => {
    createNote({isPublic, noteName: note.title}).then((data) => {
      const {result, message} = data;
      if (!result) {
        alert(message);
      }
    });
    setNote({title: ''});
    handleOpenClose();
    setSend(true);
  };

  const handleOpenClose = () => {
    setOpen(!open);
  };

  return (
    <>
      <NewLabel onClick={handleOpenClose}>
        <span>
          <FaPlus />
        </span>
        New
      </NewLabel>
      <Dialog onClose={handleOpenClose} open={open}>
        <DialogTitle>New Public Note</DialogTitle>
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
          <Button autoFocus onClick={handleOpenClose} color='primary'>
            취소
          </Button>
          <Button autoFocus onClick={addNote} color='primary'>
            {/* 여기서 노트 추가 */}
            추가
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default NewNoteBtn;
