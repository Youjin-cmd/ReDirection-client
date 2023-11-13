import { create } from "zustand";
import CONSTANT from "../constants/constant";
const { ANALYSIS_VIDEO_WIDTH } = CONSTANT;

const initialState = {
  isDragging: false,
  selectorLeft: 0,
  selectorWidth: ANALYSIS_VIDEO_WIDTH,
  isFixed: false,
  sensitivity: 15,
};

const useSelectAreaStore = create(set => ({
  ...initialState,
  setIsDragging: bool => set({ isDragging: bool }),
  setSelectorLeft: newLeftCorner => set({ selectorLeft: newLeftCorner }),
  setSelectorWidth: newRightCorner => set({ selectorWidth: newRightCorner }),
  setIsFixed: bool => set({ isFixed: bool }),
  setSensitivity: number => set({ sensitivity: number }),
  resetArea: () => set(initialState),
}));

export default useSelectAreaStore;
