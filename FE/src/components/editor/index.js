import React from 'react';
import styled from 'styled-components';
import Textarea from '@/components/textarea';
import Toolbar from '@/components/toolbar';
import {updateNote} from '@api';
import {useHistory} from 'react-router-dom';

const Wrapper = styled.div`
  height: auto;
  background: e5e5e5;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Editor = ({props}) => {
  const {inputText, setInputText, idx} = props;
  const history = useHistory();
  const onSave = () => {
    updateNote({noteContext: inputText, noteIdx: idx});
  };
  const goTest = () => {
    onSave();
    history.push({
      pathname: '/test',
      state: {inputText},
    });
  };
  return (
    <Wrapper>
      <Toolbar props={{onSave, goTest}} />
      <Textarea props={{inputText, setInputText, onSave}} />
    </Wrapper>
  );
};

export default Editor;
