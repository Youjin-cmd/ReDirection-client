/* eslint-disable prettier/prettier */
import { create } from "zustand";

interface ModalStore {
  showTrialModal: boolean;
  setShowTrialModal: (bool: boolean) => void;
}

const useModalStore = create<ModalStore>(set => ({
  showTrialModal: false,
  setShowTrialModal: (bool) => set({ showTrialModal: bool }),
}));

export default useModalStore;
