import React, { useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import tw, { styled } from 'twin.macro';
import StarRatings from 'react-star-ratings';
import useBookStore from '../../stores/book';
import Period from './Period';
import Memo from './Memo';
import useBookshelfStore from '../../stores/bookshelf';

const Header = styled.header`
  position: fixed;
  width: 100%;
`;

const BookDetailPage = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-top: 20%;
  text-align: center;
  min-height: 100vh;

  img {
    height: 30%;
    width: 50%;
    margin: 20px auto;
  }

  .title {
    font-size: 25px;
    word-break: break-all;
  }

  .subject {
    margin: 15px auto;
    text-align: left;
  }

  .tag {
    ${tw`bg-main-green`}
    display: inline-block;
    padding: 8px;
    margin: 0px auto;
    border-radius: 50px;
    font-size: 12px;
  }
`;

function BookDetail() {
  const navigate = useNavigate();
  const { bookId } = useParams();
  const book = useBookStore(
    useCallback(
      state => {
        return state.books.find(item => {
          return item.id === Number(bookId);
        });
      },
      [bookId],
    ),
  );

  const selectedCategory = useBookshelfStore(state => state.selectedCategory);

  return (
    <>
      <Header>
        <button type="button" onClick={() => navigate(-1)}>
          Back
        </button>
      </Header>
      <BookDetailPage>
        <p className="title">{book.title}</p>
        <img src={book.image} alt={book.title} />
        <p>{book.author}</p>
        {selectedCategory.name === '읽은 책' && (
          <StarRatings
            rating={book.rating / 2}
            starRatedColor="orange"
            starEmptyColor="gray"
            numberOfStars={5}
            starDimension="20px"
            starSpacing="0px"
          />
        )}
        <br />
        <p className="tag">읽고 있는 책</p>
        <p className="subject">독서기간</p>
        <Period startFrom={book.startFrom} end={book.end} />
        <p className="subject">내 메모</p>
        <Memo />
      </BookDetailPage>
    </>
  );
}

export default BookDetail;
