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
import Selector from "../SelectAreaItems/Selector";
import VideoWrapper from "../SelectAreaItems/SelectAreaWrapper";

function SelectArea() {
  const postCropRequest = usePostCropRequest();
  const navigate = useNavigate();
  const location = useLocation();
  const { url } = location.state;
  const { showLoading } = useProgressStore();
  const {
    isDragging,
    setIsDragging,
    selectorLeft,
    selectorWidth,
    setSelectorLeft,
    setSelectorWidth,
    sensitivity,
    isFixed,
    setIsFixed,
    resetArea,
  } = useSelectAreaStore();
  const { setCurrentPage } = usePageStore();
  const [videoRect, setVideoRect] = useState<DOMRect | undefined>(undefined);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setCurrentPage("Select Area");
    resetArea();

    if (!url) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  function updateDimensions() {
    if (videoRef.current) {
      const videoRect = videoRef.current.getBoundingClientRect();
      setVideoRect(videoRect);
    }
  }

  function handleMouseUp() {
    setIsDragging(false);
  }

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (!videoRect) {
      return;
    }

    const leftEdge = Math.round(selectorLeft / 10);
    const rightEdge = Math.round((selectorLeft + selectorWidth) / 10);
    const isMinimumWidth = rightEdge - leftEdge <= 35;

    if (isMinimumWidth) {
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
      <VideoWrapper>
        <Selector />
        <video
          preload="metadata"
          data-testid="video"
          ref={videoRef}
          autoPlay={true}
          loop={true}
          width={ANALYSIS_VIDEO_WIDTH}
          draggable={false}
          playsInline={true}
        >
          <source src={url} type="video/mp4" />
          Download the
          <a href={url}>MP4</a>
          video.
        </video>
      </VideoWrapper>
      <p className="mb-10 hidden md:block">
        Click and drag over the desired segment on the motion heatmap
        <br />
        This selected segment will be the area where automatic cropping will
      </p>
      <p className="mb-10 block md:hidden">
        Area selection is currently not supported on the mobile device
      </p>
      <OptionSlider />
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
