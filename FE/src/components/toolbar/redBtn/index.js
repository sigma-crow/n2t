import React from 'react';
import styled from 'styled-components';
import {FaCircle} from 'react-icons/fa';
import ButtonBorder from '@/components/toolbar/buttonBorder';

const ButtonWrapper = styled.button`
  all: unset;
  cursor: pointer;
  padding: 5px 10px;
  height: auto;
  width: auto;
  position: relative;
`;

const BlueBtn = () => {
  return (
    <>
      {/* <Line /> */}
      <ButtonWrapper>
        <ButtonBorder />
        <FaCircle size='20px' color='red' />
      </ButtonWrapper>
    </>
  );
};
export default BlueBtn;
