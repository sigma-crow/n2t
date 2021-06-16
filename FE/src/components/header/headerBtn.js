import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  all: unset;
  cursor: pointer;
  font-size: ${({theme}) => theme.fontSize.xs};
  font-weight: ${({theme}) => theme.fontWeight.regular};
  padding: 10px;
`;

const Line = styled.div`
  height: 20px;
  border-left: 1px solid ${({theme}) => theme.color.white};
  margin-left: 10px;
`;
const HeaderBtn = ({text}) => {
  return (
    <>
      <Line />
      <ButtonWrapper>{text}</ButtonWrapper>
    </>
  );
};
export default HeaderBtn;
