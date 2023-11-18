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
    const { setFontCoord } = useEditStore.getState();
    const mockVideoRect = { top: 145.15625, left: 257.001953125 };
    const mockEvent = { clientX: 332, clientY: 244 };
    const mockScale = { width: 100, height: 40 };

    moveDecoElement(
      mockVideoRect,
      mockEvent,
      setFontCoord,
      mockScale,
    );

    const { fontCoord } = useEditStore.getState();

    expect(fontCoord.fontX).toBe(74.998046875);
    expect(fontCoord.fontY).toBe(98.84375);
  });

  it("updates stickers coords correctly in normal pattern", () => {
    const { setStickerCoord } = useEditStore.getState();
    const mockVideoRect = { top: 145.15625, left: 257.001953125 };
    const mockEvent = { clientX: 332, clientY: 244 };
    const mockScale = { width: 150, height: 96 };

    moveDecoElement(
      mockVideoRect,
      mockEvent,
      setStickerCoord,
      mockScale,
    );

    const { stickerCoord } = useEditStore.getState();

    expect(stickerCoord.stickerX).toBe(74.998046875);
    expect(stickerCoord.stickerY).toBe(98.84375);
  });

  it("limits left side when element is dragged to outside", () => {
    const { setStickerCoord } = useEditStore.getState();
    const mockVideoRect = { top: 145.15625, left: 257.001953125 };
    const mockEvent = { clientX: -100, clientY: 244 }; // outside video area
    const mockScale = { width: 150, height: 96 };

    moveDecoElement(
      mockVideoRect,
      mockEvent,
      setStickerCoord,
      mockScale,
    );

    const { stickerCoord } = useEditStore.getState();

    expect(stickerCoord.stickerX).toBe(0);
    expect(stickerCoord.stickerY).toBe(98.84375);
  });

  it("limits right side when element is dragged to outside", () => {
    const { setStickerCoord } = useEditStore.getState();
    const mockVideoRect = { top: 145.15625, left: 257.001953125 };
    const mockEvent = { clientX: 650, clientY: 244 }; // outside video area
    const mockScale = { width: 150, height: 96 };

    moveDecoElement(
      mockVideoRect,
      mockEvent,
      setStickerCoord,
      mockScale,
    );

    const { stickerCoord } = useEditStore.getState();

    expect(stickerCoord.stickerX).toBe(EDIT_VID_WIDTH - 150);
    expect(stickerCoord.stickerY).toBe(98.84375);
  });

  it("limits top when element is dragged to outside", () => {
    const { setStickerCoord } = useEditStore.getState();
    const mockVideoRect = { top: 145.15625, left: 257.001953125 };
    const mockEvent = { clientX: 332, clientY: -100 }; // clientY is on the middle of sticker
    const mockScale = { width: 150, height: 96 };

    moveDecoElement(
      mockVideoRect,
      mockEvent,
      setStickerCoord,
      mockScale,
    );

    const { stickerCoord } = useEditStore.getState();

    expect(stickerCoord.stickerX).toBe(74.998046875);
    expect(stickerCoord.stickerY).toBe(0);
  });

  it("limits bottom when element is dragged to outside", () => {
    const { setStickerCoord } = useEditStore.getState();
    const mockVideoRect = { top: 145.15625, left: 257.001953125 };
    const mockEvent = { clientX: 332, clientY: 800 }; // clientY is on the middle of sticker
    const mockScale = { width: 150, height: 96 };

    moveDecoElement(
      mockVideoRect,
      mockEvent,
      setStickerCoord,
      mockScale,
    );

    const { stickerCoord } = useEditStore.getState();

    expect(stickerCoord.stickerX).toBe(74.998046875);
    expect(stickerCoord.stickerY).toBe(EDIT_VID_HEIGHT - 96);
  });

  it("limits right bottom side of corner when element is dragged to outside", () => {
    const { setStickerCoord } = useEditStore.getState();
    const mockVideoRect = { top: 145.15625, left: 257.001953125 };
    const mockEvent = { clientX: 650, clientY: 800 }; // outside of right bottom side of corner
    const mockScale = { width: 150, height: 96 };

    moveDecoElement(
      mockVideoRect,
      mockEvent,
      setStickerCoord,
      mockScale,
    );

    const { stickerCoord } = useEditStore.getState();

    expect(stickerCoord.stickerX).toBe(EDIT_VID_WIDTH - 150);
    expect(stickerCoord.stickerY).toBe(EDIT_VID_HEIGHT - 96);
  });
});
