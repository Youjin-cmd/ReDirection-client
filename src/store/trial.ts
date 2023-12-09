import { create } from "zustand";

interface TrialStore {
  selectedTrialVideo: string;
  setSelectedTrialVideo: (videoName: string) => void;
}

const useTrialStore = create<TrialStore>(set => ({
  selectedTrialVideo: "",
  setSelectedTrialVideo: videoName => set({ selectedTrialVideo: videoName }),
}));

export default useTrialStore;
