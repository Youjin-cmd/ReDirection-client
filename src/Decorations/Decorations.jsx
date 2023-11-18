import PropTypes from "prop-types";
import useEditStore from "../store/edit";

import Font from "./Font";
import Sticker from "./Sticker";
import moveDecoElement from "../util/moveDecoElement";

function Decorations({ handleMouseUp, videoRect }) {
  const {
    selectedSquares,
    isDragging,
    setFontCoord,
    setStickerCoord,
    targetElementScale,
  } = useEditStore();

  if (!videoRect) {
    return null;
  }

  function handleMouseMove(event) {
    if (isDragging === "sticker") {
      moveDecoElement(videoRect, event, setStickerCoord, targetElementScale);
    }

    if (isDragging === "font") {
      moveDecoElement(videoRect, event, setFontCoord, targetElementScale);
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
