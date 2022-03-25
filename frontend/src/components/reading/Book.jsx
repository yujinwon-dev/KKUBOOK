import { memo } from 'react';
import styled from 'styled-components';

const BookReading = styled.div`
  background-color: white;
  margin: 1rem auto;
  height: 15vh;
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

function Book({ book, isTimerActive, setIsTimerActive }) {
  return (
    <BookReading>
      <img src={book.image} alt={book.title} />
      <div>
        <h3>{book.title}</h3>
        <p>{book.author}</p>
      </div>
      <button type="button" onClick={() => setIsTimerActive(!isTimerActive)}>
        {isTimerActive ? '일시정지' : '재생'}
      </button>
    </BookReading>
  );
}
export default memo(Book);
