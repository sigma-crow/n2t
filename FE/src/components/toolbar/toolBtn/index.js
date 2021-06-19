import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  all: unset;
  cursor: pointer;
  color: white;
  width: auto;
  height: auto;
  margin: 0 2px;
  border: 1px solid transparent;
  border-radius: 5px;
  &:hover,
  &:active {
    border-color: white;
  }
`;

const ToolBtn = ({onClick, children}) => {
  return (
    <>
      <ButtonWrapper onClick={onClick}>{children}</ButtonWrapper>
    </>
  );
};
export default ToolBtn;
