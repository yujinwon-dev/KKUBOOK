import create from 'zustand';

const useStore = create(set => ({
  open: false,
  header: '',
  Component: undefined,
  onDismiss: () => set({ open: false, Component: undefined, header: '' }),
  openSheet: (Component, header) => set({ open: true, Component, header }),
}));

export default useStore;
