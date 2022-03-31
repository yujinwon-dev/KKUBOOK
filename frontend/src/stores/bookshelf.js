import create from 'zustand';
import bookshelfCategories from '../constants/bookShelf';
import getBooks from '../api/bookshelf';

const useStore = create((set, get) => ({
  books: [],
  selectedCategory: bookshelfCategories[0],
  setSelectedCategory: category => {
    return set({ selectedCategory: category });
  },
  getBooklist: async () => {
    const books = await getBooks();
    return set({ books });
  },
}));

export default useStore;
