import api from '../utils/apiInstance';
import formatKey from '../utils/snakeToCamel';
import getCurrentDate from '../utils/currentDate';

const getBooks = async () => {
  try {
    const { data } = await api.get('kkubooks/bookshelf/booklist');
    return data.map(bookObj => formatKey(bookObj));
  } catch (err) {
    return console.error(err);
  }
};

const addBook = async (bookId, userId) => {
  try {
    const { data } = await api.post('kkubooks/bookshelf/', {
      book: bookId,
      user: userId,
    });
    return formatKey(data);
  } catch (err) {
    return console.error(err);
  }
};

const startReading = async (bookshelfId, bookId, userId) => {
  try {
    const body = {
      book: bookId,
      user: userId,
      book_status: 1,
      start_date: getCurrentDate(),
    };
    const { data } = await api.put(`kkubooks/bookshelf/${bookshelfId}/`, body);
    return formatKey(data);
  } catch (err) {
    return console.error(err);
  }
};

export { getBooks, addBook, startReading };
