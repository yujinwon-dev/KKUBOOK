/* eslint-disable react/jsx-props-no-spreading */
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import Navbar from '../components/common/Navbar';
import FabButton from '../components/common/FabButton';
import books from '../data/books';
import Card from '../components/main/Card';
import MainBook from '../components/main/MainBook';
import SearchModal from '../components/main/SearchModal';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: true,
  arrows: false,
};

function Main() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <FabButton />
      <h1>Main Page</h1>
      {books.length ? (
        <Slider {...settings}>
          {books.map(book => (
            <Card key={book.id}>
              <MainBook book={book} />
            </Card>
          ))}
        </Slider>
      ) : (
        <Card>
          <h5>아직 읽고 있는 책이 없어요. 책 추가하기</h5>
        </Card>
      )}

      <button type="button" onClick={() => navigate('reading')}>
        책 읽기
      </button>
      <SearchModal />
    </>
  );
}

export default Main;
