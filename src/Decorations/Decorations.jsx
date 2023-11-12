import PropTypes from "prop-types";
import useEditStore from "../store/edit";

import Font from "./Font";
import Sticker from "./Sticker";
import calculateElementsCoord from "../util/calculateElementsCoord";

function Decorations({ handleMouseUp, videoRect }) {
  const {
    selectedSquares,
    setFontX,
    setFontY,
    isDragging,
    setIsDragging,
    setStickerX,
    setStickerY,
    targetElementWidth,
    targetElementHeight,
  } = useEditStore();

  if (!videoRect) {
    return null;
  }

  function handleMouseMove(event) {
    if (isDragging === "sticker") {
      calculateElementsCoord(
        videoRect,
        event,
        setStickerX,
        setStickerY,
        targetElementWidth,
        targetElementHeight,
      );
    }

    if (isDragging === "font") {
      calculateElementsCoord(
        videoRect,
        event,
        setFontX,
        setFontY,
        targetElementWidth,
        targetElementHeight,
      );
    }
  }

  return (
    <div
      onMouseUp={handleMouseUp}
      className={`absolute top-${videoRect.top} left-${videoRect.left} w-[406px] h-[720px] z-10`}
      onMouseMove={isDragging ? e => handleMouseMove(e) : undefined}
    >
      {selectedSquares.font && <Font />}
      {selectedSquares.sticker && <Sticker />}
    </div>
  );
}

Decorations.propTypes = {
  handleMouseUp: PropTypes.func.isRequired,
  videoRect: PropTypes.any,
};

export default Decorations;
