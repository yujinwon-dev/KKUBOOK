import InputBtn from './InputBtn';
import PrevNextBtn from './PrevNextBtn';

function Survey2({ setPrevPage, setNextPage, setSurveyInput }) {
  const amountList = ['얇은 책', '보통인 책', '두꺼운 책', '아무거나'];

  return (
    <>
      <p>분량이 어떤 책을 선호하시나요?</p>
      <div>
        {amountList.map(amount => (
          <InputBtn
            key={amount}
            onClick={() =>
              setSurveyInput(prev => ({
                ...prev,
                amount: amountList.indexOf(amount),
              }))
            }
          >
            {amount}
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

export default Survey2;
