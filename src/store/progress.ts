import { create } from "zustand";

interface ProgressStates {
  showLoading: boolean;
  uploadStatus: null | number;
  analysisStatus: null | string;
  cropStatus: null | string;
  editStatus: null | string;
}

interface ProgressSetters {
  setShowLoading: (newShowLoading: boolean) => void;
  setUploadStatus: (newUploadStatus: null | number) => void;
  setAnalysisStatus: (newAnalysisStatus: null | string) => void;
  setCropStatus: (newCropStatus: null | string) => void;
  setEditStatus: (newEditStatus: null | string) => void;
  resetAllStatus: () => void;
}

const initialState = {
  showLoading: false,
  uploadStatus: null,
  analysisStatus: null,
  cropStatus: null,
  editStatus: null,
};

const useProgressStore = create<ProgressStates & ProgressSetters>(set => ({
  ...initialState,
  setShowLoading: (newShowLoading) => set({ showLoading: newShowLoading }),
  setUploadStatus: (newUploadStatus) => set({ uploadStatus: newUploadStatus }),
  setAnalysisStatus: (newAnalysisStatus) =>
    set({ analysisStatus: newAnalysisStatus }),
  setCropStatus: (newCropStatus) => set({ cropStatus: newCropStatus }),
  setEditStatus: (newEditStatus) => set({ editStatus: newEditStatus }),
  resetAllStatus: () => set(initialState),
}));

export default useProgressStore;
