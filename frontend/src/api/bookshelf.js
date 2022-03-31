import api from '../utils/apiInstance';
import formatKey from '../utils/snakeToCamel';

const getBooks = async () => {
  try {
    const { data } = await api.get('kkubooks/bookshelf/booklist');
    return data.map(bookObj => formatKey(bookObj));
  } catch (err) {
    return console.error(err);
  }
};

const addBook = async (book, user) => {
  try {
    const { data } = await api.post('kkubooks/bookshelf/', {
      book,
      user,
    });
    return formatKey(data);
  } catch (err) {
    return console.error(err);
  }
};

export { getBooks, addBook };
