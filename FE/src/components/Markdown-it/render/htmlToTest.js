import React, {useContext, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {SubmitContext} from '@hooks/SubmitAnswer';
import MarkdownIt from 'markdown-it';
import styled from 'styled-components';
import custom from '../custom_rule/index';

const background = '#ffffff';

const Wrapper = styled.form``;

let md = new MarkdownIt();
md = custom(md);
const HtmlToTest = ({txt}) => {
  const history = useHistory();
  const tmp = `
    <style type = "text/css">
      #test{
        display:inline;
        color: #003366;
        font-weight:bold;
        font-size: 1.2em;
        border: 0px;
        background:${background};
        border-bottom: 2px #000000 solid;
        text-align: center;
      }
    </style>
  `;

  const [loading, setLoading] = useState('hidden');
  const wrapStyle = {
    visibility: loading,
  };

  const {setAnswer, isClick, setClick, setCorrectAnswer} = useContext(
    SubmitContext,
  );

  useEffect(() => {
    if (isClick) {
      const answers = document.querySelectorAll('test');
      const tmp = [];
      answers.forEach((answer) => {
        tmp.push(answer.firstChild.value);
      });
      setAnswer(() => tmp);
      setClick(false);
      history.push('/result');
    }
  }, [isClick]);

  useEffect(() => {
    const testList = document.querySelectorAll('test');
    setClick(false);
    const tmp = [];
    const boundary = document.getElementById('boundary');
    const maxWidth = boundary.offsetWidth;

    testList.forEach((testTag) => {
      const answer = testTag.lastChild;
      const answerWidth = answer.offsetWidth;
      answer.style.display = 'none';
      const textBox = testTag.firstChild;
      tmp.push(answer.innerText);
      textBox.style.width = `${2 * answerWidth}px`;
      textBox.style.maxWidth = `${maxWidth * 0.7}px`;
    });
    setCorrectAnswer(() => tmp);
    setLoading('visible');
  }, []);

  const result = md.render(txt);
  return (
    <Wrapper id='answerForm'>
      <div
        className='test'
        style={wrapStyle}
        dangerouslySetInnerHTML={{__html: tmp + result}}
      />
    </Wrapper>
  );
};

export default HtmlToTest;
