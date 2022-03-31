import InputBtn from './InputBtn';
import PrevNextBtn from './PrevNextBtn';

function Survey4({ setPrevPage, setNextPage, setSurveyInput }) {
  const feelingList = [
    '💧  슬퍼요',
    '🛫 떠나고 싶어요',
    '💚 행복해요',
    '💤 무기력해요',
    '💬 심심해요',
    '💊 고민이 있어요',
  ];
  return (
    <>
      <p>요즘 기분은 어떠신가요?</p>
      <div>
        {feelingList.map(feeling => (
          <InputBtn
            key={feeling}
            onClick={() =>
              setSurveyInput(prev => ({
                ...prev,
                feeling: feelingList.indexOf(feeling),
              }))
            }
          >
            {feeling}
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

export default Survey4;
