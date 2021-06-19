import React, {useEffect, useState} from 'react';
import MarkdownIt from 'markdown-it';
import styled from 'styled-components';
import custom from '../custom_rule/present';

const Wrapper = styled.form``;

let md = new MarkdownIt();
md = custom(md);
const StrToHtml = ({inputText}) => {
  const [result, setResult] = useState('');

  useEffect(() => {
    setResult(md.render(inputText));
  }, [inputText]);
  return (
    <Wrapper>
      <div dangerouslySetInnerHTML={{__html: result}} />
    </Wrapper>
  );
};

export default StrToHtml;
