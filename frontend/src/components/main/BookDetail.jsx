import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { styled } from 'twin.macro';
import books from '../../data/books';

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

const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  line-height: 2rem;

  .book-title {
    font-size: 22px;
    align-self: center;
  }
  .book-img {
    width: 128px;
    align-self: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .content-title {
    font-size: 18px;
  }
  .content {
    color: #a1a1a1;
  }
`;

function Content({ title, content }) {
  return (
    <div>
      <p className="content-title">{title}</p>
      <p className="content">{content}</p>
    </div>
  );
}

const Buttons = styled.div`
  display: flex;
  padding: 1rem;
`;

const Button = styled.button`
  width: 100%;
  height: 50px;
  margin: 0 0.5rem 0 0.5rem;
  cursor: pointer;
  color: ${props => (props.left ? '#61B864' : '#ffffff')};
  border: ${props => (props.left ? '1px solid #61B864' : 'none')};
  border-radius: 10px;
  background-color: ${props => (props.left ? '#ffffff' : '#8DCD84')};
`;

function BookDetail() {
  const navigate = useNavigate();
  const { bookId } = useParams();

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
      <BookInfo>
        <p className="book-title">{books[bookId - 1].title}</p>
        <img
          className="book-img"
          src={books[bookId - 1].image}
          alt={books[bookId - 1].title}
        />
        <Content title="책 소개" content={books[bookId - 1].title} />
        <Content title="출판사" content={books[bookId - 1].title} />
        <Content title="페이지" content={books[bookId - 1].title} />
      </BookInfo>
      <Buttons>
        <Button left>
          <p>책 상세내용 보기</p>
        </Button>
        <Button>
          <p>서재에 등록하기</p>
        </Button>
      </Buttons>
    </>
  );
}

export default BookDetail;
