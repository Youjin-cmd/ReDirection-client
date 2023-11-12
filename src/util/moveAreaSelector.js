import CONSTANT from "../constants/constant";
const { MINIMUM_WIDTH, ANALYSIS_VIDEO_WIDTH } = CONSTANT;

function moveAreaSelector(
  videoRect,
  event,
  selectorLeft,
  selectorWidth,
  setSelectorLeft,
  setSelectorWidth,
) {
  const videoLeftEdge = videoRect.left;
  const cursorX = event.clientX;
  const clickedCoordOnVideo = cursorX - videoLeftEdge;

  const isLeftOfVideo = cursorX < videoLeftEdge;
  const isRightOfVideo = cursorX > videoLeftEdge + ANALYSIS_VIDEO_WIDTH;
  const isSelectorMinimumSize = selectorWidth < MINIMUM_WIDTH;
  const pushedToLeftEdge = cursorX < videoLeftEdge + MINIMUM_WIDTH;
  const pushedToRightEdge =
    cursorX > videoLeftEdge + ANALYSIS_VIDEO_WIDTH - MINIMUM_WIDTH;
  const leftSideOfSelector =
    clickedCoordOnVideo < selectorLeft + selectorWidth / 2;
  const rightSideOfSelector =
    clickedCoordOnVideo > selectorLeft + selectorWidth / 2;

  if (isLeftOfVideo) {
    setSelectorLeft(0);
    setSelectorWidth(selectorWidth);
    return;
  }

  if (isRightOfVideo) {
    setSelectorWidth(ANALYSIS_VIDEO_WIDTH - selectorLeft);
    return;
  }

  if (isSelectorMinimumSize) {
    if (pushedToLeftEdge) {
      return;
    }

    if (pushedToRightEdge) {
      return;
    }
  }

  if (leftSideOfSelector) {
    setSelectorLeft(clickedCoordOnVideo);
    setSelectorWidth(selectorWidth + selectorLeft - clickedCoordOnVideo);

    if (isSelectorMinimumSize) {
      setSelectorWidth(MINIMUM_WIDTH);
    }
    return;
  }

  if (rightSideOfSelector) {
    setSelectorWidth(clickedCoordOnVideo - selectorLeft);

    if (isSelectorMinimumSize) {
      setSelectorLeft(clickedCoordOnVideo - MINIMUM_WIDTH);
      setSelectorWidth(MINIMUM_WIDTH);
    }
    return;
  }
}

export default moveAreaSelector;
