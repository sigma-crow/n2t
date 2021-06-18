import React from 'react';
import MarkdownIt from 'markdown-it';
import styled from 'styled-components';
import custom from '../custom_rule/present';

const Wrapper = styled.form``;

let md = new MarkdownIt();
md = custom(md);
const StrToHtml = ({txt}) => {
  const result = md.render(txt);
  return (
    <Wrapper>
      <div dangerouslySetInnerHTML={{__html: result}} />
    </Wrapper>
  );
};

export default StrToHtml;
