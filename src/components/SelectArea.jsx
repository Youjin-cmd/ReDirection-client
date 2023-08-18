import { useLocation } from "react-router-dom";

function SelectArea() {
  const location = useLocation();
  const { url, startPixelArray } = location.state;

  return (
    <>
      <div className="flex justify-center items-center h-full">
        <video controls width="1000">
          <source src={url} type="video/webm" />
          Download the
          <a href={url}>MP4</a>
          video.
        </video>
      </div>
    </>
  );
}

export default SelectArea;
