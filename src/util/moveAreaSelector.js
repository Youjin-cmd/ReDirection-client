import CONSTANT from "../constants/constant";
const { MINIMUM_WIDTH, ANALYSIS_VIDEO_WIDTH } = CONSTANT;

function moveAreaSelector(
  cursorX,
  videoX,
  defaultX,
  defaultW,
  setDefaultX,
  setDefaultW,
) {
  const clickedCoordOnVideo = cursorX - videoX;

  if (cursorX < videoX || cursorX > videoX + ANALYSIS_VIDEO_WIDTH) {
    return;
  }

  if (
    defaultW < MINIMUM_WIDTH &&
    cursorX > videoX + ANALYSIS_VIDEO_WIDTH - MINIMUM_WIDTH
  ) {
    return;
  }

  if (defaultW < MINIMUM_WIDTH && cursorX < videoX + MINIMUM_WIDTH) {
    return;
  }

  if (clickedCoordOnVideo < defaultX + defaultW / 2) {
    setDefaultX(clickedCoordOnVideo);
    setDefaultW(defaultW + defaultX - clickedCoordOnVideo);

    if (defaultW < MINIMUM_WIDTH) {
      setDefaultW(MINIMUM_WIDTH);
    }
  } else {
    setDefaultW(defaultW - defaultX - defaultW + clickedCoordOnVideo);

    if (defaultW < MINIMUM_WIDTH) {
      setDefaultX(clickedCoordOnVideo - MINIMUM_WIDTH);
      setDefaultW(MINIMUM_WIDTH);
    }
  }
}

export default moveAreaSelector;
