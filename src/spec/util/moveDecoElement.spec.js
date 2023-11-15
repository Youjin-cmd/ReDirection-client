import { beforeEach, describe, expect, it } from "vitest";
import moveDecoElement from "../../util/moveDecoElement";
import useEditStore from "../../store/edit";

import CONSTANT from "../../constants/constant";
const { EDIT_VID_WIDTH, EDIT_VID_HEIGHT } = CONSTANT;

const initialState = useEditStore.getState();

describe("moveAreaSelector", () => {
  beforeEach(() => {
    useEditStore.setState(initialState);
  });

  it("updates fonts coords correctly in normal pattern", () => {
    const { setFontX, setFontY } = useEditStore.getState();
    const mockVideoRect = { top: 145.15625, left: 257.001953125 };
    const mockEvent = { clientX: 332, clientY: 244 };

    moveDecoElement(
      mockVideoRect,
      mockEvent,
      setFontX,
      setFontY,
      100,
      40,
    );

    const { fontX, fontY } = useEditStore.getState();

    expect(fontX).toBe(74.998046875);
    expect(fontY).toBe(98.84375);
  });

  it("updates stickers coords correctly in normal pattern", () => {
    const { setStickerX, setStickerY } = useEditStore.getState();
    const mockVideoRect = { top: 145.15625, left: 257.001953125 };
    const mockEvent = { clientX: 332, clientY: 244 };

    moveDecoElement(
      mockVideoRect,
      mockEvent,
      setStickerX,
      setStickerY,
      150,
      96,
    );

    const { stickerX, stickerY } = useEditStore.getState();

    expect(stickerX).toBe(74.998046875);
    expect(stickerY).toBe(98.84375);
  });

  it("limits left side when element is dragged to outside", () => {
    const { setStickerX, setStickerY } = useEditStore.getState();
    const mockVideoRect = { top: 145.15625, left: 257.001953125 };
    const mockEvent = { clientX: -100, clientY: 244 }; // outside video area

    moveDecoElement(
      mockVideoRect,
      mockEvent,
      setStickerX,
      setStickerY,
      150,
      96,
    );

    const { stickerX, stickerY } = useEditStore.getState();

    expect(stickerX).toBe(0);
    expect(stickerY).toBe(98.84375);
  });

  it("limits right side when element is dragged to outside", () => {
    const { setStickerX, setStickerY } = useEditStore.getState();
    const mockVideoRect = { top: 145.15625, left: 257.001953125 };
    const mockEvent = { clientX: 650, clientY: 244 }; // outside video area

    moveDecoElement(
      mockVideoRect,
      mockEvent,
      setStickerX,
      setStickerY,
      150,
      96,
    );

    const { stickerX, stickerY } = useEditStore.getState();

    expect(stickerX).toBe(EDIT_VID_WIDTH - 150);
    expect(stickerY).toBe(98.84375);
  });

  it("limits top when element is dragged to outside", () => {
    const { setStickerX, setStickerY } = useEditStore.getState();
    const mockVideoRect = { top: 145.15625, left: 257.001953125 };
    const mockEvent = { clientX: 332, clientY: -100 }; // clientY is on the middle of sticker

    moveDecoElement(
      mockVideoRect,
      mockEvent,
      setStickerX,
      setStickerY,
      150,
      96,
    );

    const { stickerX, stickerY } = useEditStore.getState();

    expect(stickerX).toBe(74.998046875);
    expect(stickerY).toBe(0);
  });

  it("limits bottom when element is dragged to outside", () => {
    const { setStickerX, setStickerY } = useEditStore.getState();
    const mockVideoRect = { top: 145.15625, left: 257.001953125 };
    const mockEvent = { clientX: 332, clientY: 800 }; // clientY is on the middle of sticker

    moveDecoElement(
      mockVideoRect,
      mockEvent,
      setStickerX,
      setStickerY,
      150,
      96,
    );

    const { stickerX, stickerY } = useEditStore.getState();

    expect(stickerX).toBe(74.998046875);
    expect(stickerY).toBe(EDIT_VID_HEIGHT - 96);
  });

  it("limits right bottom side of corner when element is dragged to outside", () => {
    const { setStickerX, setStickerY } = useEditStore.getState();
    const mockVideoRect = { top: 145.15625, left: 257.001953125 };
    const mockEvent = { clientX: 650, clientY: 800 }; // outside of right bottom side of corner

    moveDecoElement(
      mockVideoRect,
      mockEvent,
      setStickerX,
      setStickerY,
      150,
      96,
    );

    const { stickerX, stickerY } = useEditStore.getState();

    expect(stickerX).toBe(EDIT_VID_WIDTH - 150);
    expect(stickerY).toBe(EDIT_VID_HEIGHT - 96);
  });
});
