import useEditStore from "../store/edit";
import GrabPointToDrag from "./GrabPointToDrag";

function Sticker() {
  const { selectedSquares, stickerX, stickerY, setIsStickerDragging } =
    useEditStore();

  return (
    <div>
      <img
        key="sticker"
        id="sticker"
        alt="selected sticker"
        className={`peer absolute w-[150px] z-10 select-none`}
        style={{
          left: `${stickerX}px`,
          top: `${stickerY}px`,
        }}
        src={selectedSquares.sticker}
        draggable={false}
      />
      <GrabPointToDrag
        coordX={stickerX}
        coordY={stickerY}
        setIsDragging={setIsStickerDragging}
      />
    </div>
  );
}

export default Sticker;
