import React, { useState } from 'react';
import tw, { styled } from 'twin.macro';
import StarRatings from 'react-star-ratings';

const ReviewPage = styled.div`
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  img {
    width: 120px;
    height: 180px;
  }

  .content {
    width: 100%;
    background-color: beige;
    display: flex;
    flex-direction: column;
    align-items: center;
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
  const [rating, setRating] = useState(0);
  const changeRating = value => setRating(value);
  return (
    <ReviewPage>
      <div className="content">
        <img src={book.imgUrl} alt={book.title} />
        {book.title}

        <StarRatings
          rating={rating}
          changeRating={changeRating}
          numOfStars={5}
        />
      </div>
    </ReviewPage>
  );
}

export default Review;
