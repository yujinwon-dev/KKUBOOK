import create from 'zustand';
import { getBooklist } from '../api/main';
import { getBooks } from '../api/bookshelf';

const useStore = create((set, get) => ({
  selectedBook: null,
  setSelectedBook: book => {
    return set({ selectedBook: book });
  },
  // main
  mainbooks: [],
  getMainBooks: async () => {
    const books = await getBooklist();
    return set({ mainbooks: books });
  },
  updateOrder: bookshelfId => {
    const bookLists = get().mainbooks;
    const targetBook = bookLists.find(book => book.id === bookshelfId);
    const restBooks = bookLists.filter(book => book.id !== bookshelfId);
    return set({ books: [targetBook, ...restBooks] });
  },
  deleteBook: bookId => {
    const bookList = get().books;
    return set({ books: bookList.filter(book => book.id !== bookId) });
  },
  // bookshelf
  bookshelf: [],
  category: 0,
  setCategory: category => {
    return set({ category });
  },
  getBooklist: async () => {
    const books = await getBooks();
    return set({ bookshelf: books });
  },
}));

export default useStore;
