import create from 'zustand';
import bookshelfCategories from '../constants/bookShelf';
import { getBooks } from '../api/bookshelf';
import books from '../data/books';

const useStore = create((set, get) => ({
  books: [],
  selectedCategory: bookshelfCategories[0],
  setSelectedCategory: category => {
    return set({ selectedCategory: category });
  },
  getBooklist: async () => {
    // 현재 필요한 book정보가 전부 담겨있지 않아 api 요청대신  mock data를 사용합니다.
    // const books = await getBooks();
    return set({ books });
  },
}));

export default useStore;
