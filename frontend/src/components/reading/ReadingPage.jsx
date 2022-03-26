import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import tw, { styled } from 'twin.macro';
import Time from './Time';
import Book from './Book';
import useStore from '../../stores/bottomSheet';
import Warning from './Warning';

const StyledReadingPage = styled.div`
  background-color: #2a4753;
  min-height: 100vh;

  header {
    padding: 5px;
  }

  .time-container {
    width: 90%;
    margin: 0px auto;
    min-height: 68vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .button-container {
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .w-45p {
    width: 47%;
  }

  .h-3r {
    padding: 15px;
  }

  .bg-main-green {
    ${tw`bg-main-green`}
  }

  .bg-light-gray {
    ${tw`bg-light-gray`}
  }

  .br-10 {
    border-radius: 10px;
  }
`;

function ReadingPage({
  time,
  isTimerActive,
  setIsTimerActive,
  isTimeVisible,
  book,
  setIsReadingPage,
}) {
  const openBottomSheet = useStore(useCallback(state => state.openSheet));
  const navigate = useNavigate();
  const finishReading = () => {
    setIsTimerActive(false);

    if (time < 120) {
      openBottomSheet(Warning, '독서 시간이 너무 적어요', setIsReadingPage);
      return;
    }

    setIsReadingPage(false);
  };

  return (
    <StyledReadingPage>
      <header>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          width={30}
          height={30}
          onClick={() => navigate(-1)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </header>

      <div className="time-container">
        <h1>{isTimerActive ? '독서 중' : '쉬는 중'}</h1>
        {isTimeVisible && <Time time={time} />}
      </div>

      <Book
        book={book}
        isTimerActive={isTimerActive}
        setIsTimerActive={setIsTimerActive}
      />

      <div className="button-container">
        <button type="button" className="w-45p h-3r bg-light-gray br-10">
          메모하기
        </button>
        <button
          type="button"
          className="w-45p h-3r bg-main-green br-10"
          onClick={finishReading}
        >
          독서완료
        </button>
      </div>
    </StyledReadingPage>
  );
}

export default ReadingPage;
