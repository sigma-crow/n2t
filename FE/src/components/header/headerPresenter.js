import React from 'react';
import styled from 'styled-components';
import tempLog from '@static/logo.png';
import HeaderBtn from './HeaderBtn';

const Wrapper = styled.div`
  height: 80px;
  padding: 7px 10%;
  color: white;
  background: ${({theme}) => theme.color.darkBrown};
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const LogBox = styled.div`
  cursor: pointer;
  padding: 50px;
  align-items: center;
  background: center / contain no-repeat url(${tempLog});
`;

const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderPresenter = () => {
  return (
    <>
      <Wrapper>
        <LogBox />
        <BtnWrapper>
          <HeaderBtn text='Tutorial' />
          <HeaderBtn text='Login' />
        </BtnWrapper>
      </Wrapper>
    </>
  );
};
export default HeaderPresenter;
