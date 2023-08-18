import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;
import Loading from "./Loading";

function DropInput() {
  const navigate = useNavigate();
  const [uploadProgress, setUploadProgress] = useState(0);
  const [analysisProgress, setAnalysisProgress] = useState(false);

  const onDrop = async acceptedFiles => {
    const formData = new FormData();
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress: progressEvent => {
        const progress = (progressEvent.loaded / progressEvent.total) * 100;
        setUploadProgress(progress);
      },
    };

    formData.append("video", acceptedFiles[0]);

    const response = await axios.post(
      `${baseURL}/video/analysis`,
      formData,
      config,
    );

    if (response.data.success) {
      setAnalysisProgress(true);
      setTimeout(() => {
        navigate("/selectArea", {
          state: {
            url: response.data.url,
            startPixelArray: response.data.startPixelArray,
          },
        });
      }, "1000");
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      {uploadProgress !== 0 && (
        <Loading
          uploadProgress={uploadProgress}
          analysisProgress={analysisProgress}
        />
      )}
      <div
        className="flex flex-col justify-center items-center w-[500px] h-[200px] p-5 m-20 rounded-xl border-dashed border-2 border-red bg-lightRed hover:bg-white"
        {...getRootProps()}
      >
        <div className="flex mb-3">
          <img
            className="w-12 mr-3"
            src="/assets/cloud_icon.png"
            alt="cloud icon"
          />
          <input {...getInputProps()} />
          {isDragActive ? (
            <p className="text-3xl">Drop your video here</p>
          ) : (
            <p className="text-3xl">Upload your video</p>
          )}
        </div>
        <p className="text-xs">in .mp4 and .mov format</p>
      </div>
    </div>
  );
}

export default DropInput;
