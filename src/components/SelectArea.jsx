import axios from "axios";
import { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import calculateAreaSelection from "../util/calculateAreaSelection";
import optimizeStartPixelArray from "../util/optimizeStartPixelArray";
import CONSTANT from "../constants/constant";
const { ONE_SECOND, ANALYSIS_VIDEO_WIDTH } = CONSTANT;
const baseURL = import.meta.env.VITE_BASE_URL;

import LoadingArea from "../Loading/LoadingArea";
import useProgressStore from "../store/progress";
import useDragDropStore from "../store/dragDrop";
import Button from "../shared/Button";

function SelectArea() {
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { url, startPixelArray } = location.state;
  const { showLoading, setShowLoading, setCropStatus } = useProgressStore();
  const {
    isDragging,
    setIsDragging,
    defaultX,
    defaultW,
    setDefaultX,
    setDefaultW,
  } = useDragDropStore();

  function handleMouseDown() {
    setIsDragging(true);
  }

  function handleMouseUp() {
    setIsDragging(false);
  }

  function handleMouseMove(event) {
    if (!isDragging) {
      return;
    }

    const videoElement = videoRef.current;

    if (videoElement) {
      const videoRect = videoElement.getBoundingClientRect();
      const videoX = videoRect.left;
      const cursorX = event.clientX;

      calculateAreaSelection(
        cursorX,
        videoX,
        defaultX,
        defaultW,
        setDefaultX,
        setDefaultW,
      );
    }
  }

  async function handleClickConvert() {
    setShowLoading(true);
    setCropStatus("in progress");

    const optimizedVersion = optimizeStartPixelArray(
      startPixelArray,
      defaultX,
      defaultW,
    );

    const response = await axios.post(
      `${baseURL}/video/crop`,
      optimizedVersion,
    );

    if (response.data.success) {
      setCropStatus("done");

      setTimeout(() => {
        setShowLoading(false);
        setCropStatus(false);

        navigate("/result", {
          state: {
            url: response.data.url,
          },
        });
      }, ONE_SECOND);
    }
  }

  return (
    <div
      className="flex flex-col justify-center items-center h-full"
      onMouseUp={handleMouseUp}
      onMouseMove={e => handleMouseMove(e)}
      draggable={false}
    >
      <h1 className="mb-10 text-3xl">Select moving area</h1>
      <div className="relative flex justify-center items-center mb-10">
        <div
          className="absolute ring-8 ring-red bg-red opacity-30"
          style={{
            left: `${defaultX}px`,
            width: `${defaultW}px`,
            height: `560px`,
          }}
        ></div>
        <video
          className="hover:cursor-ew-resize"
          ref={videoRef}
          autoPlay={true}
          loop={true}
          width={ANALYSIS_VIDEO_WIDTH}
          draggable={false}
          onMouseDown={handleMouseDown}
        >
          <source src={url} type="video/webm" />
          Download the
          <a href={url}>MP4</a>
          video.
        </video>
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
          onClick={handleClickConvert}
        >
          convert
        </Button>
      </div>
    </div>
  );
}

export default SelectArea;
