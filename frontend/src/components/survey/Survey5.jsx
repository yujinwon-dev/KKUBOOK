import InputBtn from './InputBtn';
import PrevNextBtn from './PrevNextBtn';

function Survey5({ setPrevPage, setNextPage, setSurveyInput }) {
  // onclick 처리 다른 방식으로 해야 함 -> string으로 붙일 수 있게 상태관리
  const interestList = [
    '여행',
    '진로',
    '마케팅',
    '리더십',
    '지식',
    '상식',
    '시간관리',
    '심리',
    '페미니즘',
    '글쓰기',
    '요리',
    '역사',
    '음악',
    '철학',
    '건강',
    '공부',
    '사업',
    '외국어',
    '미술',
    '과학',
    '육아',
    '정치',
    '사회',
    '경제',
    '재테크',
    '관계',
    '소통',
    '가족',
  ];
  return (
    <>
      <p>요즘 관심사는 무엇인가요?</p>
      <div>
        {interestList.map(interest => (
          <InputBtn
            key={interest}
            onClick={() =>
              setSurveyInput(prev => ({
                ...prev,
                interest: prev.interest
                  ? `${prev.interest} ${interest}`
                  : interest,
              }))
            }
          >
            {interest}
          </InputBtn>
        ))}
      </div>
      <div>
        <PrevNextBtn btnClass="prev" onClick={() => setPrevPage()}>
          이전
        </PrevNextBtn>
        <PrevNextBtn btnClass="next" onClick={() => setNextPage()}>
          다음
        </PrevNextBtn>
      </div>
    </>
  );
}

export default Survey5;
