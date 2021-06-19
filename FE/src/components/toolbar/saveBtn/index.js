import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  all: unset;
  cursor: pointer;
  text-align: center;
  line-height: center;
  background-color: transparent;
  color: white;
  width: auto;
  height: 30px;
  font-size: 17px;
  padding: 0 10px;
  margin: 0 2px;
  &:hover,
  &:active {
    border: 1px solid white;
    border-radius: 5px;
  }
`;

const MoreBtn = ({onClick}) => {
  return (
    <>
      <ButtonWrapper onClick={onClick}>SAVE</ButtonWrapper>
    </>
  );
};
export default MoreBtn;
