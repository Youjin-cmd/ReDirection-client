import { useLocation, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;
import useProgressStore from "../store/progress";
import useEditStore from "../store/edit";
import calculateElementsCoord from "../util/calculateElementsCoord";
import CONSTANT from "../constants/constant";
const { ONE_SECOND } = CONSTANT;

import Button from "../shared/Button";
import Carousel from "../shared/Carousel";
import LoadingArea from "../Loading/LoadingArea";

function Edit() {
  const videoRef = useRef(null);
  const videoElement = videoRef.current;
  const location = useLocation();
  const navigate = useNavigate();
  const { url } = location.state;
  const { showLoading, setShowLoading, setEditStatus } = useProgressStore();
  const {
    selectedSquares,
    fontArray,
    setFontArray,
    stickerArray,
    setStickerArray,
    isFontDragging,
    setIsFontDragging,
    isStickerDragging,
    setIsStickerDragging,
    fontX,
    fontY,
    setFontX,
    setFontY,
    stickerX,
    stickerY,
    setStickerX,
    setStickerY,
  } = useEditStore();
  const [isMuted, setIsMuted] = useState(false);

  function handleMouseMove(event) {
    if (!isFontDragging && !isStickerDragging) {
      return;
    }

    const videoRect = videoElement.getBoundingClientRect();
    const videoLeftEdge = videoRect.left;
    const videoTopEdge = videoRect.top;
    const cursorX = event.clientX;
    const cursorY = event.clientY;

    if (isFontDragging) {
      calculateElementsCoord(
        videoLeftEdge,
        videoTopEdge,
        cursorX,
        cursorY,
        setFontX,
        setFontY,
        setIsFontDragging,
      );
    }

    if (isStickerDragging) {
      calculateElementsCoord(
        videoLeftEdge,
        videoTopEdge,
        cursorX,
        cursorY,
        setStickerX,
        setStickerY,
        setIsStickerDragging,
      );
    }
  }

  function handleMouseDown(event) {
    if (event.target.id === "sticker") {
      setIsStickerDragging(true);
    }

    if (event.target.id === "font") {
      setIsFontDragging(true);
    }
  }

  function handleMouseUp() {
    setIsStickerDragging(false);
    setIsFontDragging(false);
  }

  function adjustTextareaHeight(event) {
    event.target.style.height = `${event.target.scrollHeight}px`;
  }

  function renderSelectedElements() {
    const renderedElements = [];

    if (selectedSquares.font) {
      renderedElements.push(
        <textarea
          key="font"
          id="font"
          className={`absolute w-[150px] z-10 outline-none text-3xl text-center overflow-hidden resize-none select-none hover:ring-hoverRed hover:ring-2 hover:cursor-move`}
          style={{
            left: `${fontX}px`,
            top: `${fontY}px`,
            background: "transparent",
          }}
          onMouseDown={e => handleMouseDown(e)}
          onMouseUp={handleMouseUp}
          draggable={false}
          defaultValue="TEXT"
          onChange={e => adjustTextareaHeight(e)}
        />,
      );
    }

    if (selectedSquares.sticker) {
      renderedElements.push(
        <img
          key="sticker"
          id="sticker"
          className={`absolute w-[150px] z-10 select-none hover:ring-hoverRed hover:ring-2 hover:cursor-move`}
          style={{
            left: `${stickerX}px`,
            top: `${stickerY}px`,
          }}
          src={selectedSquares.sticker}
          onMouseDown={e => handleMouseDown(e)}
          onMouseUp={handleMouseUp}
          draggable={false}
        />,
      );
    }

    return renderedElements;
  }

  function handleToggleMute() {
    const videoElement = videoRef.current;

    videoElement.muted = !videoElement.muted;
    setIsMuted(videoElement.muted);
  }

  async function handleClickConfirm() {
    if (!selectedSquares.font && !selectedSquares.sticker) {
      setShowLoading(true);
      setEditStatus("done");

      setTimeout(() => {
        setShowLoading(false);
        setEditStatus(false);

        navigate("/result", {
          state: {
            url: url,
          },
        });
      }, ONE_SECOND);

      return;
    }

    setShowLoading(true);
    setEditStatus("in progress");

    const response = await axios.post(`${baseURL}/video/edit`);

    if (response.data.success) {
      setEditStatus("done");

      setTimeout(() => {
        setShowLoading(false);
        setEditStatus(false);

        navigate("/result", {
          state: {
            url: response.data.url,
          },
        });
      }, ONE_SECOND);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <h1 className="m-10 text-3xl">Edit video</h1>
      <div className="flex justify-center items-center w-[1300px] mb-5">
        <Carousel array={fontArray} type="font" setArray={setFontArray} />
        <div className="relative flex justify-center items-center w-[406px] h-[720px]">
          {renderSelectedElements()}
          <Button
            className="absolute top-5 right-4 z-10"
            onClick={handleToggleMute}
          >
            {isMuted ? (
              <img className="w-8" src="/assets/muted_icon.png" />
            ) : (
              <img className="w-8" src="/assets/unmuted_icon.png" />
            )}
          </Button>
          <video
            ref={videoRef}
            autoPlay={true}
            loop={true}
            draggable={false}
            onMouseUp={handleMouseUp}
            onMouseMove={e => handleMouseMove(e)}
          >
            <source src={url} type="video/webm" />
          </video>
        </div>
        <Carousel
          array={stickerArray}
          type="sticker"
          setArray={setStickerArray}
        />
      </div>
      <div className="relative h-16 w-80">
        {showLoading && (
          <LoadingArea
            className={
              "absolute flex flex-col justify-center items-center h-16 w-80 rounded-md z-1 bg-white opacity-90"
            }
          />
        )}
        <Button
          className="h-16 w-80 rounded-xl bg-blue text-xl text-white hover:bg-blueHover"
          onClick={handleClickConfirm}
        >
          confirm
        </Button>
      </div>
    </div>
  );
}

export default Edit;
