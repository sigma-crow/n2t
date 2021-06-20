import styled from 'styled-components';
import React, {useContext, useEffect} from 'react';
import Mynote from '@components/mynote_content';
import Sidebar from '@components/sidebar';
import Header from '@components/header';
import storageHandler from '@utils/localStorage';
import parseJwt from '@utils/parserJwt';
import {UserInfoContext} from '@hooks/userInfo';
import {isLogin} from '@/api';
import {useHistory} from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;
const HeaderWrapper = styled.div`
  height: 80px;
`;
const ListWrapper = styled.div`
  flex: 1.3;
  overflow: auto;
`;
const Wrapper = styled.div`
  background: #fffaf6;
  flex: 4;
`;

const MynotePage = () => {
  const history = useHistory();
  const {user, setUser} = useContext(UserInfoContext);
  useEffect(() => {
    const token = storageHandler.get();
    const {name, user_idx: userIdx, email} = parseJwt(token);
    setUser({
      ...user,
      name,
      userIdx,
      email,
    });
  }, []);

  return (
    <>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <Container>
        <ListWrapper>
          <Sidebar />
        </ListWrapper>
        <Wrapper>
          <Mynote />
        </Wrapper>
      </Container>
    </>
  );
};
export default MynotePage;
