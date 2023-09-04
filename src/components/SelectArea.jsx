/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import calculateAreaSelection from "../util/calculateAreaSelection";
import CONSTANT from "../constants/constant";
const { ONE_SECOND, ANALYSIS_VIDEO_WIDTH } = CONSTANT;
const baseURL = import.meta.env.VITE_BASE_URL;

import LoadingArea from "../Loading/LoadingArea";
import useProgressStore from "../store/progress";
import useSelectAreaStore from "../store/selectArea";
import usePageStore from "../store/page";
import Button from "../shared/Button";

function SelectArea() {
  const videoRef = useRef(null);
  const videoElement = videoRef.current;
  const navigate = useNavigate();
  const location = useLocation();
  const { url } = location.state;
  const { showLoading, setShowLoading, setCropStatus, resetAllStatus } =
    useProgressStore();
  const {
    isDragging,
    setIsDragging,
    defaultX,
    defaultW,
    setDefaultX,
    setDefaultW,
  } = useSelectAreaStore();
  const { setCurrentPage } = usePageStore();
  const [isFixed, setIsFixed] = useState(false);
  const [sensitivity, setSensitivity] = useState(15);

  useEffect(() => {
    setCurrentPage("Select Area");
  }, []);

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

    const leftEdge = Math.round(defaultX / 10);
    const rightEdge = Math.round((defaultX + defaultW) / 10);

    if (rightEdge - leftEdge <= 35) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }

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

    const response = await axios.post(`${baseURL}/video/crop`, {
      defaultX,
      defaultW,
      isFixed,
      sensitivity,
    });

    if (response.data.success) {
      setCropStatus("done");

      setTimeout(() => {
        resetAllStatus();

        navigate("/edit", {
          state: {
            url: response.data.url,
          },
        });
      }, ONE_SECOND);
    }
  }

  return (
    <div
      className="flex flex-col justify-center items-center p-5 h-full"
      onMouseUp={handleMouseUp}
      onMouseMove={e => handleMouseMove(e)}
      draggable={false}
    >
      <h2 className="mb-10 text-xl">
        Click and drag over the desired segment on the motion heatmap
      </h2>
      <div className="relative flex justify-center items-center mb-10">
        <div
          className="absolute ring-8 ring-red bg-red opacity-30"
          style={{
            left: `${defaultX}px`,
            width: `${defaultW}px`,
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
          onMouseDown={handleMouseDown}
        >
          <source src={url} type="video/webm" />
          Download the
          <a href={url}>MP4</a>
          video.
        </video>
      </div>
      <h2 className="mb-10">
        This selected segment will be the area where automatic cropping will
        take place.
      </h2>
      {!isFixed && (
        <>
          <label htmlFor="sensitivity">sensitivity</label>
          <input
            id="sensitivity"
            className="w-[200px] h-[20px] bg-gray rounded-lg mb-10 hover:cursor-pointer appearance-none"
            type="range"
            min={10}
            max={20}
            step={5}
            defaultValue={15}
            onChange={e => setSensitivity(e.target.value)}
          />
        </>
      )}

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
