import React from 'react';
import styled from 'styled-components';
import Editor from '@/components/editor';
import Preview from '@/components/preview';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  min-height: calc(100vh - 5rem);
`;

const EditorLayout = () => {
  return (
    <Wrapper>
      <Editor />
      <Preview />
    </Wrapper>
  );
};

export default EditorLayout;
