import PropTypes from "prop-types";
import useEditStore from "../store/edit";

import Font from "./Font";
import Sticker from "./Sticker";
import moveDecoElement from "../util/moveDecoElement";

interface Decorations {
  handleMouseUp: () => void;
  videoRect: DOMRect;
}

function Decorations({ handleMouseUp, videoRect }: Decorations) {
  const {
    selectedSquares,
    isDragging,
    setFontCoord,
    setStickerCoord,
    targetElementScale,
  } = useEditStore();

  function handleMouseMove(event: React.MouseEvent) {
    switch (isDragging) {
      case "sticker":
        moveDecoElement(videoRect, event, setStickerCoord, targetElementScale);
        break;
      case "font":
        moveDecoElement(videoRect, event, setFontCoord, targetElementScale);
        break;
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

export default Decorations;
