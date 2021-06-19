import React, {useState} from 'react';
import styled from 'styled-components';
import SearchBtn from '@/components/searchShared/searchBtn';
import ClearBtn from '@/components/searchShared/clearBtn';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 55px 0 45px 0;
`;

const Contents = styled.div`
  width: 700px;
  max-width: 700px;
  background: #fff;
  display: flex;
  border: 1px solid #dfe1e5;
  box-shadow: none;
  border-radius: 18px;
  z-index: 3;
  height: 50px;
  max-height: 50px;
  margin: 0 auto;
  &:hover,
  &:focus-within {
    border: 3px solid #5f4837;
  }
  padding: 2px 8px 0 20px;
  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
    0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
`;

const Input = styled.input.attrs({
  placeholder: '검색',
  type: 'text',
})`
  background-color: transparent;
  border: none;
  margin: 3px 0px 0px 3px;
  padding: 0;
  color: rgba(0, 0, 0, 0.87);
  display: flex;
  color: rgba(0, 0, 0, 0.87);
  word-wrap: break-word;
  outline: none;
  display: flex;
  flex: 100%;
  height: 34px;
  font-size: 18px;
  }
`;

const SearchBar = () => {
  const [searchField, setSearchField] = useState('');
  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const onSearch = () => {};

  const onClear = () => {
    setSearchField('');
  };

  return (
    <Wrapper>
      <Contents>
        <Input value={searchField} onChange={handleChange} />
        <ClearBtn onClick={onClear} />
        <SearchBtn onClick={onSearch} />
      </Contents>
    </Wrapper>
  );
};

export default SearchBar;
