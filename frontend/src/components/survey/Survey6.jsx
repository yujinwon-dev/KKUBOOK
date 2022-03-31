import InputBtn from './InputBtn';
import PrevNextBtn from './PrevNextBtn';

function Survey6({ setPrevPage, completeSurvey, setSurveyInput }) {
  const categoryList = ['문학', '과학', '사회', '예술', '자기계발', '아무거나'];

  return (
    <>
      <p>선호하는 장르는 무엇인가요?</p>
      <div>
        {categoryList.map(category => (
          <InputBtn
            key={category}
            onClick={() =>
              setSurveyInput(prev => ({
                ...prev,
                category: categoryList.indexOf(category),
              }))
            }
          >
            {category}
          </InputBtn>
        ))}
      </div>
      <div>
        <PrevNextBtn btnClass="prev" onClick={() => setPrevPage()}>
          이전
        </PrevNextBtn>
        <PrevNextBtn btnClass="next" onClick={() => completeSurvey()}>
          완료
        </PrevNextBtn>
      </div>
    </>
  );
}

export default Survey6;
