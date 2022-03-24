import create from 'zustand';
import books from '../data/books';

const useStore = create((set, get) => ({
  books,
  updateOrder: bookId => {
    const bookLists = get().books;
    const targetBook = bookLists.find(book => book.id === bookId);
    const restBooks = bookLists.filter(book => book.id !== bookId);
    return set({ books: [targetBook, ...restBooks] });
  },
}));

export default useStore;
