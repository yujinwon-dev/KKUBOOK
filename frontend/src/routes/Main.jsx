/* eslint-disable react/jsx-props-no-spreading */
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Slider from 'react-slick';
import Navbar from '../components/common/Navbar';
import FabButton from '../components/common/FabButton';
import books from '../data/books';
import MainBook from '../components/main/MainBook';
import SearchBook from '../components/main/SearchBook';

const StyledSlide = styled(Slider)`
  width: 85%;
  margin: 0px auto;
`;

function Main() {
  const navigate = useNavigate();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
  };

  return (
    <>
      <Navbar />
      <FabButton />
      <h1>Main Page</h1>
      {books.length ? (
        <StyledSlide {...settings}>
          {books.map(book => (
            <MainBook key={book.id} book={book} />
          ))}
        </StyledSlide>
      ) : (
        <h5>아직 읽고 있는 책이 없어요. 책 추가하기</h5>
      )}

      <button type="button" onClick={() => navigate('reading')}>
        책 읽기
      </button>
      <SearchBook />
    </>
  );
}

export default Main;
