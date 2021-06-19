import React from 'react';
import styled from 'styled-components';
import {AiOutlineHighlight} from 'react-icons/ai';
import ButtonBorder from '@/components/toolbar/buttonBorder';

const ButtonWrapper = styled.button`
  all: unset;
  cursor: pointer;
  padding: 5px 10px;
  height: auto;
  width: auto;
  position: relative;
`;

const HighlightBtn = () => {
  return (
    <>
      {/* <Line /> */}
      <ButtonWrapper>
        <ButtonBorder />
        <AiOutlineHighlight size='20px' color='#ffffff' />
      </ButtonWrapper>
    </>
  );
};
export default HighlightBtn;
