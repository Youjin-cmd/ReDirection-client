import { create } from "zustand";

const useModalStore = create(set => ({
  showTrialModal: false,
  setShowTrialModal: bool => set({ showTrialModal: bool }),
}));

export default useModalStore;
