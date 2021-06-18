import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 300px;
  height: 120px;
  background: #e0d4ca;
  border-radius: 10px;
  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
    0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
  margin: 40px 30px;
`;

const Title = styled.div`
  font-size: ${({theme}) => theme.fontSize.sm};
  font-weight: ${({theme}) => theme.fontWeight.bold};
  color: black;
  width: 200px;
  height: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-left: 40px;
  padding-top: 25px;
`;

const Writer = styled.div`
  float: right;
  font-size: ${({theme}) => theme.fontSize.s};
  font-weight: ${({theme}) => theme.fontWeight.regular};
  color: black;
  width: 90px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-right: 25px;
  padding-top: 10px;
`;

const Note = ({note}) => {
  return (
    <Wrapper>
      <Title>{note.title}</Title>
      <Writer>{note.writer}</Writer>
    </Wrapper>
  );
};

export default Note;
