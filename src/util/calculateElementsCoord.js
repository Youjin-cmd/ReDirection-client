export default function calculateElementsCoord(
  type,
  videoX,
  videoY,
  cursorX,
  cursorY,
  setElementX,
  setElementY,
  setIsDragging,
  fontWidth,
) {
  const currentXBasedOnVideoArea = cursorX - videoX;
  const currentYBasedOnVideoArea = cursorY - videoY;

  if (type === "font") {
    if (
      406 - fontWidth - currentXBasedOnVideoArea < 0 &&
      720 - 40 - currentYBasedOnVideoArea < 0
    ) {
      return;
    }

    if (406 - fontWidth - currentXBasedOnVideoArea < 0) {
      setElementY(currentYBasedOnVideoArea);
      return;
    }

    if (720 - 40 - currentYBasedOnVideoArea < 0) {
      setElementX(currentXBasedOnVideoArea);
      return;
    }

    setElementX(currentXBasedOnVideoArea);
    setElementY(currentYBasedOnVideoArea);
  }

  if (type === "sticker") {
    if (
      406 - 150 - currentXBasedOnVideoArea < 0 &&
      720 - 135 - currentYBasedOnVideoArea < 0
    ) {
      return;
    }

    if (406 - 150 - currentXBasedOnVideoArea < 0) {
      setElementY(currentYBasedOnVideoArea);
      return;
    }

    if (720 - 135 - currentYBasedOnVideoArea < 0) {
      setElementX(currentXBasedOnVideoArea);
      return;
    }

    setElementX(currentXBasedOnVideoArea);
    setElementY(currentYBasedOnVideoArea);
  }
}
