import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../shared/Button";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const { url } = location.state;
  const downloadLinkRef = useRef();

  useEffect(() => {
    if (downloadLinkRef.current) {
      downloadLinkRef.current.click();
    }
  }, []);

  function handleClickHome() {
    navigate("/");
  }

  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col justify-end items-end min-w-[406px] w-1/3">
        <div className="flex flex-col justify-center items-center">
          <h1 className="mb-10 text-3xl">Result</h1>
          <video controls width="406" autoPlay={true} loop={true} muted>
            <source src={url} type="video/webm" />
            <a ref={downloadLinkRef} href={url} download />
          </video>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col items-center w-[400px] ml-40">
          <img className="w-20 mb-10" src="/assets/download_icon.png" />
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
