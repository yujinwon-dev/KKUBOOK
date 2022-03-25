/* eslint-disable react/jsx-props-no-spreading */
import Slider from 'react-slick';
import { useCallback } from 'react';
import Navbar from '../components/common/Navbar';
import FabButton from '../components/common/FabButton';
import Card from '../components/main/Card';
import MainBook from '../components/main/MainBook';
import BookCommit from '../components/main/BookCommit';
import SearchList from '../components/main/SearchList';
import useStore from '../stores/book';
import useBottomSheetStore from '../stores/bottomSheet';

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
  const books = useStore(state => state.books);
  const openBottomSheet = useBottomSheetStore(
    useCallback(state => state.openSheet),
  );

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
          <button type="button">아직 읽고 있는 책이 없어요. 책 추가하기</button>
        </Card>
      )}
      <BookCommit />
      <button
        type="button"
        onClick={() => openBottomSheet(SearchList, '책 등록하기')}
      >
        책 추가하기
      </button>
    </>
  );
}

export default Main;
