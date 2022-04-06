import { styled } from 'twin.macro';
import { useNavigate } from 'react-router-dom';

const BookContainer = styled.div`
  cursor: pointer;
  margin-right: 1rem;
  .book-img {
    margin-bottom: 1rem;
    display: flex;
    align-items: end;
    img {
      display: block;
      width: 100%;
      height: 20vh;
    }
  }
  .book-info {
    .book-title {
      margin-bottom: 0.5rem;
      white-space: normal;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      p {
        font-size: 18px;
        padding-bottom: 0rem;
      }
    }
    .book-author {
      font-size: 16px;
      color: #848282;
    }
  }
`;

function SearchResult({ book }) {
  const { id, title, author, img_url } = book;
  const navigate = useNavigate();

  return (
    <BookContainer onClick={() => navigate(`/bookDetail/${id}`)}>
      <div className="book-img">
        <img src={img_url} alt={title} />
      </div>
      <div className="book-info">
        <div className="book-title">
          <p>{title}</p>
        </div>
        <p className="book-author">{author}</p>
      </div>
    </BookContainer>
  );
}

export default SearchResult;
