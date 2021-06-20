import React from 'react';
import styled from 'styled-components';
import {FaEllipsisV} from 'react-icons/fa';
import {useHistory} from 'react-router-dom';

const Container = styled.div`
  width: 230px;
  display: flex;
  height: 180px;
  flex-direction: column;
`;
const Wrapper = styled.div`
  width: 190px;
  height: 90px;
  background: #e0d4ca;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
    0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
  // margin: 20px 20px;
  margin: 20px 20px 0px 20px;
  &:hover {
    background: #e6e0da;
  }
  &:active {
    background: #f2e5da;
  }
`;

const Crud = styled.div`
  cursor: pointer;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin-left: 160px;
  margin-top: 16px;
  &:hover {
    background: #c4c1be;
  }
  &:active {
    background: #c4c1be;
  }
  span {
    height: 100%;
    width: 20px;
    margin-left: 2px;
    font-size: 20px;
  }
`;
const DropDownMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 150px;
  align-self: flex-end;
  margin-top: 3px;
  border-radius: 4px;
  text-align: center;
  background-color: #a3a19b;
`;
const Menu = styled.div`
  text-decoration: none;
  color: #fff;
  transition: all 0.3s ease-in;
  font-size: medium;
  padding: 4px;
`;
const MenuWrapper = styled.div`
  text-decoration: none;
  &:hover {
    background: #c7c4bb;
  }
  &:active {
    background: #c7c4bb;
  }
`;
const Title = styled.div`
  font-size: ${({theme}) => theme.fontSize.xs};
  font-weight: ${({theme}) => theme.fontWeight.bold};
  color: black;
  width: 190px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-left: 40px;
  padding-top: 25px;
`;
const Note = ({props}) => {
  const history = useHistory();
  const {item} = props;
  const toggling = () => setIsOpen(!isOpen);
  const [isOpen, setIsOpen] = React.useState(false);

  const onEdit = () => {
    history.push(`/edit/${item.note_idx}`);
  };

  return (
    <Container>
      <Wrapper onClick={onEdit}>
        <Title>{item.note_name}</Title>
        <Crud onClick={toggling}>
          <span>
            <FaEllipsisV />
          </span>
        </Crud>
      </Wrapper>
      {isOpen && (
        <DropDownMenuContainer>
          <MenuWrapper>
            <Menu>수정</Menu>
          </MenuWrapper>
          <MenuWrapper>
            <Menu>삭제</Menu>
          </MenuWrapper>
        </DropDownMenuContainer>
      )}
    </Container>
  );
};

export default Note;
