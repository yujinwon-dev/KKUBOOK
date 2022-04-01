import create from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    set => ({
      userInfo: {},
      setUserInfo: userInfo => set({ userInfo }),
      deleteUserInfo: () => set({ userInfo: null }),
      changeUserNickname: newNickname =>
        set(state => ({
          userInfo: { ...state.userInfo, nickname: newNickname },
        })),
      offKkubook: () =>
        set(state => ({
          userInfo: { ...state.userInfo, isKkubook: false },
        })),
    }),
    {
      name: 'user-storage',
      getStorage: () => sessionStorage,
    },
  ),
);

export default useStore;
