import React, { useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Time from '../components/main/Time';
import useStore from '../stores/book';

const ReadingPage = styled.div`
  min-height: 100vh;
  background-color: #2a4753;
`;

const TimeContainer = styled.div`
  min-height: 100px;
  background-color: azure;
`;

const BookReading = styled.div`
  background-color: white;
  margin: 0px auto;
  height: 8rem;
  width: 90%;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;

  img {
    height: 120px;
    width: 80px;
    margin: 10px;
  }

  button {
    margin-left: auto;
    height: 100%;
    border-radius: 0px 10px 10px 0px;
    border: 0;
  }
`;

function Reading() {
  const [isActive, setIsActive] = useState(true);
  const [isTimeVisible, setIsTimeVisible] = useState(true);
  const { bookId } = useParams();
  const book = useStore(
    useCallback(
      state => {
        return state.books.find(item => {
          return item.id === Number(bookId);
        });
      },
      [bookId],
    ),
  );

  return (
    <ReadingPage>
      <TimeContainer>
        <h1>{isActive ? '독서 중' : '쉬는 중'}</h1>
        {isTimeVisible && (
          <Time isActive={isActive} setIsTimeVisible={setIsTimeVisible} />
        )}
      </TimeContainer>

      <BookReading>
        <img src={book.image} alt={book.title} />
        <div>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
        </div>
        <button type="button" onClick={() => setIsActive(!isActive)}>
          {isActive ? '일시정지' : '재생'}
        </button>
      </BookReading>

      <button type="button">메모하기</button>
      <button type="button">독서완료</button>
    </ReadingPage>
  );
}

export default Reading;
