import React from 'react';
import styled from 'styled-components';
import Note from '@/components/searchShared/note';

const Wrapper = styled.div`
  padding: 20px 30px;
  display: grid;
  grid-auto-flow: row;
  justify-content: center;
  align-content: start;
  place-items: center;
  grid-template-rows: 180px;
  grid-auto-columns: 350px;
  gird-auto-rows: 180px;
  grid-template-columns: repeat(auto-fill, minmax(auto, 350px));
`;

const SearchResult = ({filteredNotes}) => {
  const filtered = filteredNotes.map((note) => (
    <Note key={note.id} note={note} />
  ));
  return <Wrapper>{filtered}</Wrapper>;
};

export default SearchResult;
