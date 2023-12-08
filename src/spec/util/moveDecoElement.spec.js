import { beforeEach, describe, expect, it } from "vitest";
import moveDecoElement from "../../util/moveDecoElement";
import useEditStore from "../../store/edit";

import CONSTANT from "../../constants/constant";
const { EDIT_VID_WIDTH, EDIT_VID_HEIGHT } = CONSTANT;

const initialState = useEditStore.getState();

describe("moveDecoElement", () => {
  beforeEach(() => {
    useEditStore.setState(initialState);
  });

  it("updates fonts coords correctly in normal pattern", () => {
    const { setCoord } = useEditStore.getState();
    const mockVideoRect = { top: 145.15625, left: 257.001953125 };
    const mockEvent = { clientX: 332, clientY: 244 };
    const mockScale = { width: 100, height: 40 };

    moveDecoElement(
      "font",
      mockVideoRect,
      mockEvent,
      setCoord,
      mockScale,
    );

    const { selectedDecos } = useEditStore.getState();

    expect(selectedDecos.font.X).toBe(74.998046875);
    expect(selectedDecos.font.Y).toBe(98.84375);
  });

  it("updates stickers coords correctly in normal pattern", () => {
    const { setCoord } = useEditStore.getState();
    const mockVideoRect = { top: 145.15625, left: 257.001953125 };
    const mockEvent = { clientX: 332, clientY: 244 };
    const mockScale = { width: 150, height: 96 };

    moveDecoElement(
      "sticker",
      mockVideoRect,
      mockEvent,
      setCoord,
      mockScale,
    );

    const { selectedDecos } = useEditStore.getState();

    expect(selectedDecos.sticker.X).toBe(74.998046875);
    expect(selectedDecos.sticker.Y).toBe(98.84375);
  });

  it("limits left side when element is dragged to outside", () => {
    const { setCoord } = useEditStore.getState();
    const mockVideoRect = { top: 145.15625, left: 257.001953125 };
    const mockEvent = { clientX: -100, clientY: 244 }; // outside video area
    const mockScale = { width: 150, height: 96 };

    moveDecoElement(
      "sticker",
      mockVideoRect,
      mockEvent,
      setCoord,
      mockScale,
    );

    const { selectedDecos } = useEditStore.getState();

    expect(selectedDecos.sticker.X).toBe(0);
    expect(selectedDecos.sticker.Y).toBe(98.84375);
  });

  it("limits right side when element is dragged to outside", () => {
    const { setCoord } = useEditStore.getState();
    const mockVideoRect = { top: 145.15625, left: 257.001953125 };
    const mockEvent = { clientX: 650, clientY: 244 }; // outside video area
    const mockScale = { width: 150, height: 96 };

    moveDecoElement(
      "sticker",
      mockVideoRect,
      mockEvent,
      setCoord,
      mockScale,
    );

    const { selectedDecos } = useEditStore.getState();

    expect(selectedDecos.sticker.X).toBe(EDIT_VID_WIDTH - 150);
    expect(selectedDecos.sticker.Y).toBe(98.84375);
  });

  it("limits top when element is dragged to outside", () => {
    const { setCoord } = useEditStore.getState();
    const mockVideoRect = { top: 145.15625, left: 257.001953125 };
    const mockEvent = { clientX: 332, clientY: -100 }; // clientY is on the middle of sticker
    const mockScale = { width: 150, height: 96 };

    moveDecoElement(
      "sticker",
      mockVideoRect,
      mockEvent,
      setCoord,
      mockScale,
    );

    const { selectedDecos } = useEditStore.getState();

    expect(selectedDecos.sticker.X).toBe(74.998046875);
    expect(selectedDecos.sticker.Y).toBe(0);
  });

  it("limits bottom when element is dragged to outside", () => {
    const { setCoord } = useEditStore.getState();
    const mockVideoRect = { top: 145.15625, left: 257.001953125 };
    const mockEvent = { clientX: 332, clientY: 800 }; // clientY is on the middle of sticker
    const mockScale = { width: 150, height: 96 };

    moveDecoElement(
      "sticker",
      mockVideoRect,
      mockEvent,
      setCoord,
      mockScale,
    );

    const { selectedDecos } = useEditStore.getState();

    expect(selectedDecos.sticker.X).toBe(74.998046875);
    expect(selectedDecos.sticker.Y).toBe(EDIT_VID_HEIGHT - 96);
  });

  it("limits right bottom side of corner when element is dragged to outside", () => {
    const { setCoord } = useEditStore.getState();
    const mockVideoRect = { top: 145.15625, left: 257.001953125 };
    const mockEvent = { clientX: 650, clientY: 800 }; // outside of right bottom side of corner
    const mockScale = { width: 150, height: 96 };

    moveDecoElement(
      "sticker",
      mockVideoRect,
      mockEvent,
      setCoord,
      mockScale,
    );

    const { selectedDecos } = useEditStore.getState();

    expect(selectedDecos.sticker.X).toBe(EDIT_VID_WIDTH - 150);
    expect(selectedDecos.sticker.Y).toBe(EDIT_VID_HEIGHT - 96);
  });
});
