import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Footer from '@/components/comman/Footer';
import SectionOne from '@/layouts/Home/SectionOne';
import GifSection from '@/layouts/Home/GifSection';
import {getPublicNotes} from '@/api';

import SearchSection from '@/layouts/Home/SearchSection';

const Container = styled.div`
  background: #fffaf6;
  padding: 0px 40px;
  display: flex;
  flex: 2 2 2;
  flex-direction: column;
`;

const HomePresenter = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    getPublicNotes({query: ''}).then((data) => {
      const {notes} = data;
      setNotes([...notes]);
    });
  }, []);
  return (
    <>
      <Container>
        <SectionOne />
        <SearchSection filteredNotes={notes} />
        <GifSection />
      </Container>
      <Footer />
    </>
  );
};

export default HomePresenter;
