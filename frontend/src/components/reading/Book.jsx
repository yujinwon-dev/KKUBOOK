import { memo } from 'react';
import styled from 'styled-components';

const BookReading = styled.div`
  background-color: white;
  margin: auto;
  height: 7.5rem;
  width: 100%;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;

  .img-box {
    display: flex;
    align-items: center;
    height: 100%;
    margin: 10px;
    img {
      height: 90%;
    }
  }
  .text-box {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  button {
    margin-left: auto;
    height: 100%;
    border-radius: 0px 10px 10px 0px;
  }
`;

function Book({ bookInfo, isTimerActive, setIsTimerActive }) {
  return (
    <BookReading>
      <div className="img-box">
        <img src={bookInfo.img_url} alt={bookInfo.title} />
      </div>
      <div className="text-box">
        <p>{bookInfo.title}</p>
        <p>{bookInfo.author}</p>
      </div>
      <button type="button" onClick={() => setIsTimerActive(!isTimerActive)}>
        {isTimerActive ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="#848282"
            width={30}
            height={30}
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="#848282"
            width={30}
            height={30}
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>
    </BookReading>
  );
}
export default memo(Book);
