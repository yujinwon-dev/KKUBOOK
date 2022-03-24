import { styled } from 'twin.macro';
import { useNavigate } from 'react-router-dom';

const BookContainer = styled.div`
  display: flex;
  height: 105px;
  padding: 0px 2rem 0px 2rem;
  margin: 1rem 0px 1rem 0px;

  img {
    width: 65px;
    position: absolute;
    margin-left: 1rem;
  }

  .book-info {
    justify-content: center;
    width: 100%;
    margin-top: 1rem;
    padding-left: 100px;
    background-color: #f2f2f2;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
  }

  .book-title {
    margin-bottom: 5px;
  }

  .book-author {
    color: #848282;
  }
`;

function SearchResults({ book }) {
  const { title, author, image, page } = book;
  const navigate = useNavigate();

  return (
    <BookContainer onClick={() => navigate('registerbook')}>
      <img src={image} alt={title} />
      <div className="book-info">
        <h4 className="book-title">{title}</h4>
        <p className="book-author">{author}</p>
      </div>
    </BookContainer>
  );
}

export default SearchResults;
