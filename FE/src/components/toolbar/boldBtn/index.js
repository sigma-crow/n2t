import React from 'react';
import styled from 'styled-components';
import {AiOutlineBold} from 'react-icons/ai';

const ButtonWrapper = styled.button`
  all: unset;
  cursor: pointer;
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

const BoldBtn = ({onClick}) => {
  return (
    <>
      <ButtonWrapper onClick={onClick}>
        <AiOutlineBold size='20px' color='#ffffff' />
      </ButtonWrapper>
    </>
  );
};
export default BoldBtn;
