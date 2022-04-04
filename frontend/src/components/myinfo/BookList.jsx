/* eslint-disable react/jsx-props-no-spreading */
import { styled } from 'twin.macro';
import Slider from 'react-slick';

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  draggable: true,
  arrows: false,
  initialSlide: 1,
};

const BookImg = styled.img`
  display: block;
  width: 100px;
  height: auto;
  padding: 0 0.5rem 1rem 0.5rem;
`;

function BookList({ books }) {
  return (
    <Slider {...settings}>
      {books.map(book => (
        <BookImg src={book.imgUrl} alt="" key={book.id} />
      ))}
    </Slider>
  );
}

export default BookList;
