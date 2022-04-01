import create from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    set => ({
      userInfo: {
        createdAt: null,
        isKkubook: null,
        isNew: null,
        kkubookComplete: null,
        kkubookDays: null,
        level: null,
        nickname: null,
        userId: null,
      },
      setUserInfo: userInfo => set({ userInfo }),
      deleteUserInfo: () =>
        set({
          userInfo: {
            createdAt: null,
            isKkubook: null,
            isNew: null,
            kkubookComplete: null,
            kkubookDays: null,
            level: null,
            nickname: null,
            userId: null,
          },
        }),
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
