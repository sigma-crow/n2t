import React from 'react';
import styled from 'styled-components';
import ToolBtn from '@/components/toolbar/toolBtn';
import {FaCircle} from 'react-icons/fa';
import {
  AiOutlineUnderline,
  AiOutlineHighlight,
  AiOutlineBold,
} from 'react-icons/ai';

const Wrapper = styled.div`
  margin: auto 0;
  width: 100%;
  background: #4f4f4f;
  flex: 0.1 50px;
  flex-direction: row;
  padding: 7px 15px 0px 10px;
  min-width: 400px;
`;

const RightSection = styled.div`
  display: flex;
  float: right;
  display: flex;
  flex-direction: row;
`;

const TextBtnWrapper = styled.div`
  text-align: center;
  line-height: 30px;
  background-color: transparent;
  height: 30px;
  font-size: 17px;
  padding: 0 10px;
  float: right;
`;

const Toolbar = ({props}) => {
  const {onSave, goTest} = props;
  const onBold = () => {
    console.log('bold');
  };
  const onHighlight = () => {
    console.log('highlight');
  };
  const onUnderline = () => {
    console.log('underline');
  };
  const onRed = () => {
    console.log('red');
  };
  const onBlue = () => {
    console.log('blue');
  };
  return (
    <Wrapper>
      <ToolBtn onClick={onBold}>
        <AiOutlineBold size='20px' style={{padding: '5px 7px'}} />
      </ToolBtn>
      <ToolBtn onClick={onHighlight}>
        <AiOutlineHighlight size='20px' style={{padding: '5px 7px'}} />
      </ToolBtn>
      <ToolBtn onClick={onUnderline}>
        <AiOutlineUnderline size='20px' style={{padding: '5px 7px'}} />
      </ToolBtn>
      <ToolBtn onClick={onRed}>
        <FaCircle size='20px' color='red' style={{padding: '5px 7px'}} />
      </ToolBtn>
      <ToolBtn onClick={onBlue}>
        <FaCircle size='20px' color='blue' style={{padding: '5px 7px'}} />
      </ToolBtn>

      <RightSection>
        <ToolBtn onClick={onSave}>
          <TextBtnWrapper>SAVE</TextBtnWrapper>
        </ToolBtn>
        <ToolBtn onClick={goTest}>
          <TextBtnWrapper>TEST</TextBtnWrapper>
        </ToolBtn>
      </RightSection>
    </Wrapper>
  );
};

export default Toolbar;
