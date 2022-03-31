import api from '../utils/apiInstance';
import formatKey from '../utils/snakeToCamel';

const getBooks = async () => {
  try {
    const { data } = await api.get('kkubooks/bookshelf/booklist');
    return data.map(bookObj => formatKey(bookObj));
  } catch (err) {
    return console.err(err);
  }
};

export default getBooks;
