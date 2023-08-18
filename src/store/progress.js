import { create } from "zustand";

const useProgressStore = create(set => ({
  uploadProgress: 0,
  analysisProgress: false,
  setUploadProgress: () =>
    set(state => ({ uploadProgress: state.uploadProgress })),
  setAnalysisProgress: () =>
    set(state => ({ analysisProgress: state.analysisProgress })),
}));

export default useProgressStore;
