import { create } from "zustand";
import CONSTANT from "../constants/constant";
const { ANALYSIS_VIDEO_WIDTH } = CONSTANT;

const useDragDropStore = create(set => ({
  isDragging: false,
  defaultX: 0,
  defaultW: ANALYSIS_VIDEO_WIDTH,
  setIsDragging: bool => set({ isDragging: bool }),
  setDefaultX: newLeftCorner => set({ defaultX: newLeftCorner }),
  setDefaultW: newWidth => set({ defaultW: newWidth }),
}));

export default useDragDropStore;
