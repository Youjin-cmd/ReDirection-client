import { useRef } from "react";
import useEditStore from "../store/edit";
import GrabPointToDrag from "./GrabPointToDrag";

function Sticker() {
  const { selectedDecos, setIsDragging, setTargetElementScale } =
    useEditStore();

  const stickerRef = useRef<HTMLImageElement>(null);

  function setElementScale() {
    if (stickerRef.current) {
      setTargetElementScale(
        stickerRef.current.width,
        stickerRef.current.height,
      );
    }
  }

  return (
    <div>
      <img
        id="selected sticker"
        alt="selected sticker"
        className={`peer absolute w-[150px] z-10 select-none`}
        style={{
          left: `${selectedDecos.sticker!.X}px`,
          top: `${selectedDecos.sticker!.Y}px`,
        }}
        src={selectedDecos.sticker!.url}
        draggable={false}
        ref={stickerRef}
      />
      <GrabPointToDrag
        coordX={selectedDecos.sticker!.X}
        coordY={selectedDecos.sticker!.Y}
        elementType="sticker"
        setIsDragging={setIsDragging}
        setElementScale={setElementScale}
      />
    </div>
  );
}

export default Sticker;
