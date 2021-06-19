import React, {useState} from 'react';
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
  const [inputText, setInputText] = useState('');
  return (
    <Wrapper>
      <Editor props={{inputText, setInputText}} />
      <Preview inputText={inputText} />
    </Wrapper>
  );
};

export default EditorLayout;
