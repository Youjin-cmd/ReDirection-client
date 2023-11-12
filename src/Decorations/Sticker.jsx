import useEditStore from "../store/edit";
import GrabPointToDrag from "./GrabPointToDrag";

function Sticker() {
  const {
    selectedSquares,
    stickerX,
    stickerY,
    setIsDragging,
    setTargetElementWidth,
    setTargetElementHeight,
  } = useEditStore();

  function setElementScale() {
    const stickerImg = document.getElementById("selected sticker");

    setTargetElementWidth(stickerImg.width);
    setTargetElementHeight(stickerImg.height);
  }

  return (
    <div>
      <img
        id="selected sticker"
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
        elementType="sticker"
        setIsDragging={setIsDragging}
        setElementScale={setElementScale}
      />
    </div>
  );
}

export default Sticker;
