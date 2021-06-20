import React, {useEffect, useState} from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import MarkdownIt from 'markdown-it';
import styled from 'styled-components';
import custom from '../custom_rule/index';

const background = '#ffffff';

const Wrapper = styled.form``;

let md = new MarkdownIt();
md = custom(md);
const Grading = () => {
  const history = useHistory();
  const location = useLocation();
  if (!location.state) {
    window.location.replace('/');
  }
  const {correctAnswer, answer, inputText} = location.state;

  const tmp = `
    <style type = "text/css">
      #test{
        display:inline;
        color: #003366;
        font-weight:bold;
        font-size: 1.2em;
        border: 0px;
        background:${background};
        text-decoration:line-through;
        text-decoration-color: #B22222;
        border-bottom: 2px #B22222 solid;
        text-align: center;
      }
    </style>
  `;

  const [loading, setLoading] = useState('hidden');
  const wrapStyle = {
    visibility: loading,
  };

  useEffect(() => {
    if (correctAnswer.length === 0) {
      alert('비정상적인 접근입니다.');
      history.goBack();
    }
    const testList = document.querySelectorAll('test');
    const boundary = document.getElementById('boundary');
    const maxWidth = boundary.offsetWidth;
    let count = 0;
    testList.forEach((testTag) => {
      const answerBox = testTag.lastChild;
      const textBox = testTag.firstChild;
      if (answer[count] === correctAnswer[count]) {
        textBox.style.display = 'none';
      } else {
        const answerWidth = answerBox.offsetWidth;
        textBox.value = answer[count];
        textBox.disabled = true;
        textBox.style.width = `${2 * answerWidth}px`;
        textBox.style.maxWidth = `${maxWidth * 0.7}px`;
        answerBox.style.display = 'none';
      }

      count += 1;
    });
    setLoading('visible');
  }, []);

  const result = md.render(inputText);
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

export default Grading;
