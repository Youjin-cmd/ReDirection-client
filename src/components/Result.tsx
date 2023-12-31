/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import useEditStore from "../store/edit";
import usePageStore from "../store/page";

import Button from "../shared/Button";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const { url } = location.state;
  const downloadLinkRef = useRef<HTMLAnchorElement>(null);
  const { resetEditData } = useEditStore();
  const { setCurrentPage } = usePageStore();

  useEffect(() => {
    if (downloadLinkRef.current) {
      downloadLinkRef.current.click();
    }

    resetEditData();
    setCurrentPage("Result");
  }, []);

  function handleClickHome() {
    navigate("/");
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-10">
      <div className="flex flex-col items-end">
        <video
          preload="metadata"
          className="min-w-[406px]"
          controls
          width="406"
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
        >
          <source src={url} type="video/mp4" />
          <a ref={downloadLinkRef} href={url} download />
        </video>
      </div>
      <div className="flex flex-col justify-center items-center w-full md:w-[700px] h-[300px] min-w-[500px]">
        <div className="flex flex-col items-center w-[400px]">
          <img
            className="w-20 mb-10"
            src="/assets/download_icon.png"
            alt="download icon"
          />
          <h2 className="mb-10 text-3xl">Your Download will start now</h2>
          <Button className="rounded-xl text-red" onClick={handleClickHome}>
            try with another video?
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Result;
