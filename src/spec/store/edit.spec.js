import { beforeEach, describe, expect, it } from "vitest";
import useEditStore from "../../store/edit";

const initialState = useEditStore.getState();

describe("useEditStore", () => {
  beforeEach(() => {
    useEditStore.setState(initialState);
  });

  it("should update selectedSquares state when calling setSelectedSquares", () => {
    const { setSelectedSquares } = useEditStore.getState();

    setSelectedSquares(
      "type",
      "awesomeFont",
      "test/awesomeFont.svg",
    );

    const { selectedSquares } = useEditStore.getState();

    expect(selectedSquares).toEqual({
      type: {
        name: "awesomeFont",
        url: "test/awesomeFont.svg",
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
