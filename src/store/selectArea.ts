import { create } from "zustand";
import CONSTANT from "../constants/constant";
const { ANALYSIS_VIDEO_WIDTH } = CONSTANT;

interface SelectAreaStates {
  isDragging: boolean;
  selectorLeft: number;
  selectorWidth: number;
  isFixed: boolean;
  sensitivity: number;
}

interface SelectAreaSetters {
  setIsDragging: (bool: boolean) => void;
  setSelectorLeft: (newLeftCorner: number) => void;
  setSelectorWidth: (newRightCorner: number) => void;
  setIsFixed: (bool: boolean) => void;
  setSensitivity: (newNumber: number) => void;
  resetArea: () => void;
}

const initialState = {
  isDragging: false,
  selectorLeft: 0,
  selectorWidth: ANALYSIS_VIDEO_WIDTH,
  isFixed: false,
  sensitivity: 15,
};

const useSelectAreaStore = create<SelectAreaStates & SelectAreaSetters>(
  set => ({
    ...initialState,
    setIsDragging: bool => set({ isDragging: bool }),
    setSelectorLeft: newLeftCorner => set({ selectorLeft: newLeftCorner }),
    setSelectorWidth: newRightCorner => set({ selectorWidth: newRightCorner }),
    setIsFixed: bool => set({ isFixed: bool }),
    setSensitivity: newNumber => set({ sensitivity: newNumber }),
    resetArea: () => set(initialState),
  }),
);

export default useSelectAreaStore;
