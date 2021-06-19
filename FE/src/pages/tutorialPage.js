import React from 'react';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core';
import styled from 'styled-components';
import Header from '@components/header';
import Footer from '@components/comman/Footer';
import ExplainContainer from '@components/tutorial/explain';
import ExampleContainer from '@components/tutorial/example';

const useStyles = makeStyles(() => ({
  rootContainer: {
    backgroundColor: '#FFFAF6',
    padding: 0,
    marginBottom: '50px',
  },
}));

const HeaderWrapper = styled.div`
  height: 80px;
`;

const TutorialPage = ({history}) => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.rootContainer} maxWidth='xl'>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <ExampleContainer />
        <ExplainContainer history={history} />
      </Container>
      <Footer />
    </>
  );
};

export default TutorialPage;
