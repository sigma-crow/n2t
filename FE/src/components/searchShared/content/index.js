import React from 'react';
import styled from 'styled-components';
import SideBar from '@/components/searchShared/sideBar';
import Scroll from '@/components/searchShared/scroll';
import SearchResult from '@/components/searchShared/SearchResult';

import category from '@/data/categories';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #fffaf6;
  border-top: 2px solid;
  border-radius: 0;
  border-color: #5f4837;
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

const ResultWrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const Content = ({props}) => {
  const {notes} = props;
  return (
    <Wrapper>
      <SideBar categories={category} />
      <ResultWrapper>
        <Scroll>
          <SearchResult filteredNotes={notes} />
        </Scroll>
      </ResultWrapper>
    </Wrapper>
  );
};

export default Content;
