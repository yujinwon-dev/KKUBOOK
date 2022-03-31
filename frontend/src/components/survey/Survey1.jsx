import { useState } from 'react';
import InputBtn from './InputBtn';
import PrevNextBtn from './PrevNextBtn';
import Survey2 from './Survey2';

function Survey1({ setNextPage, setSurveyInput }) {
  const ageList = ['10대', '20대', '30대', '40대', '50대', '60대 이상'];

  function clickInputBtn(age) {
    setSurveyInput(prev => ({ ...prev, age: ageList.indexOf(age) }));
  }

  return (
    <>
      <p>당신에 대해 조금 더 알려주세요.</p>
      <p>본 응답은 책 추천 목적으로만 사용됩니다.</p>

      <h2>나이</h2>
      <div>
        {ageList.map(age => (
          <InputBtn key={age} onClick={() => clickInputBtn(age)}>
            {age}
          </InputBtn>
        ))}
      </div>
      <div>
        <PrevNextBtn btnClass="next" onClick={() => setNextPage()}>
          다음
        </PrevNextBtn>
      </div>
    </>
  );
}

export default Survey1;
