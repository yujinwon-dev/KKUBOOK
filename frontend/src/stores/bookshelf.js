import create from 'zustand';
import { getBooks } from '../api/bookshelf';

const useStore = create((set, get) => ({
  books: [],
  category: 0,
  setCategory: category => {
    return set({ category });
  },
  getBooklist: async () => {
    const books = await getBooks();
    return set({ books });
  },
}));

export default useStore;
