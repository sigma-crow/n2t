import React from 'react';
import styled from 'styled-components';
import SearchBar from '@/components/searchShared/searchBar';
import Content from '@/components/searchShared/content';

const Wrapper = styled.div`
  background: #fffaf6;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  overflow: hidden;
`;

const SearchSharedLayout = () => {
  return (
    <Wrapper>
      <SearchBar />
      <Content />
    </Wrapper>
  );
};

export default SearchSharedLayout;
