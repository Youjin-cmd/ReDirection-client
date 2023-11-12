import { create } from "zustand";

const initialState = {
  fontArray: [
    null,
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
    "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/heart.svg",
    "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/yay.svg",
    "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/game_over.svg",
    "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/fabulous.svg",
    "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/star.svg",
    "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/rainbow.svg",
    "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/pizza.svg",
    "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/sunglass.svg",
    "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/monitor.svg",
  ],
  selectedSquares: {
    font: null,
    typeface: null,
    sticker: null,
    stickerName: null,
  },
  isDragging: null,
  fontX: 150,
  fontY: 340,
  fontColor: "#000000",
  fontBg: "#FFFFFF",
  fontWidth: 100,
  fontContent: "TEXT",
  stickerX: 0,
  stickerY: 0,
  targetElementWidth: null,
  targetElementHeight: null,
};

const useEditStore = create(set => ({
  ...initialState,
  setFontArray: newArray => set({ fontArray: newArray }),
  setStickerArray: newArray => set({ stickerArray: newArray }),
  setSelectedSquares: (newSelectedSquare, type, typeface, stickerName) => {
    set(state => ({
      selectedSquares: {
        ...state.selectedSquares,
        [type]: newSelectedSquare,
        typeface: typeface,
        stickerName: stickerName,
      },
    }));
  },
  setIsDragging: elementType => set({ isDragging: elementType }),
  setFontX: newLeftCorner => set({ fontX: newLeftCorner }),
  setFontY: newTopCorner => set({ fontY: newTopCorner }),
  setFontColor: newColor => set({ fontColor: newColor }),
  setFontBg: newColor => set({ fontBg: newColor }),
  setFontWidth: newWidth => set({ fontWidth: newWidth }),
  setFontContent: newContent => set({ fontContent: newContent }),
  setStickerX: newLeftCorner => set({ stickerX: newLeftCorner }),
  setStickerY: newTopCorner => set({ stickerY: newTopCorner }),
  setTargetElementWidth: newWidth => set({ targetElementWidth: newWidth }),
  setTargetElementHeight: newHeight => set({ targetElementHeight: newHeight }),
  resetEditData: () => set(initialState),
}));

export default useEditStore;
