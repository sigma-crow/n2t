import React, {useState} from 'react';
import styled from 'styled-components';
import SearchBar from '@/components/searchShared/searchBar';
import Note from '@/components/searchShared/note';
import {useHistory} from 'react-router-dom';

const Wrapper = styled.div`
  margin: 150px auto;
  width: 100%;
  height: 100%;
  background: #fffaf6;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Result = styled.div`
  height: 620px;
  width: 85%;
  margin: 0 auto;
  overflow: hidden;
  padding: 20px 30px;
  display: grid;
  grid-auto-flow: row;
  justify-content: center;
  align-content: start;
  place-items: center;
  grid-template-rows: 180px;
  grid-auto-columns: 350px;
  grid-template-columns: repeat(auto-fill, minmax(auto, 350px));
`;

const MoreBtn = styled.button`
  all: unset;
  cursor: pointer;
  margin: 10px auto;
  text-align: center;
  border: 2px solid #aa856a;
  border-radius: 25px;
  background: #ffffff;
  color: #aa856a;
  width: 150px;
  height: 40px;
  font-size: 15px;
  font-weight: bold;
  &:hover,
  &:active {
    background: #aa856a;
    color: #ffffff;
  }
`;

const Line = styled.div`
  margin: 0 auto;
  width: 80%;
  border-bottom: 2px solid #aa856a;
`;

const SearchSection = ({filteredNotes}) => {
  const history = useHistory();
  const filtered = filteredNotes.map((note) => (
    <Note key={note.note_idx} note={note} />
  ));

  const onViewMore = () => {
    history.push('/searchShared');
  };
  return (
    <Wrapper>
      <SearchBar props={{init: '', isMain: true}} />
      <Line />
      <Result>{filtered}</Result>
      <Line />
      <MoreBtn onClick={onViewMore}>View All</MoreBtn>
    </Wrapper>
  );
};

export default SearchSection;
