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

  const isAboveVideo = currentYBasedOnVideoArea < 0;
  const isLeftOfVideo = currentXBasedOnVideoArea < 0;
  const isRightOfVideo =
    currentXBasedOnVideoArea > EDIT_VID_WIDTH - targetElementWidth;
  const isBelowVideo =
    currentYBasedOnVideoArea > EDIT_VID_HEIGHT - targetElementHeight;

  function setCoordinates(x, y) {
    setElementX(x);
    setElementY(y);
  }

  if (isAboveVideo && isLeftOfVideo) {
    setCoordinates(0, 0);
    return;
  }

  if (isAboveVideo && isRightOfVideo) {
    setCoordinates(EDIT_VID_WIDTH - targetElementWidth, 0);
    return;
  }

  if (isBelowVideo && isLeftOfVideo) {
    setCoordinates(0, EDIT_VID_HEIGHT - targetElementHeight);
    return;
  }

  if (isBelowVideo && isRightOfVideo) {
    setCoordinates(
      EDIT_VID_WIDTH - targetElementWidth,
      EDIT_VID_HEIGHT - targetElementHeight,
    );

    return;
  }

  if (isAboveVideo || isLeftOfVideo || isRightOfVideo || isBelowVideo) {
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
