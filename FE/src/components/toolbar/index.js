import React from 'react';
import styled from 'styled-components';
import ToolBtn from '@/components/toolbar/toolBtn';
import {FaCircle} from 'react-icons/fa';
import {AiOutlineUnderline} from 'react-icons/ai';
import {AiOutlineHighlight} from 'react-icons/ai';
import {AiOutlineBold} from 'react-icons/ai';

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

const Toolbar = () => {
  const onClick = () => {
    console.log('click!');
  };

  return (
    <Wrapper>
      <ToolBtn onClick={onClick}>
        <AiOutlineBold size='20px' style={{padding: '5px 7px'}} />
      </ToolBtn>
      <ToolBtn onClick={onClick}>
        <AiOutlineHighlight size='20px' style={{padding: '5px 7px'}} />
      </ToolBtn>
      <ToolBtn onClick={onClick}>
        <AiOutlineUnderline size='20px' style={{padding: '5px 7px'}} />
      </ToolBtn>
      <ToolBtn onClick={onClick}>
        <FaCircle size='20px' color='red' style={{padding: '5px 7px'}} />
      </ToolBtn>
      <ToolBtn onClick={onClick}>
        <FaCircle size='20px' color='blue' style={{padding: '5px 7px'}} />
      </ToolBtn>

      <RightSection>
        <ToolBtn onClick={onClick}>
          <TextBtnWrapper>SAVE</TextBtnWrapper>
        </ToolBtn>
        <ToolBtn onClick={onClick}>
          <TextBtnWrapper>TEST</TextBtnWrapper>
        </ToolBtn>
      </RightSection>
    </Wrapper>
  );
};

export default Toolbar;
