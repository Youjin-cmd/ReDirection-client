import CONSTANT from "../constants/constant";
const { EDIT_VID_WIDTH, EDIT_VID_HEIGHT } = CONSTANT;

function moveDecoElement(
  type: string,
  videoRect: DOMRect,
  event: React.MouseEvent,
  setCoord: (argument1: string, argument2: number, argument3: number) => void,
  targetElementScale: { width: number; height: number },
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
    setCoord(type, 0, 0);
    return;
  }

  if (isAboveVideo && isRightOfVideo) {
    setCoord(type, EDIT_VID_WIDTH - targetElementWidth, 0);
    return;
  }

  if (isBelowVideo && isLeftOfVideo) {
    setCoord(type, 0, EDIT_VID_HEIGHT - targetElementHeight);
    return;
  }

  if (isBelowVideo && isRightOfVideo) {
    setCoord(
      type,
      EDIT_VID_WIDTH - targetElementWidth,
      EDIT_VID_HEIGHT - targetElementHeight,
    );

    return;
  }

  if (isAboveVideo || isLeftOfVideo || isRightOfVideo || isBelowVideo) {
    setCoord(
      type,
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

  setCoord(type, currentXBasedOnVideoArea, currentYBasedOnVideoArea);
}

export default moveDecoElement;
