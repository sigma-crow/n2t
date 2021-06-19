import React from 'react';
import styled from 'styled-components';
import BoldBtn from '@/components/toolbar/boldBtn';
import UnderlineBtn from '@/components/toolbar/underLineBtn';
import HighlightBtn from '@/components/toolbar/highlightBtn';
import BlueBtn from '@/components/toolbar/blueBtn';
import RedBtn from '@/components/toolbar/redBtn';
import SaveBtn from '@/components/toolbar/saveBtn';
import TestBtn from '@/components/toolbar/testBtn';

const Wrapper = styled.div`
  margin: auto 0;
  width: 100%;
  background: #4f4f4f;
  flex: 0.1 50px;
  flex-direction: row;
  padding: 7px 15px 0px 10px;
  min-width: 350px;
`;

const BtnWrapper = styled.div`
  height: auto;
  width: auto;
  display: flex;
  float: right;
  display: flex;
  flex-direction: row;
`;

const Toolbar = () => {
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
  const onSave = () => {
    console.log('save');
  };
  const onTest = () => {
    console.log('test');
  };

  return (
    <Wrapper>
      <BoldBtn onClick={onBold} />
      <HighlightBtn onClick={onHighlight} />
      <UnderlineBtn onClick={onUnderline} />
      <RedBtn onClick={onRed} />
      <BlueBtn onClick={onBlue} />
      <BtnWrapper>
        <SaveBtn onClick={onSave} />
        <TestBtn onClick={onTest} />
      </BtnWrapper>
    </Wrapper>
  );
};

export default Toolbar;
