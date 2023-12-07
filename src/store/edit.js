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
  selectedDecos: {},
  isDragging: null,
  targetElementScale: {
    width: null,
    height: null,
  },
};

const useEditStore = create(set => ({
  ...initialState,
  setFontArray: newArray => set({ fontArray: newArray }),
  setStickerArray: newArray => set({ stickerArray: newArray }),
  setSelectedDecos: (type, name, url) => {
    if (!name) {
      set(state => {
        const { [type]: _, ...updatedSelectedDecos } = state.selectedDecos;

        return {
          selectedDecos: updatedSelectedDecos,
        };
      });
    }

    if (name) {
      switch (type) {
        case "sticker":
          set(state => {
            const existingSticker = state.selectedDecos.sticker;

            const updatedSticker = existingSticker
              ? {
                  ...existingSticker,
                  name,
                  url,
                }
              : {
                  name,
                  url,
                  X: 0,
                  Y: 0,
                };

            return {
              selectedDecos: {
                ...state.selectedDecos,
                sticker: updatedSticker,
              },
            };
          });

          break;
        case "font":
          set(state => {
            const existingFont = state.selectedDecos.font;

            const updatedFont = existingFont
              ? {
                  ...existingFont,
                  name,
                  url,
                }
              : {
                  name,
                  url,
                  X: 0,
                  Y: 0,
                  fontColor: "#000000",
                  fontBg: "#FFFFFF",
                  fontWidth: 100,
                  fontContent: "TEXT",
                };

            return {
              selectedDecos: {
                ...state.selectedDecos,
                font: updatedFont,
              },
            };
          });

          break;
      }
    }
  },
  setFontColor: newColor => {
    set(state => ({
      selectedDecos: {
        ...state.selectedDecos,
        font: {
          ...state.selectedDecos.font,
          fontColor: newColor,
        },
      },
    }));
  },
  setFontBg: newColor => {
    set(state => ({
      selectedDecos: {
        ...state.selectedDecos,
        font: {
          ...state.selectedDecos.font,
          fontBg: newColor,
        },
      },
    }));
  },
  setFontWidth: newWidth => {
    set(state => ({
      selectedDecos: {
        ...state.selectedDecos,
        font: {
          ...state.selectedDecos.font,
          fontWidth: newWidth,
        },
      },
    }));
  },
  setFontContent: newContent => {
    set(state => ({
      selectedDecos: {
        ...state.selectedDecos,
        font: {
          ...state.selectedDecos.font,
          fontContent: newContent,
        },
      },
    }));
  },
  setIsDragging: elementType => set({ isDragging: elementType }),
  setCoord: (type, newX, newY) => {
    set(state => {
      const updatedSelectedDecos = state.selectedDecos;

      updatedSelectedDecos[type] = {
        ...updatedSelectedDecos[type],
        X: newX,
        Y: newY,
      };

      return {
        selectedDecos: updatedSelectedDecos,
      };
    });
  },
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
