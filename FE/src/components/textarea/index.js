import React, {useState} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
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
  resize: none;
`;

const Textarea = () => {
  const [inputText, setInputText] = useState('');
  const [num, setNum] = useState(1);
  const [lines, setLines] = useState([]);
  const [line, setLine] = useState([]);

  const onChange = (e) => {
    setInputText(e.target.value);
    console.log('Test');
    console.log(inputText);

    let tmp = [];
    tmp = inputText.split('\n');
    setLine(inputText.split('\n'));
    let tmpArray = [];
    let tmpNum = 0;
    // for (let i = 0; i < num; i++) {
    //   if (line[i].length >= 140) {
    //     tmpNum = parseInt(line[i].length / 140);
    //     for (let j = 0; j < tmpNum; j++) tmpArray.push(<div>' '</div>);
    //     console.log(line[i].length + 1, parseInt((line[i].length + 1) / 147));
    //   }
    // }

    console.log(num);
    // let tmpArray = [];
    for (let i = 0; i < num; i++) {
      tmpArray.push(<div>{i + 1}</div>);
      let total = 0;
      for (let j = 0; j < line[i].length; j++) {
        const each_char = line[i].charAt(j);
        const uni_char = escape(each_char);
        if (uni_char.length > 4) total += 2;
        else total += 1;
      }
      if (total > 100) {
        tmpNum = parseInt(total / 10);
        for (let j = 0; j < tmpNum; j++) tmpArray.push(<div>&nbsp;</div>);
      }

      // if (line[i].length >= 50) {
      //   tmpNum = parseInt(line[i].length / 50);
      //   for (let j = 0; j < tmpNum; j++) tmpArray.push(<div>&nbsp;</div>);
      // }
      // console.log(lines);
    }
    let tmpArray2 = [1];
    let cnt = 1;
    for (let i = 0; i < inputText.length; i++) {
      if (inputText.charAt(i) == '\n') {
        cnt++;
        tmpArray2.push(<div>{cnt}</div>);
      }
    }

    setLines(tmpArray2);
    setNum(inputText.split('\n').length);
  };

  return (
    <Wrapper>
      <LineNum>{lines}</LineNum>
      <TextArea
        autoFocus={false}
        onChange={onChange}
        // value={value}
      ></TextArea>
    </Wrapper>
  );
};

export default Textarea;
