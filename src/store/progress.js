import { create } from "zustand";

const initialState = {
  showLoading: false,
  uploadStatus: null,
  analysisStatus: false,
  cropStatus: false,
  editStatus: false,
};

const useProgressStore = create(set => ({
  ...initialState,
  setShowLoading: newShowLoading => set({ showLoading: newShowLoading }),
  setUploadStatus: newUploadStatus => set({ uploadStatus: newUploadStatus }),
  setAnalysisStatus: newAnalysisStatus =>
    set({ analysisStatus: newAnalysisStatus }),
  setCropStatus: newCropStatus => set({ cropStatus: newCropStatus }),
  setEditStatus: newEditStatus => set({ editStatus: newEditStatus }),
  resetAllStatus: () => set(initialState),
}));

export default useProgressStore;
