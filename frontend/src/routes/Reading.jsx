import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ReadingPage from '../components/reading/ReadingPage';
import RecordPage from '../components/reading/RecordPage';
import useBookshelfStore from '../stores/bookshelf';
import CreateMemo from '../components/memo/CreateMemo';
import getCurrentDate from '../utils/currentDate';

const Page = styled.div`
  min-width: 100%;
  min-height: 100vh;

  button {
    border: 0;
    outline: 0;
  }
`;

function Reading() {
  const startDateTime = useMemo(() => getCurrentDate(true), []);
  const [currentPage, setCurrentPage] = useState('reading');
  const [isTimerActive, setIsTimerActive] = useState(true); // 읽는 중 vs 쉬는 중
  const [isTimeVisible, setIsTimeVisible] = useState(true);
  const [time, setTime] = useState(0);
  const { bookId } = useParams();
  const book = useBookshelfStore(
    useCallback(
      state => {
        return state.books.find(item => {
          return item.bookId === Number(bookId);
        });
      },
      [bookId],
    ),
  );

  useEffect(() => {
    if (time === 120) {
      setIsTimeVisible(false);
    }
  }, [time]);

  useEffect(() => {
    let ticking = null;

    if (isTimerActive) {
      ticking = setInterval(() => {
        setTime(prevTime => {
          return prevTime + 1;
        });
      }, 1000);
    } else {
      clearInterval(ticking);
    }
    return () => {
      clearInterval(ticking);
    };
  }, [isTimerActive]);

  const getPage = {
    reading: (
      <ReadingPage
        time={time}
        book={book}
        isTimerActive={isTimerActive}
        setIsTimerActive={setIsTimerActive}
        isTimeVisible={isTimeVisible}
        setIsTimeVisible={setIsTimeVisible}
        setCurrentPage={setCurrentPage}
      />
    ),
    record: (
      <RecordPage
        time={time}
        book={book}
        setCurrentPage={setCurrentPage}
        startDateTime={startDateTime}
      />
    ),
    memo: (
      <CreateMemo
        id={bookId}
        title={book.title}
        backClickHandler={useCallback(() => setCurrentPage('reading'), [])}
      />
    ),
  };

  return <Page>{getPage[currentPage]}</Page>;
}

export default Reading;
