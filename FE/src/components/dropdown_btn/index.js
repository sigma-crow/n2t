import React, {useState} from 'react';
import styled, {ThemeProvider} from 'styled-components';
import {FaChevronDown} from 'react-icons/fa';
// import {FaPlus} from 'react-icons/fa';
import Modal from '@/components/modal';
import NewNoteBtn from '@/components/newnote_btn';

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
const DropdownBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  return (
    <Nav>
      <Dropbtn>
        <NewNoteBtn />
        <DropDownContainer onClick={toggling}>
          <span>
            <FaChevronDown />
          </span>
        </DropDownContainer>
      </Dropbtn>
      {isOpen && <Modal />}
    </Nav>
  );
};

export default DropdownBtn;
