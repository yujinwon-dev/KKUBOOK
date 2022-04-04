import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { selectedBookStore } from '../stores/book';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import BookDetail from '../components/bookshelf/BookDetail';
import Button from '../components/common/Button';
import useBottomSheetStore from '../stores/bottomSheet';
import Warning from '../components/bookshelf/Warning';
import { startReading, deleteBook } from '../api/bookshelf';
import useUserStore from '../stores/user';

function BookshelfBook() {
  const navigate = useNavigate();
  const book = selectedBookStore(useCallback(state => state.selectedBook, []));
  const userId = useUserStore(state => state.userInfo.userId);

  useEffect(() => {
    if (!book) {
      navigate('/');
    }
  }, []);

  const moveToReading = () => {
    navigate('/reading');
  };

  const getButtonByStatus = {
    1: <Button title="읽기" width="90%" onClick={moveToReading} />,
    2: (
      <Button
        title="읽기 시작"
        width="90%"
        onClick={() => {
          startReading(book.id, book.bookId, userId, book.bookStatus);
          moveToReading();
        }}
      />
    ),
    3: (
      <Button
        title="읽기"
        width="90%"
        onClick={() => {
          startReading(book.id, book.bookId, userId, book.bookStatus);
          moveToReading();
        }}
      />
    ),
  };

  const openBottomSheet = useBottomSheetStore(
    useCallback(state => state.openSheet),
  );
  const warningDelete = useCallback(
    () => <Warning status={book.bookStatus} />,
    [],
  );

  const getHeaderButton = status => {
    if (status === 2 || status === 3) {
      return (
        <Button
          title="삭제"
          background="transparent"
          color="gray"
          width="initial"
          size="15px"
          padding="14px"
          onClick={() =>
            openBottomSheet(warningDelete, '책을 삭제하시겠습니까?', () =>
              deleteBook(book.id),
            )
          }
        />
      );
    }

    return null;
  };

  if (book) {
    return (
      <>
        <Header>{getHeaderButton(book.bookStatus)}</Header>
        <BookDetail
          book={book}
          finishedReading={book.bookStatus === 0}
          startedReading={book.bookStatus !== 2}
          isReading={book.bookStatus === 1}
        />
        {book.bookStatus !== 0 && (
          <Footer>{getButtonByStatus[book.bookStatus]}</Footer>
        )}
      </>
    );
  }

  return null;
}

export default BookshelfBook;
