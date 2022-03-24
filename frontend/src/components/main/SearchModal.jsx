import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'twin.macro';
import BottomSheetBase from '../common/BottomSheetBase';

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 2vh;
`;

const ListEle = styled.div`
  padding: 2vh;
`;

function SearchList() {
  const navigate = useNavigate();

  return (
    <Body>
      <ListEle onClick={() => navigate('searchbook')}>
        <p>검색해서 등록하기</p>
      </ListEle>
      <ListEle onClick={() => console.log('바코드로 등록하기')}>
        <p>바코드로 등록하기</p>
      </ListEle>
      <ListEle onClick={() => navigate('recommendation')}>
        <p>책 추천받기</p>
      </ListEle>
    </Body>
  );
}

function SearchModal() {
  const btnname = '책등록하기 버튼';
  const header = '책 등록하기';

  return (
    <div>
      <BottomSheetBase btnname={btnname} header={header} body={SearchList()} />
    </div>
  );
}

export default SearchModal;
