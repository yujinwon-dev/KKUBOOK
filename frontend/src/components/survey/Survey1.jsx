import { useState } from 'react';
import tw, { styled } from 'twin.macro';
import InputBtn from './InputBtn';
import PrevNextBtn from './PrevNextBtn';
import Survey2 from './Survey2';

const MainText = styled.p`
  ${tw`text-[20px] font-medium mb-4`}
`;

const SubText = styled.p`
  ${tw`text-[#848282] text-[15px] mb-[9rem]`}
`;

const H2 = styled.h2`
  ${tw`text-[20px] font-semibold`}
  margin: 0 auto 1.5rem 0;
`;

const BtnDiv = styled.div`
  ${tw`flex`}
`;

function Survey1({ setNextPage, setSurveyInput }) {
  const ageList = ['10대', '20대', '30대', '40대', '50대', '60대 이상'];

  function clickInputBtn(age) {
    setSurveyInput(prev => ({ ...prev, age: ageList.indexOf(age) }));
  }

  return (
    <>
      <div>
        <MainText>당신에 대해 조금 더 알려주세요.</MainText>
        <SubText>본 응답은 책 추천 목적으로만 사용됩니다.</SubText>
      </div>

      <H2>나이</H2>
      <BtnDiv>
        {ageList.map(age => (
          <InputBtn key={age} onClick={() => clickInputBtn(age)}>
            {age}
          </InputBtn>
        ))}
        <PrevNextBtn btnClass="next" onClick={() => setNextPage()}>
          다음
        </PrevNextBtn>
      </BtnDiv>
    </>
  );
}

export default Survey1;
