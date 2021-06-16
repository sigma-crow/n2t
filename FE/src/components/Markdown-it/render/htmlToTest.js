import React, {useEffect, useState} from 'react';
import MarkdownIt from 'markdown-it';
import styled from 'styled-components';
import custom from '../custom_rule/index';

const background = '#ffffff';

const Wrapper = styled.form`
  width: 60%;
  padding: 50px;
  padding-bottom: 70px;
  margin-top: 20px;
  background: ${background};
  border-radius: 20px;
  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
    0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
`;

let md = new MarkdownIt();
md = custom(md);
const HtmlToTest = ({txt}) => {
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

  const [loding, setloding] = useState('hidden');
  const wrapStyle = {
    visibility: loding,
  };
  useEffect(() => {
    const testList = document.querySelectorAll('test');
    testList.forEach((testTag) => {
      const answer = testTag.lastChild;
      const answerWidth = answer.offsetWidth;
      answer.style.display = 'none';
      const textBox = testTag.firstChild;
      // const answerText = answer.innerText;
      // textBox.setAttribute('maxlength', `${answerText.length}`);
      textBox.style.width = `${answerWidth + answerWidth}px`;
    });
    setloding('visible');
  }, []);

  const result = md.render(txt);
  return (
    <Wrapper>
      <div
        className='test'
        style={wrapStyle}
        dangerouslySetInnerHTML={{__html: tmp + result}}
      />
    </Wrapper>
  );
};

export default HtmlToTest;
