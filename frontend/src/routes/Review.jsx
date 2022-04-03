import React, { useState } from 'react';
import tw, { styled } from 'twin.macro';
import { Rating } from 'react-simple-star-rating';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import useStore from '../stores/book';
import { submitRating } from '../api/main';

const ReviewPage = styled.div`
  padding: 0 1rem;
  font-size: 20px;
  img {
    width: 40%;
    height: 60%;
  }

  .book-title {
    font-size: 1rem;
    margin: 1rem;
  }

  .content {
    ${tw`bg-light-gray`}
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem;
    border-radius: 10px;
    box-shadow: 2px 1px 10px 1px rgba(0, 0, 0, 0.1);
    position: relative;
    top: 15vh;
  }

  .num-rating {
    margin: 5px auto 40px;
    color: #f1a545;
  }

  .top-1rem {
    top: 1rem;
  }

  .title {
    padding-top: 1rem;
  }
`;

const book = {
  id: 2,
  book: 2,
  title: '어린 왕자',
  author: '생택쥐페리',
  imgUrl: 'https://image.yes24.com/goods/49855699/XL',
  startDate: '2022.02.22',
  endDate: null,
  rating: 10,
  page: 180,
  currPage: 50,
  bookStatus: 2,
  isbn: 9788931021295,
};

function Review() {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const changeRating = value => {
    setRating(value);
  };
  const setCategory = useStore(state => state.setCategory);
  return (
    <ReviewPage>
      <p className="title">다 읽었어요!</p>
      <div className="content">
        <img src={book.imgUrl} alt={book.title} />
        <p className="book-title">{book.title}</p>
        <Rating
          onClick={changeRating}
          ratingValue={rating}
          size={30}
          allowHalfIcon
        />
        <p className="num-rating">{rating / 10}</p>
        <Button
          title="독서 완료"
          background="white"
          color="#8DCD84"
          onClick={() => {
            submitRating(13, rating / 10);
            setCategory(0);
            navigate('/bookshelf');
          }}
        />
        <Button
          title="다음에 읽을 책 추천 받기"
          onClick={() => {
            submitRating(13, rating / 10);
            navigate('/recommendation');
          }}
        />
      </div>
    </ReviewPage>
  );
}

export default Review;
