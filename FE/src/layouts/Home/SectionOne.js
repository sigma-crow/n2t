import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import background from '../../../static/background.jpg';

const Container = styled.div`
  margin: 0px 143px;
  border-radius: 5px;
  box-shadow: 2px 10px 23px 1px #7f7f81;
  background-size: cover;
  padding: 150px 0px;
  background-image: linear-gradient(
    166deg,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.1)
  );
`;

const Title = styled.div`
  display: block;
  font-size: 88px;
  line-height: 92px;
  width: 778px;
  color: #2e3a67;
  margin: 60px auto 0px;
  margin-top: 50px;
  text-align: center;
  font-weight: 700;
`;

const SubTitle = styled.div`
  width: 600px;
  margin-top: 34px;
  font-size: 20px;
  line-height: 30px;
  color: #2e3a67;
  margin: 26px auto auto;
  text-align: center;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 0px;
  flex-direction: row;
  padding-top: 40px;
  margin: 0px auto 30px;
  padding-left: 22px;
  padding-right: 22px;
  max-width: 400px;
`;

const TutorialBtnContainer = styled.div`
  margin-right: 20px;
`;

const BtnLink = styled(Link)`
  width: 140px;
  height: 50px;
  line-height: 22px;
  font-size: 16px;
  flex-shrink: 0;
  display: fles;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  outline: 0px;
  padding: 0px;
  color: #2e3a67;
  font-weight: 600;
  border: 2px solid rgba(88, 69, 86);
  border-radius: 3px;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #82634c;
    color: #faf4eb;
  }
`;

const SectionOne = () => (
  <Container
    style={{
      backgroundImage: `linear-gradient(
    166deg,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.1)), url(${background})`,
    }}
  >
    <Title>내 노트를 바로 시험으로</Title>
    <SubTitle>
      형식화된 노트정리를 시험으로 바꿔 학습하게 함으로 뛰어난 학습효과를 느낄
      수 있습니다.
    </SubTitle>
    <BtnContainer>
      <TutorialBtnContainer>
        <BtnLink to='/tutorial'>튜토리얼</BtnLink>
      </TutorialBtnContainer>
      <BtnLink to='/login'>가입하기</BtnLink>
    </BtnContainer>
  </Container>
);

export default SectionOne;
