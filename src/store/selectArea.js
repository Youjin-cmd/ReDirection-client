import { create } from "zustand";
import CONSTANT from "../constants/constant";
const { ANALYSIS_VIDEO_WIDTH } = CONSTANT;

const initialState = {
  isDragging: false,
  defaultX: 0,
  defaultW: ANALYSIS_VIDEO_WIDTH,
};

const useSelectAreaStore = create(set => ({
  ...initialState,
  setIsDragging: bool => set({ isDragging: bool }),
  setDefaultX: newLeftCorner => set({ defaultX: newLeftCorner }),
  setDefaultW: newWidth => set({ defaultW: newWidth }),
  resetArea: () => set(initialState),
}));

export default useSelectAreaStore;
