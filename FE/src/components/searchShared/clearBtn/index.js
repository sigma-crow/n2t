import React from 'react';
import styled from 'styled-components';
import {MdClear} from 'react-icons/md';

const ButtonWrapper = styled.button`
  all: unset;
  cursor: pointer;
  padding: 5px;
  height: auto;
`;

const Line = styled.div`
  height: 95%;
  border-right: 1px solid #dfe1e5;
  margin-right: 5px;
`;

const ClearBtn = ({onClick}) => {
  return (
    <>
      <ButtonWrapper onClick={onClick}>
        <MdClear size='24px' color='#70757a' />
      </ButtonWrapper>
      <Line />
    </>
  );
};
export default ClearBtn;
