import { useRef } from "react";
import useEditStore from "../store/edit";

function Decorations() {
  const textareaRef = useRef(null);
  const textareaElement = textareaRef.current;
  const {
    selectedSquares,
    setIsFontDragging,
    setIsStickerDragging,
    fontX,
    fontY,
    stickerX,
    stickerY,
  } = useEditStore();

  function handleMouseDown(type) {
    if (type === "sticker") {
      setIsStickerDragging(true);
    }

    if (type === "font") {
      setIsFontDragging(true);
    }
  }

  function handleMouseUp() {
    setIsStickerDragging(false);
    setIsFontDragging(false);
  }

  function handleClickColor(event) {
    if (event.target.id === "font-red") {
      textareaElement.style.color = "#C32F2F";
    }

    if (event.target.id === "font-white") {
      textareaElement.style.color = "#FFFFFF";
    }

    if (event.target.id === "font-blue") {
      textareaElement.style.color = "#4287f5";
    }

    if (event.target.id === "font-black") {
      textareaElement.style.color = "#000000";
    }
  }

  function handleClickBgColor(event) {
    if (event.target.id === "bg-white") {
      textareaElement.style.background = "#FFFFFF";
    }

    if (event.target.id === "bg-black") {
      textareaElement.style.background = "#000000";
    }

    if (event.target.id === "bg-none") {
      textareaElement.style.background = "transparent";
    }
  }
  return (
    <div>
      {selectedSquares.font && (
        <div>
          <input
            key="font"
            id="font"
            ref={textareaRef}
            className={`peer absolute w-[250px] z-10 outline-none text-3xl text-center overflow-hidden resize-none select-none`}
            style={{
              left: `${fontX}px`,
              top: `${fontY}px`,
              background: "transparent",
              fontFamily: selectedSquares.typeface,
            }}
            onMouseUp={handleMouseUp}
            draggable={false}
            defaultValue="TEXT"
          />
          <div
            className="absolute justify-center items-center w-6 h-6 z-10 rounded-full bg-white hidden select-none hover:flex peer-hover:flex hover:cursor-move"
            style={{
              left: `${fontX - 10}px`,
              top: `${fontY - 10}px`,
            }}
            onMouseDown={e => handleMouseDown("font", e)}
            onMouseUp={handleMouseUp}
            draggable={false}
          >
            <img
              className="w-5 select-none"
              src="/assets/move_icon.png"
              draggable={false}
            />
          </div>
          <div
            className="absolute justify-center w-[250px] h-10 z-10 hidden hover:flex peer-focus:flex"
            style={{
              left: `${fontX}px`,
              top: `${fontY - 45}px`,
            }}
            onMouseUp={handleMouseUp}
          >
            <div
              key="font-red"
              id="font-red"
              className="w-6 h-6 mr-3 rounded-full bg-red"
              onClick={e => handleClickColor(e)}
            />
            <div
              key="font-white"
              id="font-white"
              className="w-6 h-6 mr-3 rounded-full bg-white"
              onClick={e => handleClickColor(e)}
            />
            <div
              key="font-blue"
              id="font-blue"
              className="w-6 h-6 mr-3 rounded-full bg-blue"
              onClick={e => handleClickColor(e)}
            />
            <div
              key="font-black"
              id="font-black"
              className="w-6 h-6 mr-3 rounded-full bg-black"
              onClick={e => handleClickColor(e)}
            />
          </div>
          <div
            className="absolute justify-center w-[250px] h-10 z-10 hidden hover:flex peer-focus:flex"
            style={{
              left: `${fontX}px`,
              top: `${fontY + 45}px`,
            }}
            onMouseUp={handleMouseUp}
          >
            <div
              key="bg-white"
              id="bg-white"
              className="w-6 h-6 mr-3 select-none bg-white text-center"
              onClick={e => handleClickBgColor(e)}
            >
              T
            </div>
            <div
              key="bg-black"
              id="bg-black"
              className="w-6 h-6 mr-3 select-none bg-black text-white text-center"
              onClick={e => handleClickBgColor(e)}
            >
              T
            </div>
            <div
              key="bg-none"
              id="bg-none"
              className="w-6 h-6 mr-3 select-none bg-green text-white text-center"
              onClick={e => handleClickBgColor(e)}
            >
              T
            </div>
          </div>
        </div>
      )}
      {selectedSquares.sticker && (
        <div>
          <img
            key="sticker"
            id="sticker"
            className={`peer absolute w-[150px] z-10 select-none`}
            style={{
              left: `${stickerX}px`,
              top: `${stickerY}px`,
            }}
            src={selectedSquares.sticker}
            onMouseUp={handleMouseUp}
            draggable={false}
          />
          <div
            className="absolute justify-center items-center w-6 h-6 z-10 rounded-full bg-white hidden select-none hover:flex peer-hover:flex hover:cursor-move"
            style={{
              left: `${stickerX - 10}px`,
              top: `${stickerY - 10}px`,
            }}
            onMouseDown={() => handleMouseDown("sticker")}
            onMouseUp={handleMouseUp}
            draggable={false}
          >
            <img
              className="w-5 select-none"
              src="/assets/move_icon.png"
              draggable={false}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Decorations;
