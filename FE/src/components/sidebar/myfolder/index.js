import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import styled, {ThemeProvider} from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #0000;
  margin-top: 10px;
  color: white;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 48px;
  background: #82634c;
  margin-top: 10px;
  color: white;
`;

const SubWrapper = styled.div`
  width: 100%;
  height: 48px;
  background: #aa856a;
  color: white;
`;
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0, 0),
  },
}));

function ListItemLink(props) {
  return <ListItem button component='a' {...props} />;
}

const MyFolder = () => {
  const classes = useStyles();
  return (
    <Container>
      <Wrapper>
        <List
          className={classes.root}
          component='nav'
          aria-label='main mailbox folders'
        >
          <ListItem button>
            <ListItemText primary='MyFoler' />
          </ListItem>
        </List>
      </Wrapper>
      <SubWrapper>
        <List
          className={classes.root}
          component='nav'
          aria-label='secondary mailbox folders'
        >
          <ListItemLink href='#simple-list'>
            <ListItemText primary='Option1' />
          </ListItemLink>
        </List>
      </SubWrapper>
      <SubWrapper>
        <List
          className={classes.root}
          component='nav'
          aria-label='secondary mailbox folders'
        >
          <ListItemLink href='#simple-list'>
            <ListItemText primary='Option2' />
          </ListItemLink>
        </List>
      </SubWrapper>
    </Container>
  );
};

export default MyFolder;
