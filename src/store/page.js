import { create } from "zustand";

const usePageStore = create(set => ({
  currentPage:
    "Convert your horizontal video to vertical video with motion analysis, for free!",
  setCurrentPage: newPage => set({ currentPage: newPage }),
}));

export default usePageStore;
