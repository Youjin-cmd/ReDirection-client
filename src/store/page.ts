import { create } from "zustand";

interface PageStore {
  currentPage: string;
  setCurrentPage: (newPage: string) => void;
}

const usePageStore = create<PageStore>(set => ({
  currentPage: "",
  setCurrentPage: newPage => set({ currentPage: newPage }),
}));

export default usePageStore;
