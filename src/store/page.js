import { create } from "zustand";

const usePageStore = create(set => ({
  currentPage: "",
  setCurrentPage: newPage => set({ currentPage: newPage }),
}));

export default usePageStore;
