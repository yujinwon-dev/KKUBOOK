import React, { useCallback, useState, useEffect } from 'react';
import tw, { styled } from 'twin.macro';
import Time from './Time';
import Book from './Book';
import useStore from '../../stores/bottomSheet';
import Warning from './Warning';
import Header from '../common/Header';
import ReadingAlert from './ReadingAlert';

const StyledReadingPage = styled.div`
  background-color: #7c9e80;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .time-container {
    position: fixed;
    width: 100%;
    max-width: 500px;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${tw`text-light-gray`}
    font-weight: lighter;
    font-size: 25px;
    line-height: 2rem;
    z-index: 0;
  }

  .button-container {
    position: fixed;
    bottom: 0;
    width: 100%;
    max-width: 500px;
    padding: 1rem;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    z-index: 1;
  }

  .w-45p {
    width: 47%;
  }

  .p-4p {
    padding: 4%;
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

  .text-black {
    ${tw`text-black`}
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 1rem;
  padding-top: 4rem;
  z-index: 1;
  .form-check {
    display: flex;
    justify-content: end;
    -webkit-justify-content: flex-end;
    align-items: center;
    cursor: pointer;
    .check-label {
      padding-left: 5px;
      color: #ffffff;
    }
    #checkbox {
      background-color: #8dcd84;
      border-radius: 3px;
    }
  }
`;
const CheckMark = styled.div`
  border: ${props => (props.checked ? '' : '1px solid #ffffff')};
  border-radius: 3px;
  width: 20px;
  height: 20px;
}
`;

const AlertList = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: start;
`;

const BookInfoCard = styled.div`
  padding: 1rem;
  position: fixed;
  bottom: 4rem;
  width: 100%;
  max-width: 500px;
  z-index: 1;
`;

function ReadingPage({
  time,
  isTimerActive,
  setIsTimerActive,
  isTimeVisible,
  book,
  setCurrentPage,
}) {
  const [toggleTime, setToggleTime] = useState(false);
  const openBottomSheet = useStore(useCallback(state => state.openSheet));
  const finishReading = () => {
    setIsTimerActive(false);

    if (time < 360) {
      openBottomSheet(Warning, '독서 시간이 너무 적어요', setCurrentPage);
      return;
    }
    setCurrentPage('record');
  };

  const [alertList, setAlertList] = useState([]);
  const msgList = [
    '타이머는 6분이 지나면 사라집니다',
    '6분 동안은 손에 있는 책에 집중해보세요',
    '어느새 독서에 빠진 자신의 모습을 발견할 수 있을 거예요!',
  ];

  function addEleby5sec() {
    for (let i = 0; i < 3; i += 1) {
      setTimeout(() => {
        alertList.push(msgList[i]);
      }, (i + 1) * 1000);
    }
  }
  useEffect(() => {
    if (time < 1) {
      addEleby5sec();
    }
  }, []);

  return (
    <>
      <Header background="#7c9e80" />
      <StyledReadingPage>
        <Container>
          <div
            className="form-check"
            role="button"
            onClick={() => {
              setToggleTime(!toggleTime);
            }}
            onKeyDown={() => ''}
            tabIndex={0}
          >
            {toggleTime ? (
              <CheckMark checked>
                <svg
                  id="checkbox"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                  strokeWidth="3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </CheckMark>
            ) : (
              <CheckMark />
            )}
            <p className="check-label">시간 보기</p>
          </div>
        </Container>
        {alertList.length ? (
          <AlertList>
            {alertList.map(alert => (
              <ReadingAlert key={alert} alert={alert} time={time} />
            ))}
          </AlertList>
        ) : null}
        <div className="time-container">
          <p>{isTimerActive ? '독서 중' : '쉬는 중'}</p>
          {(isTimeVisible || toggleTime) && <Time time={time} />}
        </div>
        <BookInfoCard>
          <Book
            bookInfo={book.bookInfo}
            isTimerActive={isTimerActive}
            setIsTimerActive={setIsTimerActive}
          />
        </BookInfoCard>
        <div className="button-container">
          <button
            type="button"
            className="w-45p p-4p bg-light-gray br-10 text-black"
            onClick={() => setCurrentPage('memo')}
          >
            메모하기
          </button>
          <button
            type="button"
            className="w-45p p-4p bg-main-green br-10 text-black"
            onClick={finishReading}
          >
            독서완료
          </button>
        </div>
      </StyledReadingPage>
    </>
  );
}

export default ReadingPage;
