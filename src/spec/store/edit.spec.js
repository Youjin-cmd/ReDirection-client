import { beforeEach, describe, expect, it } from "vitest";
import useEditStore from "../../store/edit";

const initialState = useEditStore.getState()

describe("useEditStore", () => {
  beforeEach(() => {
    useEditStore.setState(initialState);
  });

  it("should update selectedSquares state when calling setSelectedSquares", () => {
    const { setSelectedSquares } = useEditStore.getState();

    setSelectedSquares(
      "test/testfont.svg",
      "font",
      "testfont",
      null,
    );

    const { selectedSquares } = useEditStore.getState();

    expect(selectedSquares).toEqual({
      font: "test/testfont.svg",
      sticker: null,
      stickerName: null,
      typeface: "testfont",
    });
  });

  it("should reset all edit data properties to their default values", () => {
    const {
      setIsDragging,
    } = useEditStore.getState();

    setIsDragging("test");

    const {
      isDragging: stateBeforeReset,
      resetEditData
    } = useEditStore.getState();

    expect(stateBeforeReset).toBe("test");

    resetEditData();

    const {
      isDragging: stateAfterReset
    } = useEditStore.getState();

    expect(stateAfterReset).toBe(null);

  });
});
