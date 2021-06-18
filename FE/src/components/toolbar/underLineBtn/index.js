import React from 'react';
import styled from 'styled-components';
import {AiOutlineUnderline} from 'react-icons/ai';
import ButtonBorder from '../buttonBorder';

const ButtonWrapper = styled.button`
  all: unset;
  cursor: pointer;
  padding: 5px 10px;
  height: auto;
  width: auto;
  position: relative;
`;

const UnderlineBtn = () => {
  return (
    <>
      {/* <Line /> */}
      <ButtonWrapper>
        <ButtonBorder />
        <AiOutlineUnderline size='20px' color='#ffffff' />
      </ButtonWrapper>
    </>
  );
};
export default UnderlineBtn;
