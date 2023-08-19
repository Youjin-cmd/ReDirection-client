import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../shared/Button";

const baseURL = import.meta.env.VITE_BASE_URL;
import LoadingArea from "../Loading/LoadingArea";
import useProgressStore from "../store/progress";

function SelectArea() {
  const navigate = useNavigate();
  const location = useLocation();
  const { url, startPixelArray } = location.state;
  const { showLoading, setShowLoading, setCropStatus } = useProgressStore();

  async function handleClickConvert() {
    setShowLoading(true);
    setCropStatus("in progress");

    const response = await axios.post(`${baseURL}/video/crop`, startPixelArray);

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
      }, "1000");
    }
  }

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <h1 className="mb-10 text-3xl">Select moving area</h1>
      <div className="flex justify-center items-center mb-10">
        <video controls width="1000">
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
