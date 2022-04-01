import tw, { styled } from 'twin.macro';
import StarRatings from 'react-star-ratings';
import Pregress from './Progress';
import Memo from './Memo';
import mock_memos from '../../data/memos';

const BookDetailPage = styled.div`
  padding: 4rem 1rem;
  margin: 0px auto;
  text-align: center;

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
    margin: 15px 0px;
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

  .memo-title {
    display: flex;
    align-items: center;
  }

  .memo-button {
    ${tw`text-dark-green`}
    margin-left: auto;
    height: 20px;
    border: none;
    outline: none;
    background-color: #fff;
  }
`;

function BookDetail({ book, finishedReading, startedReading, isReading }) {
  return (
    <BookDetailPage>
      <p className="title">{book.title}</p>
      <img src={book.imgUrl} alt={book.title} />
      <p>{book.author}</p>
      {finishedReading && (
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
      <p className="tag">선택된 카테고리</p>
      {startedReading && (
        <>
          <p className="subject">독서기간</p>
          <Pregress
            startDate={book.startDate}
            endDate={book.endDate}
            currPage={book.currPage}
            totalPage={book.page}
            isReading={isReading}
            padding="10px 5px 5px"
          />
        </>
      )}
      <div className="memo-title">
        <p className="subject">내 메모</p>
        <button type="button" className="subject memo-button">
          메모 작성
        </button>
      </div>
      {mock_memos.map(memo => (
        <Memo key={memo.id} memo={memo} />
      ))}
    </BookDetailPage>
  );
}

export default BookDetail;
