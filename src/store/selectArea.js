import { create } from "zustand";
import CONSTANT from "../constants/constant";
const { ANALYSIS_VIDEO_WIDTH } = CONSTANT;

const initialState = {
  isDragging: false,
  selectorLeft: 0,
  selectorWidth: ANALYSIS_VIDEO_WIDTH,
};

const useSelectAreaStore = create(set => ({
  ...initialState,
  setIsDragging: bool => set({ isDragging: bool }),
  setSelectorLeft: newLeftCorner => set({ selectorLeft: newLeftCorner }),
  setSelectorWidth: newRightCorner => set({ selectorWidth: newRightCorner }),
  resetArea: () => set(initialState),
}));

export default useSelectAreaStore;
