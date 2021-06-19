import React from 'react';
import styled from 'styled-components';
import Footer from '@/components/comman/Footer';
import SectionOne from '@/layouts/Home/SectionOne';
import GifSection from '@/layouts/Home/GifSection';
import notes from '@/data/notes';

import SearchSection from '@/layouts/Home/SearchSection';

const Container = styled.div`
  background: #fffaf6;
  padding: 0px 40px;
  display: flex;
  flex: 2 2 2;
  flex-direction: column;
`;

const HomePresenter = () => (
  <>
    <Container>
      <SectionOne />
      <SearchSection filteredNotes={notes} />
      <GifSection />
    </Container>
    <Footer />
  </>
);

export default HomePresenter;
