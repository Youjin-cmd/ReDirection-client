/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import usePostCropRequest from "../apis/usePostCropRequest";

import CONSTANT from "../constants/constant";
const { ANALYSIS_VIDEO_WIDTH } = CONSTANT;
import moveAreaSelector from "../util/moveAreaSelector";
import useProgressStore from "../store/progress";
import useSelectAreaStore from "../store/selectArea";
import usePageStore from "../store/page";

import LoadingArea from "../Loading/LoadingArea";
import Button from "../shared/Button";
import OptionSlider from "./OptionSlider";

function SelectArea() {
  const postCropRequest = usePostCropRequest();
  const navigate = useNavigate();
  const location = useLocation();
  const { url } = location.state;
  const videoRef = useRef(null);
  const videoElement = videoRef.current;
  let videoRect = null;
  const { showLoading } = useProgressStore();
  const {
    isDragging,
    setIsDragging,
    selectorLeft,
    selectorWidth,
    setSelectorLeft,
    setSelectorWidth,
    resetArea,
  } = useSelectAreaStore();
  const { setCurrentPage } = usePageStore();
  const [isFixed, setIsFixed] = useState(false);
  const [sensitivity, setSensitivity] = useState(15);

  useEffect(() => {
    setCurrentPage("Select Area");
    resetArea();

    if (!url) {
      navigate("/");
    }
  }, []);

  if (videoElement) {
    videoRect = videoElement.getBoundingClientRect();
  }

  function handleMouseDown() {
    setIsDragging(true);
  }

  function handleMouseUp() {
    setIsDragging(false);
  }

  function handleMouseMove(event) {
    const leftEdge = Math.round(selectorLeft / 10);
    const rightEdge = Math.round((selectorLeft + selectorWidth) / 10);

    if (rightEdge - leftEdge <= 35) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }

    moveAreaSelector(
      videoRect,
      event,
      selectorLeft,
      selectorWidth,
      setSelectorLeft,
      setSelectorWidth,
    );
  }

  async function handleClickConvert() {
    await postCropRequest(isFixed, sensitivity);
  }

  return (
    <div
      className="flex flex-col justify-center items-center p-5 h-full"
      onMouseUp={handleMouseUp}
      onMouseMove={isDragging ? e => handleMouseMove(e) : undefined}
      draggable={false}
    >
      <div className="relative flex justify-center items-center min-w-[1000px] mb-10">
        <div
          className="absolute ring-8 ring-red bg-red opacity-30"
          style={{
            left: `${selectorLeft}px`,
            width: `${selectorWidth}px`,
            height: `560px`,
          }}
        >
          {isFixed && (
            <span className="flex justify-center items-center h-full text-4xl text-white">
              fixed
            </span>
          )}
        </div>
        <video
          className="hover:cursor-ew-resize"
          ref={videoRef}
          autoPlay={true}
          loop={true}
          width={ANALYSIS_VIDEO_WIDTH}
          draggable={false}
          onMouseDown={!showLoading ? handleMouseDown : undefined}
        >
          <source src={url} type="video/webm" />
          Download the
          <a href={url}>MP4</a>
          video.
        </video>
      </div>
      <h2 className="mb-1">
        Click and drag over the desired segment on the motion heatmap
      </h2>
      <h2 className="mb-10">
        This selected segment will be the area where automatic cropping will
        take place.
      </h2>
      <OptionSlider isFixed={isFixed} setSensitivity={setSensitivity} />
      <div className="relative h-16 w-80">
        {showLoading && (
          <LoadingArea
            className={
              "absolute flex flex-col justify-center items-center h-16 w-80 rounded-md z-1 bg-white opacity-90"
            }
          />
        )}
        <Button
          id="convert-button"
          className="h-16 w-80 rounded-xl bg-blue text-xl text-white hover:bg-blueHover"
          onClick={handleClickConvert}
        >
          convert
        </Button>
      </div>
    </div>
  );
}

export default SelectArea;
