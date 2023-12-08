import { beforeEach, describe, expect, it } from "vitest";
import useEditStore from "../../store/edit";

const initialState = useEditStore.getState();

describe("useEditStore", () => {
  beforeEach(() => {
    useEditStore.setState(initialState);
  });

  it("should update selectedSquares state when calling setSelectedDecos", () => {
    const { setSelectedDecos } = useEditStore.getState();
    setSelectedDecos(
      "sticker",
      "awesomeFont",
      "test/awesomeFont.svg",
    );

    const { selectedDecos } = useEditStore.getState();

    expect(selectedDecos).toEqual({
      sticker: {
        name: "awesomeFont",
        url: "test/awesomeFont.svg",
        X: 0,
        Y: 0,
      }
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
