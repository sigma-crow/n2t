import React from 'react';
import styled from 'styled-components';
import {FaCircle} from 'react-icons/fa';

const ButtonWrapper = styled.button`
  all: unset;
  cursor: pointer;
  // padding: 5px 10px;
  padding: 5px 7px;
  height: auto;
  width: auto;
  &:hover,
  &:active {
    border: 1px solid white;
    border-radius: 5px;
  }
  margin: 0 2px;
`;

const BlueBtn = ({onClick}) => {
  return (
    <>
      <ButtonWrapper onClick={onClick}>
        <FaCircle size='20px' color='blue' />
      </ButtonWrapper>
    </>
  );
};
export default BlueBtn;
