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
    if (videoRef.current) {
      const videoRect = videoRef.current.getBoundingClientRect();
      setVideoRect(videoRect);
    }
  }, [videoRef.current]);

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
          data-testid="video"
          ref={videoRef}
          autoPlay={true}
          loop={true}
          width={ANALYSIS_VIDEO_WIDTH}
          draggable={false}
          playsInline
        >
          <source src={url} type="video/webm" />
          Download the
          <a href={url}>MP4</a>
          video.
        </video>
      </VideoWrapper>
      <h2 className="mb-1">
        Click and drag over the desired segment on the motion heatmap
      </h2>
      <h2 className="mb-10">
        This selected segment will be the area where automatic cropping will
        take place.
      </h2>
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
