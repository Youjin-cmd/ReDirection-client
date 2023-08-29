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
    fontWidth,
    isFontDragging,
    setIsFontDragging,
    isStickerDragging,
    setIsStickerDragging,
    setStickerX,
    setStickerY,
  } = useEditStore();

  if (!videoRect) {
    return null;
  }

  const handleMouseMove = event => {
    if (!isStickerDragging && !isFontDragging) {
      return;
    }

    if (isStickerDragging) {
      calculateElementsCoord(
        "sticker",
        videoRect.left,
        videoRect.top,
        event.clientX,
        event.clientY,
        setStickerX,
        setStickerY,
        setIsStickerDragging,
      );
    }

    if (isFontDragging) {
      calculateElementsCoord(
        "font",
        videoRect.left,
        videoRect.top,
        event.clientX,
        event.clientY,
        setFontX,
        setFontY,
        setIsFontDragging,
        fontWidth,
      );
    }
  };

  return (
    <div
      onMouseUp={handleMouseUp}
      className={`absolute top-${videoRect.top} left-${videoRect.left} w-[406px] h-[720px] z-10`}
      onMouseMove={e => handleMouseMove(e)}
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
