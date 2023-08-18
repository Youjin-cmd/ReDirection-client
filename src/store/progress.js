import { create } from "zustand";

const useProgressStore = create(set => ({
  showLoading: false,
  uploadStatus: null,
  analysisStatus: false,
  cropStatus: false,
  setShowLoading: newShowLoading => set({ showLoading: newShowLoading }),
  setUploadStatus: newUploadStatus => set({ uploadStatus: newUploadStatus }),
  setAnalysisStatus: newAnalysisStatus =>
    set({ analysisStatus: newAnalysisStatus }),
  setCropStatus: newCropStatus => set({ cropStatus: newCropStatus }),
}));

export default useProgressStore;
