import { useEffect, useRef } from "react";
import useEditStore from "../store/edit";
import GrabPointToDrag from "./GrabPointToDrag";

function Sticker() {
  const {
    selectedSquares,
    setIsDragging,
    setTargetElementScale,
  } = useEditStore();

  const stickerRef = useRef<HTMLImageElement>(null);

  function setElementScale() {
    if (stickerRef.current) {
      setTargetElementScale(stickerRef.current.width, stickerRef.current.height);
    }
  }

  useEffect(() => {
    setElementScale();
  }, [selectedSquares["sticker"].url]);

  return (
    <div>
      <img
        id="selected sticker"
        alt="selected sticker"
        className={`peer absolute w-[150px] z-10 select-none`}
        style={{
          left: `${selectedSquares["sticker"].X}px`,
          top: `${selectedSquares["sticker"].Y}px`,
        }}
        src={selectedSquares["sticker"].url}
        draggable={false}
        ref={stickerRef}
      />
      <GrabPointToDrag
        coordX={selectedSquares["sticker"].X}
        coordY={selectedSquares["sticker"].Y}
        elementType="sticker"
        setIsDragging={setIsDragging}
        setElementScale={setElementScale}
      />
    </div>
  );
}

export default Sticker;
