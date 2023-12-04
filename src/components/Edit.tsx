/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import usePostEditRequest from "../apis/usePostEditRequest";

import useProgressStore from "../store/progress";
import useEditStore from "../store/edit";
import usePageStore from "../store/page";
import CONSTANT from "../constants/constant";
const { ONE_SECOND } = CONSTANT;

import Button from "../shared/Button";
import Carousel from "../Carousel/Carousel";
import LoadingArea from "../Loading/LoadingArea";
import Decorations from "../Decorations/Decorations";

function Edit() {
  const location = useLocation();
  const navigate = useNavigate();
  const postEditReuqest = usePostEditRequest();
  const { url } = location.state;
  const { setCurrentPage } = usePageStore();
  const { showLoading, setShowLoading, setEditStatus, resetAllStatus } =
    useProgressStore();
  const {
    selectedSquares,
    fontArray,
    setFontArray,
    stickerArray,
    setStickerArray,
    setIsDragging,
  } = useEditStore();
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoElement = videoRef.current;
  let videoRect: DOMRect | null = null;

  useEffect(() => {
    setCurrentPage("Edit your video");
  }, []);

  if (videoElement) {
    videoRect = videoElement.getBoundingClientRect();
  }

  function handleMouseUp () {
    setIsDragging(null);
  }

  function handleToggleMute() {
    if (videoElement) {
      setIsMuted(!videoElement.muted);
    }
  }

  async function handleClickConfirm() {
    if (!selectedSquares.font && !selectedSquares.sticker) {
      setShowLoading(true);
      setEditStatus("done");

      setTimeout(() => {
        resetAllStatus();

        navigate("/result", {
          state: {
            url,
          },
        });
      }, ONE_SECOND);

      return;
    }

    await postEditReuqest(selectedSquares);
  }

  return (
    <div
      className="flex flex-col items-center h-full p-5"
      onMouseUp={() => setIsDragging(null)}
    >
      <div className="flex justify-center items-center w-[1300px] mb-5">
        <Carousel type="font" array={fontArray} setArray={setFontArray} />
        <div className="relative flex justify-center w-[406px] h-[720px]">
          <Decorations handleMouseUp={handleMouseUp} videoRect={videoRect} />
          <Button
            className="absolute top-5 right-4 z-10"
            onClick={handleToggleMute}
          >
            <div className="flex justify-center items-center w-10 h-10 rounded-full bg-white opacity-80">
              {isMuted ? (
                <img
                  className="w-8"
                  src="/assets/muted_icon.png"
                  alt="muted icon"
                />
              ) : (
                <img
                  className="w-8"
                  src="/assets/unmuted_icon.png"
                  alt="unmuted icon"
                />
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
          type="sticker"
          array={stickerArray}
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
