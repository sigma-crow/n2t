import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import styled, {ThemeProvider} from 'styled-components';
import FolderBtn from '../folderBtn';

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

const ListWrapper = styled.div`
  width: 100%;
  height: 48px;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 400px;
  margin-top: 10px;
  align-items: flex-end;
  background: #5f4837;
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
  const [folders, setFolders] = useState([]);

  const addFolder = (folder) => {
    setFolders([folder, ...folders]);
    folder.folderName;
  };

  const folderList = folders.map((item, id) => (
    <SubWrapper key={id}>
      <ListItemLink>
        <ListItemText>{item.folderName}</ListItemText>
      </ListItemLink>
    </SubWrapper>
  ));
  return (
    <Container>
      <ContentWrapper>
        <FolderBtn addFolder={addFolder} />
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
        {/* <SubWrapper> */}
        <ListWrapper>
          <List
            className={classes.root}
            component='nav'
            aria-label='secondary mailbox folders'
          >
            {folderList}
          </List>
        </ListWrapper>

        {/* </SubWrapper> */}
        {/* <SubWrapper>
        <List
          className={classes.root}
          component='nav'
          aria-label='secondary mailbox folders'
        >
          <ListItemLink href='#simple-list'>
            <ListItemText primary='Folder2' />
          </ListItemLink>
        </List>
      </SubWrapper> */}
      </ContentWrapper>
    </Container>
  );
};

export default MyFolder;
