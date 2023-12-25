import useEditStore from "../store/edit";

import Font from "./Font";
import Sticker from "./Sticker";
import moveDecoElement from "../util/moveDecoElement";

interface DecorationsProp {
  handleMouseUp: () => void;
  videoRect: DOMRect;
}

function Decorations({ handleMouseUp, videoRect }: DecorationsProp) {
  const { selectedDecos, isDragging, setCoord, targetElementScale } =
    useEditStore();

  function handleMouseMove(event: React.MouseEvent) {
    const newCoord = {
      X: event.clientX,
      Y: event.clientY,
    };

    moveDecoElement(
      isDragging,
      videoRect,
      newCoord,
      setCoord,
      targetElementScale,
    );
  }

  function handleTouchMove(event: React.TouchEvent) {
    const newCoord = {
      X: event.touches[0].clientX,
      Y: event.touches[0].clientY,
    };
    moveDecoElement(
      isDragging,
      videoRect,
      newCoord,
      setCoord,
      targetElementScale,
    );
  }

  return (
    <div
      onMouseUp={isDragging !== "" ? handleMouseUp : undefined}
      onTouchEnd={isDragging !== "" ? handleMouseUp : undefined}
      className={`absolute top-${videoRect.top} left-${videoRect.left} w-[406px] h-[720px] z-10`}
      onMouseMove={isDragging !== "" ? e => handleMouseMove(e) : undefined}
      onTouchMove={isDragging !== "" ? e => handleTouchMove(e) : undefined}
    >
      {selectedDecos.font && <Font />}
      {selectedDecos.sticker && <Sticker />}
    </div>
  );
}

export default Decorations;
