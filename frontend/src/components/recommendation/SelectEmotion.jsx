import { useState, useEffect } from 'react';
import tw, { styled } from 'twin.macro';
import InputBtn from '../survey/InputBtn';
import { submitFeeling } from '../../api/survey';

const ScrollEmotion = styled.div`
  padding-top: 0.5rem;
  padding-bottom: 3rem;
  overflow-x: scroll;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const BtnDiv = styled.div`
  display: flex;
  min-width: 720px;
`;

function SearchRecommend() {
  const [nowFeelingIdx, setFeelingIdx] = useState(1);
  const feelingList = [
    '💧  슬퍼요',
    '🛫 떠나고 싶어요',
    '💚 행복해요',
    '💤 무기력해요',
    '💬 심심해요',
    '💊 고민이 있어요',
  ];

  useEffect(() => {
    const currentSelected = document.getElementById(feelingList[nowFeelingIdx]);
    currentSelected.classList.add('selected');
  });

  function changeFeeling(newFeelingIdx) {
    const prevSelected = document.querySelector('.selected');
    prevSelected.classList.remove('selected');
    setFeelingIdx(newFeelingIdx);
    submitFeeling(nowFeelingIdx);
  }

  return (
    <>
      <p>오늘 기분은 어떠신가요?</p>
      <ScrollEmotion>
        <BtnDiv>
          {feelingList.map(feeling => (
            <InputBtn
              key={feeling}
              id={feeling}
              onClick={() => changeFeeling(feelingList.indexOf(feeling))}
            >
              {feeling}
            </InputBtn>
          ))}
        </BtnDiv>
      </ScrollEmotion>
    </>
  );
}

export default SearchRecommend;
