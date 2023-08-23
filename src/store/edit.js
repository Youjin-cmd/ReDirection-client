import { create } from "zustand";

const useEditStore = create(set => ({
  fontArray: [
    null,
    "/assets/text_notoSerifKor.svg",
    "/assets/text_bebasNeue.svg",
    "/assets/text_hanuman.svg",
    "/assets/text_beauRivage.svg",
    "/assets/text_basic.svg",
    "/assets/text_justMeAgainDownHere.svg",
    "/assets/text_pasifico.svg",
    "/assets/text_gochiHand.svg",
    "/assets/text_handJet.svg",
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
  setSelectedSquares: (newSelectedSquare, type) => {
    set(state => ({
      selectedSquares: {
        ...state.selectedSquares,
        [type]: newSelectedSquare,
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
