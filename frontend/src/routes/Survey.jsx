import { useEffect, useState } from 'react';
import tw, { styled } from 'twin.macro';
import { useNavigate } from 'react-router-dom';
import { submitSurvey } from '../api/survey';
import Survey1 from '../components/survey/Survey1';
import Survey2 from '../components/survey/Survey2';
import Survey3 from '../components/survey/Survey3';
import Survey4 from '../components/survey/Survey4';
import Survey5 from '../components/survey/Survey5';
import Survey6 from '../components/survey/Survey6';

const Page = styled.div`
  ${tw`flex flex-col items-center`}
  padding: 4rem 2rem;
`;

function Survey() {
  const [page, setPage] = useState();
  const [surveyInput, setSurveyInput] = useState({});
  const navigate = useNavigate();

  function completeSurvey() {
    submitSurvey(
      surveyInput,
      () => navigate('/'),
      error => console.log(error),
    );
  }

  function setPrevPage() {
    if (page > 0) {
      setPage(prev => prev - 1);
    }
  }

  function setNextPage() {
    if (page < 5) {
      setPage(prev => prev + 1);
    }
  }

  const pageList = [
    <Survey1
      setNextPage={() => setNextPage()}
      setSurveyInput={setSurveyInput}
    />,
    <Survey2
      setPrevPage={() => setPrevPage()}
      setNextPage={() => setNextPage()}
      setSurveyInput={setSurveyInput}
    />,
    <Survey3
      setPrevPage={() => setPrevPage()}
      setNextPage={() => setNextPage()}
      setSurveyInput={setSurveyInput}
    />,
    <Survey4
      setPrevPage={() => setPrevPage()}
      setNextPage={() => setNextPage()}
      setSurveyInput={setSurveyInput}
    />,
    <Survey5
      setPrevPage={() => setPrevPage()}
      setNextPage={() => setNextPage()}
      setSurveyInput={setSurveyInput}
    />,
    <Survey6
      setPrevPage={() => setPrevPage()}
      completeSurvey={() => completeSurvey()}
      setSurveyInput={setSurveyInput}
    />,
  ];

  useEffect(() => {
    setPage(0);
  }, []);

  return <Page>{pageList[page]}</Page>;
}

export default Survey;
