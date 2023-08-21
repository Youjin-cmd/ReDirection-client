import CONSTANT from "../constants/constant";
const { RESULT_WIDTH, FRAMES_TO_SKIP } = CONSTANT;

export default function optimizeStartPixelArray(
  array,
  defaultX,
  defaultW,
  videoWidth,
) {
  const leftEdge = Math.round(defaultX / 10);
  const rightEdge = Math.round((defaultX + defaultW) / 10);

  const arrayWithNarrowedRange = [];
  const arrayAfterOptimization = [];
  const arrayAfterScalingUp = [];

  if (rightEdge - leftEdge <= 35) {
    for (let i = 0; i < array.length; i++) {
      arrayAfterOptimization.push(leftEdge);
    }

    return;
  }

  for (let i = 0; i < array.length; i++) {
    let valueToAdd;

    if (array[i] !== 0) {
      valueToAdd =
        array[i] < leftEdge
          ? leftEdge
          : array[i] >= rightEdge - RESULT_WIDTH / 10
          ? rightEdge - RESULT_WIDTH / 10
          : array[i];
    } else {
      let prevNonZero = i - 1;

      if (prevNonZero < 0) {
        while (array[prevNonZero + 1] === 0) {
          prevNonZero++;
        }

        valueToAdd = array[prevNonZero + 1];
        arrayWithNarrowedRange.push(valueToAdd);
        continue;
      }

      while (prevNonZero >= 0 && array[prevNonZero] === 0) {
        prevNonZero--;
      }

      let nextNonZero = i + 1;
      while (nextNonZero < array.length && array[nextNonZero] === 0) {
        nextNonZero++;
      }

      const middleValue = Math.floor(
        (array[prevNonZero] + array[nextNonZero]) / 2,
      );

      valueToAdd = middleValue;
    }

    arrayWithNarrowedRange.push(valueToAdd);
  }

  for (let i = 0; i < arrayWithNarrowedRange.length - 1; i++) {
    let prevValue = (videoWidth / 100) * arrayWithNarrowedRange[i];
    let nextValue = (videoWidth / 100) * arrayWithNarrowedRange[i + 1];

    let incrementNum = (nextValue - prevValue) / 2;

    arrayAfterScalingUp.push(Math.round(prevValue));

    for (let j = 1; j < 2; j++) {
      arrayAfterScalingUp.push(Math.round(prevValue + incrementNum * j));
    }
  }

  for (let i = 0; i < arrayAfterScalingUp.length; i += FRAMES_TO_SKIP) {
    let prevValue = arrayAfterScalingUp[i];
    let nextValue = 0;
    let count = 1;

    if (i + FRAMES_TO_SKIP < arrayAfterScalingUp.length) {
      nextValue = arrayAfterScalingUp[i + FRAMES_TO_SKIP];
    } else {
      nextValue = arrayAfterScalingUp[arrayAfterScalingUp.length - 1];
    }

    let incrementNum = Math.round((nextValue - prevValue) / FRAMES_TO_SKIP);
    arrayAfterOptimization.push(prevValue);

    for (let j = i + 1; j < i + FRAMES_TO_SKIP; j++) {
      arrayAfterOptimization.push(prevValue + incrementNum * count);
      count++;
    }
  }

  return arrayAfterOptimization;
}
