import { create } from "zustand";

const useEditStore = create(set => ({
  fontArray: [
    null,
    "/assets/notoSerifKor.svg",
    "/assets/bebasNeue.svg",
    "/assets/hanuman.svg",
    "/assets/beauRivage.svg",
    "/assets/basic.svg",
    "/assets/justMeAgainDownHere.svg",
    "/assets/pacifico.svg",
    "/assets/gochiHand.svg",
    "/assets/handjet.svg",
  ],
  stickerArray: [
    null,
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
    font: null,
    typeface: null,
    sticker: null,
  },
  isFontDragging: false,
  isStickerDragging: false,
  fontX: 0,
  fontY: 0,
  stickerX: 0,
  stickerY: 0,
  setFontArray: newArray => set({ fontArray: newArray }),
  setStickerArray: newArray => set({ stickerArray: newArray }),
  setSelectedSquares: (newSelectedSquare, type, typeface) => {
    set(state => ({
      selectedSquares: {
        ...state.selectedSquares,
        [type]: newSelectedSquare,
        typeface: typeface,
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
