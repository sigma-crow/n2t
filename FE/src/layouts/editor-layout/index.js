import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Editor from '@/components/editor';
import Preview from '@/components/preview';
import {getNoteById} from '@api';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  min-height: calc(100vh - 5rem);
`;

const EditorLayout = ({props}) => {
  // const buf = Buffer.from('noteContext');
  const {match} = props;
  const {idx} = match.params;
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    getNoteById(idx).then((data) => {
      const {noteContext} = data.note;
      setInputText(noteContext);
    });
  }, []);
  return (
    <Wrapper>
      <Editor props={{inputText, setInputText, idx}} />
      <Preview inputText={inputText} />
    </Wrapper>
  );
};

export default EditorLayout;
