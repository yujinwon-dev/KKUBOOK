import create from 'zustand';

const useStore = create(set => ({
  open: false,
  header: '',
  Component: undefined,
  onSubmit: undefined, // bottomSheet의 메인 동작(ex - 기록완료, 그만 읽기, 삭제하기)
  onDismiss: () =>
    set({ open: false, Component: undefined, onSubmit: undefined, header: '' }),
  openSheet: (Component, header, onSubmit) =>
    set({ open: true, Component, onSubmit, header }),
}));

export default useStore;
