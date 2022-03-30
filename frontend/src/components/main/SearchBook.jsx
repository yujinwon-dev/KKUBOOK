import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'twin.macro';
import SearchResult from './SearchResult';
import books from '../../data/books';
import happyKkubook from '../../assets/happy-kkubook.png';

const Bar = styled.div`
  position: fixed;
  top: 0px;
  width: 100%;
  max-width: 500px;
  height: 52px;
  display: flex;
  background-color: white;
  z-index: 3;

  p {
    align-self: center;
    font-size: 17px;
  }
`;
const SearchBox = styled.div`
  margin: 2rem;

  p {
    color: #848282;
  }

  .search-bar {
    width: 100%;
    height: 2rem;
    border: 1px solid #848282;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
  }

  input {
    width: 100%;
    border: none;
    outline: none;
  }
  .conditions {
    display: flex;
  }
  .true {
    width: 5rem;
    text-align: center;
    border: none;
    background-color: white;
    border-top: 2px solid #71b864;
    cursor: pointer;
  }
  .true > p {
    color: #71b864;
  }
  .false {
    width: 5rem;
    text-align: center;
    border: none;
    background-color: white;
    border-top: 1px solid #848282;
    cursor: pointer;
  }
`;

const NoResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 100%;
    height: 150px;
    margin: 2rem;
  }
`;

function SearchBook() {
  const navigate = useNavigate();
  const [isTitle, setTitle] = useState('true');
  const [isAuthor, setAuthor] = useState('false');

  return (
    <>
      <Bar>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          width="29px"
          onClick={() => navigate(-1)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <p>책 검색하기</p>
      </Bar>
      <SearchBox>
        <p>읽고 싶은 책을 검색해 보세요!</p>
        <form>
          <div className="search-bar">
            <svg
              width="50"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="#848282"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
            <input placeholder="책 이름 / 저자 검색하기" />
            <svg
              width="50"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="#848282"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="conditions">
            <button
              type="button"
              className={isTitle}
              onClick={event => {
                setTitle('true');
                setAuthor('false');
              }}
            >
              <p>책 제목</p>
            </button>
            <button
              type="button"
              className={isAuthor}
              onClick={() => {
                setTitle('false');
                setAuthor('true');
              }}
            >
              <p>저자</p>
            </button>
          </div>
        </form>
      </SearchBox>
      {books.length ? (
        <>
          {books.map(book => (
            <SearchResult key={book.id} book={book} />
          ))}
        </>
      ) : (
        <NoResult>
          <img src={happyKkubook} alt="kkubook character" />
          <p>찾으시는 책이 없으면 관리자에게 문의하세요</p>
        </NoResult>
      )}
    </>
  );
}
export default SearchBook;
