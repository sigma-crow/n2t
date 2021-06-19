import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width : auto;
  height:100%;
  min-width:300px;
  align content:flex-start;
  border-right: 2px solid;
  border-radius: 0;
  border-color: #5f4837;
  padding-top: 50px;
  display:flex;
  flex-direction:column;
`;

const Title = styled.div`
  height: 40px;
  width: auto;
  line-height: 40px;
  margin: 0 auto;
  margin-bottom: 8px;
  font-size: ${({theme}) => theme.fontSize.sm};
  font-weight: ${({theme}) => theme.fontWeight.bold};
  border-bottom: 2px solid #5f4837;
  border-radius: 0;
`;

const Category = styled.div`
  height: 40px;
  width: auto;
  line-height: 50px;
  padding-left: 60px;
  margin-top: 8px;
  font-size: ${({theme}) => theme.fontSize.xs};
  font-weight: ${({theme}) => theme.fontWeight.bold};
`;

const onClick = (e) => {};

const SideBar = ({categories}) => {
  const category = categories.map((categories) => (
    <Category key={categories.id} value={categories.name} onClick={onClick}>
      {categories.name}
    </Category>
  ));
  return (
    <Wrapper>
      <Title>카테고리</Title>
      {category}
    </Wrapper>
  );
};

export default SideBar;
