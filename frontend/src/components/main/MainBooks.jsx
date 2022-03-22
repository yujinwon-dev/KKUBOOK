import PropTypes from 'prop-types';
import MainBook from './MainBook';

function MainBooks({ books }) {
  return (
    <ul>
      {books.map(book => (
        <MainBook key={book.id} book={book} />
      ))}
    </ul>
  );
}

MainBooks.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MainBooks;
