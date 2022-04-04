import create from 'zustand';
import { getMemoList } from '../api/bookshelf';

const useStore = create(set => ({
  nowMemoId: '',
  setMemoId: newId =>
    set(state => ({
      nowMemoId: newId,
    })),

  memos: [],
  getMemos: async () => {
    const result = await getMemoList();
  },
}));
export default useStore;
