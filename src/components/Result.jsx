import { useLocation, useNavigate } from "react-router-dom";
import Button from "../shared/Button";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const { url } = location.state;

  function handleClickHome() {
    navigate("/");
  }

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <h1 className="mb-10 text-3xl">Covert done!</h1>
      <div className="flex justify-center items-center mb-10">
        <video controls width="500">
          <source src={url} type="video/webm" />
          Download the
          <a href={url}>MP4</a>
          video.
        </video>
      </div>
      <Button
        className="h-16 w-80 rounded-xl bg-red text-white hover:bg-hoverRed"
        onClick={handleClickHome}
      >
        try with another video?
      </Button>
    </div>
  );
}

export default Result;
