import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

const Wrapper = styled.form`
  height: 100%;
  width: auto;
  display: flex;
  flex-direction: row;
`;

const LineNum = styled.div`
  height: 100%;
  width: 40px;
  padding-top: 10px;
  padding-right: 5px;
  background: #f1f1f1;
  line-height: 25px;
  font-size: 18px;
  text-align: right;
  font-weight: ${({theme}) => theme.fontWeight.regular};
  border-left: 1px solid ${({theme}) => theme.color.black};
`;

const TextArea = styled.textarea`
  height: 100%;
  width: 100%;
  outline: none;
  line-height: 25px;
  font-size: 18px;
  padding-left: 5px;
  padding-top: 10px;
  border-color: #ccc;
  // overflow-wrap: break-word;
  white-space: pre-line;
  resize: none;
`;

const Textarea = ({props}) => {
  // const [inputText, setInputText] = useState('');
  const {inputText, setInputText} = props;
  const [lineStr, setLineStr] = useState([]);

  useEffect(() => {
    const lines = inputText.split('\n');
    const tmpArray = [];
    for (let i = 0; i < lines.length; i += 1) {
      tmpArray.push(<div>{i + 1}</div>);
    }
    setLineStr(tmpArray);
  }, [inputText]);

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <Wrapper>
      <LineNum>{lineStr}</LineNum>
      <TextArea autoFocus={false} value={inputText} onChange={onChange} />
    </Wrapper>
  );
};

export default Textarea;
