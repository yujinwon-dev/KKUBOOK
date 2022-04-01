import create from 'zustand';
import { getBooklist } from '../api/main';
import bookList from '../data/books';

const useStore = create((set, get) => ({
  books: [],
  getMainBooks: async () => {
    const books = await getBooklist();
    return set({ books });
  },
  updateOrder: bookId => {
    const bookLists = get().books;
    const targetBook = bookLists.find(book => book.id === bookId);
    const restBooks = bookLists.filter(book => book.id !== bookId);
    return set({ books: [targetBook, ...restBooks] });
  },
  deleteBook: bookId => {
    const bookList = get().books;
    return set({ books: bookList.filter(book => book.id !== bookId) });
  },
}));

export default useStore;
