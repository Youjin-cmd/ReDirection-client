import { create } from "zustand";

const useEditStore = create(set => ({
  fontArray: [
    "",
    "/assets/text_2.svg",
    "/assets/text_3.svg",
    "/assets/text_4.svg",
    "/assets/text_5.svg",
    "/assets/text_6.svg",
    "/assets/text_7.svg",
  ],
  stickerArray: [
    "",
    "/assets/heart.svg",
    "/assets/yay.svg",
    "/assets/game_over.svg",
    "/assets/fabulous.svg",
    "/assets/star.svg",
    "/assets/rainbow.svg",
    "/assets/pizza.svg",
    "/assets/sunglass.svg",
    "/assets/monitor.svg",
  ],
  selectedSquares: {
    font: "",
    sticker: "",
  },
  displayedElements: {
    font: "",
    sticker: "",
  },
  isFontDragging: false,
  isStickerDragging: false,
  fontX: 0,
  fontY: 0,
  stickerX: 0,
  stickerY: 0,
  setFontArray: newArray => set({ fontArray: newArray }),
  setStickerArray: newArray => set({ stickerArray: newArray }),
  setSelectedSquares: (newSelectedSquare, type) => {
    set(state => ({
      selectedSquares: {
        ...state.selectedSquares,
        [type]: newSelectedSquare,
      },
    }));
  },
  setDisplayedElements: (newSelectedElement, type) => {
    set(state => ({
      displayedElements: {
        ...state.displayedElements,
        [type]: newSelectedElement,
      },
    }));
  },
  setIsFontDragging: bool => set({ isFontDragging: bool }),
  setIsStickerDragging: bool => set({ isStickerDragging: bool }),
  setFontX: newLeftCorner => set({ fontX: newLeftCorner }),
  setFontY: newTopCorner => set({ fontY: newTopCorner }),
  setStickerX: newLeftCorner => set({ stickerX: newLeftCorner }),
  setStickerY: newTopCorner => set({ stickerY: newTopCorner }),
}));

export default useEditStore;
