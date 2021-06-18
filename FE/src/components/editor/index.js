import React from 'react';
import styled from 'styled-components';
import Textarea from '@/components/textarea';
import Toolbar from '@/components/toolbar';

const Wrapper = styled.div`
  height: auto;
  background: e5e5e5;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Editor = () => {
  return (
    <Wrapper>
      <Toolbar />
      <Textarea />
    </Wrapper>
  );
};

export default Editor;
