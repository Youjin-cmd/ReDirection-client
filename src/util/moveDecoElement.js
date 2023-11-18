import CONSTANT from "../constants/constant";
const { EDIT_VID_WIDTH, EDIT_VID_HEIGHT } = CONSTANT;

function moveDecoElement(
  videoRect,
  event,
  setElementCoord,
  targetElementScale,
) {
  const videoTopEdge = videoRect.top;
  const videoLeftEdge = videoRect.left;
  const cursorX = event.clientX;
  const cursorY = event.clientY;
  const currentXBasedOnVideoArea = cursorX - videoLeftEdge;
  const currentYBasedOnVideoArea = cursorY - videoTopEdge;
  const targetElementWidth = targetElementScale.width;
  const targetElementHeight = targetElementScale.height;

  const isAboveVideo = currentYBasedOnVideoArea < 0;
  const isLeftOfVideo = currentXBasedOnVideoArea < 0;
  const isRightOfVideo =
    currentXBasedOnVideoArea > EDIT_VID_WIDTH - targetElementWidth;
  const isBelowVideo =
    currentYBasedOnVideoArea > EDIT_VID_HEIGHT - targetElementHeight;

  if (isAboveVideo && isLeftOfVideo) {
    setElementCoord(0, 0);
    return;
  }

  if (isAboveVideo && isRightOfVideo) {
    setElementCoord(EDIT_VID_WIDTH - targetElementWidth, 0);
    return;
  }

  if (isBelowVideo && isLeftOfVideo) {
    setElementCoord(0, EDIT_VID_HEIGHT - targetElementHeight);
    return;
  }

  if (isBelowVideo && isRightOfVideo) {
    setElementCoord(
      EDIT_VID_WIDTH - targetElementWidth,
      EDIT_VID_HEIGHT - targetElementHeight,
    );

    return;
  }

  if (isAboveVideo || isLeftOfVideo || isRightOfVideo || isBelowVideo) {
    setElementCoord(
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

  setElementCoord(currentXBasedOnVideoArea, currentYBasedOnVideoArea);
}

export default moveDecoElement;
