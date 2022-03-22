import PropTypes from 'prop-types';

function MainBook({ book }) {
  const { title, author, image, startFrom, totalPage, page, status } = book;

  return (
    <li>
      <h3>{title}</h3>
      <h4>{author}</h4>
      <img src={image} alt={title} />
      {startFrom}
      {totalPage}
      {page}
      {status}
    </li>
  );
}

MainBook.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    image: PropTypes.string,
    startFrom: PropTypes.string,
    totalPage: PropTypes.number,
    page: PropTypes.number,
    status: PropTypes.number,
  }).isRequired,
};

export default MainBook;
