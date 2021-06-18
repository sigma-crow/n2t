import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
  all: unset;
  cursor: pointer;
  padding: 5px;
  height: 20px;
  width: 20px;
  &:hover,
  &:active {
    border: 1px solid #ffffff;
    border-radius: 5px;
  }
  position: absolute;
  top: 6px;
  left: 4px;
`;

const ButtonBorder = () => {
  return <Wrapper />;
};
export default ButtonBorder;
