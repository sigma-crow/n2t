import React from 'react';
import styled from 'styled-components';
import {AiOutlineBold} from 'react-icons/ai';
import ButtonBorder from '@/components/toolbar/buttonBorder';

const ButtonWrapper = styled.button`
  all: unset;
  cursor: pointer;
  padding: 5px 10px;
  height: auto;
  width: auto;
  position: relative;
`;

const BoldBtn = () => {
  return (
    <>
      {/* <Line /> */}
      <ButtonWrapper>
        <ButtonBorder />
        <AiOutlineBold size='20px' color='#ffffff' />
      </ButtonWrapper>
    </>
  );
};
export default BoldBtn;
