import React from 'react';
import styled from 'styled-components';
import {StrToHtml} from '@components/Markdown-it/render';

const Wrapper = styled.div`
  height: auto;
  background: #f2f2f2;
  flex: 1;
  float: right;
  padding: 1rem;
  overflow: auto;
`;

const Preview = ({inputText}) => {
  return (
    <>
      <Wrapper>
        <StrToHtml inputText={inputText} />
      </Wrapper>
    </>
  );
};

export default Preview;
