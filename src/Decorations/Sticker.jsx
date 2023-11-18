import useEditStore from "../store/edit";
import GrabPointToDrag from "./GrabPointToDrag";

function Sticker() {
  const {
    selectedSquares,
    stickerCoord,
    setIsDragging,
    setTargetElementScale,
  } = useEditStore();

  function setElementScale() {
    const stickerImg = document.getElementById("selected sticker");

    setTargetElementScale(stickerImg.width, stickerImg.height);
  }

  return (
    <div>
      <img
        id="selected sticker"
        alt="selected sticker"
        className={`peer absolute w-[150px] z-10 select-none`}
        style={{
          left: `${stickerCoord.stickerX}px`,
          top: `${stickerCoord.stickerY}px`,
        }}
        src={selectedSquares.sticker}
        draggable={false}
      />
      <GrabPointToDrag
        coordX={stickerCoord.stickerX}
        coordY={stickerCoord.stickerY}
        elementType="sticker"
        setIsDragging={setIsDragging}
        setElementScale={setElementScale}
      />
    </div>
  );
}

export default Sticker;
