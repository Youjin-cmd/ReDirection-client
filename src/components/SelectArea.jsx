import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../shared/Button";

const baseURL = import.meta.env.VITE_BASE_URL;
import Loading from "./Loading";
import useProgressStore from "../store/progress";

function SelectArea() {
  const location = useLocation();
  const navigate = useNavigate();

  const { url, startPixelArray } = location.state;
  const { showLoading, setShowLoading, setCropStatus } = useProgressStore();

  async function handleClickConvert() {
    setCropStatus("in progress");
    const response = await axios.post(`${baseURL}/video/crop`, startPixelArray);

    if (response.data.success) {
      setCropStatus("done");

      setTimeout(() => {
        navigate("/result", {
          state: {
            url: response.data.url,
            startPixelArray: response.data.startPixelArray,
          },
        });

        setShowLoading(false);
        setCropStatus(false);
      }, "1000");
    }
  }

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div className="flex justify-center items-center mb-10">
        <video controls width="1000">
          <source src={url} type="video/webm" />
          Download the
          <a href={url}>MP4</a>
          video.
        </video>
        {showLoading && <Loading />}
      </div>
      <Button
        className="h-12 w-36 rounded-xl bg-blue text-xl text-white hover:bg-blueHover"
        onClick={handleClickConvert}
      >
        convert
      </Button>
    </div>
  );
}

export default SelectArea;
