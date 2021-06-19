import React from 'react';
import styled from 'styled-components';
import MyFolder from './myfolder';
import Account from './account';

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #5f4837;
`;
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 90px;
  top: 0px;
  background: #5f4837;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 400px;
  margin-top: 10px;
  align-items: flex-end;
  background: #5f4837;
`;

const SidebarPresenter = () => {
  return (
    <ListWrapper>
      <Wrapper>
        <Account />
      </Wrapper>
      <ContentWrapper>
        <MyFolder />
      </ContentWrapper>
    </ListWrapper>
  );
};

export default SidebarPresenter;
