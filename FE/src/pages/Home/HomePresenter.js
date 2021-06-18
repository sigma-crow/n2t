import React from 'react';
import styled from 'styled-components';
import SectionOne from '@/layouts/Home/SectionOne';
import GifSection from '@/layouts/Home/GifSection';
import SectionSearch from '../../layouts/Home/SectionSearch';

const Container = styled.div`
  background: #fffaf6;
  padding: 0px 40px;
  display: flex;
  flex: 2 2 2;
  flex-direction: column;
`;

const HomePresenter = () => (
  <Container>
    <SectionOne />
    <SectionSearch />
    <GifSection />
  </Container>
);

export default HomePresenter;
