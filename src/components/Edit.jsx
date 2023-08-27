import { useLocation, useNavigate } from "react-router-dom";
import { useState, useRef, useCallback, useMemo, useEffect } from "react";
import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;
import useProgressStore from "../store/progress";
import useEditStore from "../store/edit";
import CONSTANT from "../constants/constant";
const { ONE_SECOND } = CONSTANT;

import Button from "../shared/Button";
import Carousel from "../Carousel/Carousel";
import LoadingArea from "../Loading/LoadingArea";
import Decorations from "../Decorations/Decorations";

function Edit() {
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
    setIsFontDragging,
    setIsStickerDragging,
    fontX,
    fontY,
    stickerX,
    stickerY,
    fontColor,
    fontBg,
    fontWidth,
    fontContent,
  } = useEditStore();
  const [isMuted, setIsMuted] = useState("muted");
  const videoRef = useRef(null);
  const videoElement = videoRef.current;
  let videoRect = null;
  if (videoElement) {
    videoRect = videoElement.getBoundingClientRect();
  }

  const handleMouseUp = useCallback(() => {
    setIsStickerDragging(false);
    setIsFontDragging(false);
  }, []);

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
            url,
          },
        });
      }, ONE_SECOND);

      return;
    }

    setShowLoading(true);
    setEditStatus("in progress");

    const response = await axios.post(`${baseURL}/video/edit`, {
      typeface: selectedSquares.typeface,
      fontContent,
      fontX: Math.round(fontX),
      fontY: Math.round(fontY),
      fontWidth,
      fontColor,
      fontBg,
      stickerName: selectedSquares.stickerName,
      stickerX: Math.round(stickerX),
      stickerY: Math.round(stickerY),
    });

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
        <div className="relative flex justify-center w-[406px] h-[720px]">
          <Decorations handleMouseUp={handleMouseUp} videoRect={videoRect} />
          <Button
            className="absolute top-5 right-4 z-10"
            onClick={handleToggleMute}
          >
            <div className="flex justify-center items-center w-10 h-10 rounded-full bg-white opacity-80">
              {isMuted ? (
                <img className="w-8" src="/assets/muted_icon.png" />
              ) : (
                <img className="w-8" src="/assets/unmuted_icon.png" />
              )}
            </div>
          </Button>
          <video
            ref={videoRef}
            autoPlay={true}
            loop={true}
            draggable={false}
            onMouseUp={handleMouseUp}
            muted
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
