import React, {useState} from 'react';
import {FaChevronDown} from 'react-icons/fa';
import DropdownMenu from './dropdown_Menu';
import NewNoteBtn from './newnote_btn';
import styled from 'styled-components';
import Note from './note';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const ButtonWrapper = styled.div`
  flex: 1.3;
  align-self: flex-end;
  background: #fffaf6;
`;
const NoteWrapper = styled.div`
  background: #fffaf6;
  flex: 4;
  padding-right: 50px;
`;
const ListNote = styled.div`
  padding: 0px 0px 0px 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: space-around;
  height: '75vh'
  width: 100%;
`;
const Nav = styled.div`
  display: inline-block;
  width: 192px;
  height: 40px;
  margin-top: 30px;
  margin-right: 40px;
`;
const Dropbtn = styled.button`
  position: relative;
  display: inline-flex;
  outline: none;
  color: #987c7c;
  border: solid;
  background-color: #fffaf6;
  cursor: pointer;
  border-radius: 4px;
  width: 100%;
  height: 100%;
  padding: 0 10px;
`;
const DropDownContainer = styled.div`
  position: absolute;
  cursor: pointer;
  height: 100%;
  width: 20%;
  right: 0px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  &:hover {
    background: #c7c4bb;
  }
  &:active {
    background: #c7c4bb;
  }
  span {
    display: block;
    height: 100%;
    line-height: 45px;
    font-size: 20px;
    border-style: solid;
    border-radius: 4px;
    border-width: 0 0 0 1px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
  }
`;
const Title = styled.div`
  font-size: ${({theme}) => theme.fontSize.xs};
  font-weight: ${({theme}) => theme.fontWeight.bold};
  color: black;
  width: 190px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-left: 40px;
  padding-top: 25px;
`;
const NoteList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  const [notes, setNotes] = React.useState([]);

  const addNote = (note) => {
    setNotes([note, ...notes]);
    note.title;
  };

  const notesToList = notes.map((item, index) => (
    // <Wrapper key={index}>
    //   <Title>{item.title}</Title>
    // </Wrapper>
    <Note key={index}>
      <Title>{item.title}</Title>
    </Note>
  ));
  return (
    <Container>
      <ButtonWrapper>
        <Nav>
          <Dropbtn>
            <NewNoteBtn addNote={addNote} />
            <DropDownContainer onClick={toggling}>
              <span>
                <FaChevronDown />
              </span>
            </DropDownContainer>
          </Dropbtn>
          {isOpen && <DropdownMenu addNote={addNote} />}
        </Nav>
      </ButtonWrapper>
      <NoteWrapper>
        <ListNote>{notesToList}</ListNote>
      </NoteWrapper>
    </Container>
  );
};
export default NoteList;
