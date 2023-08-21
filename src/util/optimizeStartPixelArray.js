import CONSTANT from "../constants/constant";
const { RESULT_WIDTH } = CONSTANT;

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

  for (let i = 0; i < arrayAfterScalingUp.length; i += 10) {
    let prevNumber = arrayAfterScalingUp[i];
    let nextNumber = 0;
    let count = 1;

    if (i + 10 < arrayAfterScalingUp.length) {
      nextNumber = arrayAfterScalingUp[i + 10];
    } else {
      nextNumber = arrayAfterScalingUp[arrayAfterScalingUp.length - 1];
    }

    let incrementNum = Math.round((nextNumber - prevNumber) / 10);
    arrayAfterOptimization.push(prevNumber);

    for (let j = i + 1; j < i + 10; j++) {
      arrayAfterOptimization.push(prevNumber + incrementNum * count);
      count++;
    }
  }

  return arrayAfterOptimization;
}
