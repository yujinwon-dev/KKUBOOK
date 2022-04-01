import InputBtn from './InputBtn';
import PrevNextBtn from './PrevNextBtn';

function Survey3({ setPrevPage, setNextPage, setSurveyInput }) {
  const jobList = [
    '자유/전문직',
    '경영/관리직',
    '사무/기술직',
    '판매/서비스직',
    '기능/작업/단순노무직',
    '농/림/어/축산업',
    '자영업',
    '전업주부',
    '대학생/대학원생',
    '초/중/고등학생',
    '무직',
    '기타',
  ];
  return (
    <>
      <p>어떤 일을 하고 있으세요?</p>
      <span>(최대 5개)</span>
      <div>
        {jobList.map(job => (
          <InputBtn
            key={job}
            onClick={() =>
              setSurveyInput(prev => ({
                ...prev,
                job: jobList.indexOf(job),
              }))
            }
          >
            {job}
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

export default Survey3;
