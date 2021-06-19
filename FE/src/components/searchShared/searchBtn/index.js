import React from 'react';
import styled from 'styled-components';
import {AiOutlineSearch} from 'react-icons/ai';

const ButtonWrapper = styled.button`
  all: unset;
  cursor: pointer;
  padding: 5px 0px 5px 5px;
  height: auto;
`;

const SearchBtn = ({onClick}) => {
  return (
    <>
      {/* <Line /> */}
      <ButtonWrapper onClick={onClick}>
        <AiOutlineSearch size='24px' color='#5F4837' fontWeight='bold' />
      </ButtonWrapper>
    </>
  );
};
export default SearchBtn;
