export default function calculateElementsCoord(
  videoX,
  videoY,
  cursorX,
  cursorY,
  setElementX,
  setElementY,
) {
  const currentXBasedOnVideoArea = cursorX - videoX;
  const currentYBasedOnVideoArea = cursorY - videoY;

  setElementX(currentXBasedOnVideoArea);
  setElementY(currentYBasedOnVideoArea);
}
