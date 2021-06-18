import React from 'react';
import styled from 'styled-components';
import BoldBtn from '@/components/toolbar/boldBtn';
import UnderlineBtn from '@/components/toolbar/underLineBtn';
import HighlightBtn from '@/components/toolbar/highlightBtn';
import BlueBtn from '@/components/toolbar/blueBtn';
import RedBtn from '@/components/toolbar/redBtn';

const Wrapper = styled.div`
  margin: 0;
  width: auto;
  background: #4f4f4f;
  flex: 0.1 50px;
  display: flex;
  flex-direction: row;
  padding-left: 10px;
`;

const Toolbar = () => {
  return (
    <Wrapper>
      <BoldBtn />
      <HighlightBtn />
      <UnderlineBtn />
      <RedBtn />
      <BlueBtn />
    </Wrapper>
  );
};

export default Toolbar;

// const Wrapper = styled.div`
//   background: #dfd;
//   padding: 1.6rem 0;
//   height: 5rem;
//   width: auto;
//   font-size: 1.6rem;
//   flex: 1 0 30px;
// `;

// const Toolbar = () => {
//   return <Wrapper>toolbar</Wrapper>;
// };

// export default Toolbar;
