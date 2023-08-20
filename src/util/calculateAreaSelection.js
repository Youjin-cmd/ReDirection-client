import CONSTANT from "../constants/constant";
const { RESULT_WIDTH, ANALYSIS_VIDEO_WIDTH } = CONSTANT;

export default function calculateAreaSelection(
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
    defaultW < RESULT_WIDTH &&
    cursorX > videoX + ANALYSIS_VIDEO_WIDTH - RESULT_WIDTH
  ) {
    return;
  }

  if (defaultW < RESULT_WIDTH && cursorX < videoX + RESULT_WIDTH) {
    return;
  }

  if (clickedCoordOnVideo < defaultX + defaultW / 2) {
    setDefaultX(clickedCoordOnVideo);
    setDefaultW(defaultW + defaultX - clickedCoordOnVideo);

    if (defaultW < RESULT_WIDTH) {
      setDefaultW(RESULT_WIDTH);
    }
  } else {
    setDefaultW(defaultW - defaultX - defaultW + clickedCoordOnVideo);

    if (defaultW < RESULT_WIDTH) {
      setDefaultX(clickedCoordOnVideo - RESULT_WIDTH);
      setDefaultW(RESULT_WIDTH);
    }
  }
}
