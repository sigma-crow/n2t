import React from 'react';
import styled from 'styled-components';
import Header from '@components/header';
import SearchSharedLayout from '@/layouts/shared-layout';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: auto;
`;
const HeaderWrapper = styled.div`
  height: 80px;
`;

const SearchSharedPage = () => {
  return (
    <Container>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <SearchSharedLayout />
    </Container>
  );
};

export default SearchSharedPage;
