export default function calculateElementsCoord(
  videoX,
  videoY,
  cursorX,
  cursorY,
  setElementX,
  setElementY,
  setIsDragging,
) {
  const currentXBasedOnVideoArea = cursorX - videoX;
  const currentYBasedOnVideoArea = cursorY - videoY;

  if (currentXBasedOnVideoArea > 250 || currentYBasedOnVideoArea > 586) {
    setIsDragging(false);
    return;
  }

  setElementX(currentXBasedOnVideoArea);
  setElementY(currentYBasedOnVideoArea);
}
