import CONSTANT from "../constants/constant";
const { EDIT_VID_WIDTH, EDIT_VID_HEIGHT } = CONSTANT;

function moveDecoElement(
  videoRect,
  event,
  setElementX,
  setElementY,
  targetElementWidth,
  targetElementHeight,
) {
  const videoTopEdge = videoRect.top;
  const videoLeftEdge = videoRect.left;
  const cursorX = event.clientX;
  const cursorY = event.clientY;
  const currentXBasedOnVideoArea = cursorX - videoLeftEdge;
  const currentYBasedOnVideoArea = cursorY - videoTopEdge;

  const isAboveCanvas = currentYBasedOnVideoArea < 0;
  const isLeftOfCanvas = currentXBasedOnVideoArea < 0;
  const isRightOfCanvas =
    currentXBasedOnVideoArea > EDIT_VID_WIDTH - targetElementWidth;
  const isBelowCanvas =
    currentYBasedOnVideoArea > EDIT_VID_HEIGHT - targetElementHeight;

  function setCoordinates(x, y) {
    setElementX(x);
    setElementY(y);
  }

  if (isAboveCanvas && isLeftOfCanvas) {
    setCoordinates(0, 0);
    return;
  }

  if (isAboveCanvas && isRightOfCanvas) {
    setCoordinates(EDIT_VID_WIDTH - targetElementWidth, 0);
    return;
  }

  if (isBelowCanvas && isLeftOfCanvas) {
    setCoordinates(0, EDIT_VID_HEIGHT - targetElementHeight);
    return;
  }

  if (isBelowCanvas && isRightOfCanvas) {
    setCoordinates(
      EDIT_VID_WIDTH - targetElementWidth,
      EDIT_VID_HEIGHT - targetElementHeight,
    );

    return;
  }

  if (isAboveCanvas || isLeftOfCanvas || isRightOfCanvas || isBelowCanvas) {
    setCoordinates(
      Math.max(
        0,
        Math.min(currentXBasedOnVideoArea, EDIT_VID_WIDTH - targetElementWidth),
      ),
      Math.max(
        0,
        Math.min(
          currentYBasedOnVideoArea,
          EDIT_VID_HEIGHT - targetElementHeight,
        ),
      ),
    );

    return;
  }

  setCoordinates(currentXBasedOnVideoArea, currentYBasedOnVideoArea);
}

export default moveDecoElement;
