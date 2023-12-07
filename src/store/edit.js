import { create } from "zustand";

const initialState = {
  fontArray: [
    { name: null, url: null },
    { name: "bebasNeue", url: "/assets/bebasNeue.svg" },
    { name: "hanuman", url: "/assets/hanuman.svg" },
    { name: "beauRivage", url: "/assets/beauRivage.svg" },
    { name: "basic", url: "/assets/basic.svg" },
    { name: "justMeAgainDownHere", url: "/assets/justMeAgainDownHere.svg" },
    { name: "pacifico", url: "/assets/pacifico.svg" },
    { name: "gochiHand", url: "/assets/gochiHand.svg" },
    { name: "handjet", url: "/assets/handjet.svg" },
  ],
  stickerArray: [
    { name: null, url: null },
    {
      name: "heart",
      url: "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/heart.svg",
    },
    {
      name: "yay",
      url: "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/yay.svg",
    },
    {
      name: "game_over",
      url: "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/game_over.svg",
    },
    {
      name: "fabulous",
      url: "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/fabulous.svg",
    },
    {
      name: "star",
      url: "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/star.svg",
    },
    {
      name: "rainbow",
      url: "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/rainbow.svg",
    },
    {
      name: "pizza",
      url: "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/pizza.svg",
    },
    {
      name: "sunglass",
      url: "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/sunglass.svg",
    },
    {
      name: "monitor",
      url: "https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/monitor.svg",
    },
  ],
  selectedSquares: {},
  isDragging: null,
  fontColor: "#000000",
  fontBg: "#FFFFFF",
  fontWidth: 100,
  fontContent: "TEXT",
  targetElementScale: {
    width: null,
    height: null,
  },
};

const useEditStore = create(set => ({
  ...initialState,
  setFontArray: newArray => set({ fontArray: newArray }),
  setStickerArray: newArray => set({ stickerArray: newArray }),
  setSelectedSquares: (type, name, url) => {
    set(state => {
      if (!name) {
        const { [type]: _, ...updatedSelectedSquares } = state.selectedSquares;
        return {
          selectedSquares: updatedSelectedSquares,
        };
      }

      return {
        selectedSquares: {
          ...state.selectedSquares,
          [type]: {
            name,
            url,
            X: 0,
            Y: 0,
          },
        },
      };
    });
  },
  setIsDragging: elementType => set({ isDragging: elementType }),
  setCoord: (type, newX, newY) => {
    set(state => {
      const updatedSelectedSquares = state.selectedSquares;

      updatedSelectedSquares[type] = {
        ...updatedSelectedSquares[type],
        X: newX,
        Y: newY,
      };

      return {
        selectedSquares: updatedSelectedSquares,
      };
    });
  },
  setFontColor: newColor => set({ fontColor: newColor }),
  setFontBg: newColor => set({ fontBg: newColor }),
  setFontWidth: newWidth => set({ fontWidth: newWidth }),
  setFontContent: newContent => set({ fontContent: newContent }),
  setTargetElementScale: (newWidth, newHeight) => {
    set({
      targetElementScale: {
        width: newWidth,
        height: newHeight,
      },
    });
  },
  resetEditData: () => set(initialState),
}));

export default useEditStore;
