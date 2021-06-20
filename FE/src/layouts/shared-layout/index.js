import React, {useState} from 'react';
import styled from 'styled-components';
import SearchBar from '@/components/searchShared/searchBar';
import Content from '@/components/searchShared/content';
import queryString from 'query-string';
import {useLocation} from 'react-router-dom';

const Wrapper = styled.div`
  background: #fffaf6;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  overflow: hidden;
`;

const SearchSharedLayout = () => {
  const location = useLocation();
  const [notes, setNotes] = useState([]);
  const query = queryString.parse(location.search);
  let init = '';
  if (query.n) {
    init = query.n;
  }

  return (
    <Wrapper>
      <SearchBar props={{init, isMain: false, setNotes}} />
      <Content props={{notes}} />
    </Wrapper>
  );
};

export default SearchSharedLayout;
