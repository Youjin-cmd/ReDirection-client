import { create } from "zustand";

const useTrialStore = create(set => ({
  selectedTrialVideo: false,
  setSelectedTrialVideo: videoName => set({ selectedTrialVideo: videoName }),
}));

export default useTrialStore;
