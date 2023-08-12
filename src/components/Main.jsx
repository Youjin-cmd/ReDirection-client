import axios from "axios";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";

const baseURL = import.meta.env.VITE_BASE_URL;

function Main() {
  const navigate = useNavigate();

  const onDrop = useCallback(async acceptedFiles => {
    const formData = new FormData();
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    formData.append("video", acceptedFiles[0]);

    const response = await axios.post(
      `${baseURL}/video/analysis`,
      formData,
      config,
    );

    if (response.data.success) {
      navigate("/analysis");
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="flex items-center h-full">
      <div className="relative flex-none w-[1000px]">
        <img
          className="w-full"
          src="/assets/main_image_1_dog.png"
          alt="dog image"
        />
        <img
          className="absolute top-[-25px] left-[530px] w-[300px]"
          src="/assets/image_rectangle.svg"
        />
      </div>
      <div className="flex justify-center items-center w-full h-full">
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
          <p className="text-xs">in .mp4 format</p>
        </div>
      </div>
    </div>
  );
}

export default Main;
