import CONSTANT from "../constants/constant";
const { RESULT_WIDTH } = CONSTANT;

export default function optimizeStartPixelArray(array, defaultX, defaultW) {
  const leftEdge = Math.round(defaultX / 10);
  const rightEdge = Math.round((defaultX + defaultW) / 10);

  const arrayWithNarrowedRange = [];
  const arrayAfterOptimization = [];

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

  for (let i = 0; i < arrayWithNarrowedRange.length; i += 5) {
    let prevNumber = arrayWithNarrowedRange[i];
    let nextNumber = 0;
    let count = 1;

    if (i + 5 < arrayWithNarrowedRange.length) {
      nextNumber = arrayWithNarrowedRange[i + 5];
    } else {
      nextNumber = arrayWithNarrowedRange[arrayWithNarrowedRange.length - 1];
    }

    let incrementNum = Math.round((nextNumber - prevNumber) / 5);
    arrayAfterOptimization.push(prevNumber);

    for (let j = i + 1; j < i + 5; j++) {
      arrayAfterOptimization.push(prevNumber + incrementNum * count);
      count++;
    }
  }

  return arrayAfterOptimization;
}
