/* eslint-disable react-hooks/exhaustive-deps */
import { useDropzone } from "react-dropzone";
import usePostVideoRequest from "../apis/usePostVideoRequest";

import useProgressStore from "../store/progress";

import LoadingArea from "../Loading/LoadingArea";

function DropInput() {
  const { showLoading, setUploadStatus } = useProgressStore();
  const postVideoRequest = usePostVideoRequest();

  async function onDrop(acceptedFiles: any[]) {
    const formData = new FormData();
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress: (progressEvent: any) => {
        const progress = (progressEvent.loaded / progressEvent.total) * 100;

        setUploadStatus(progress);
      },
    };

    formData.append("video", acceptedFiles[0]);

    await postVideoRequest(formData, config);
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="flex flex-col justify-center items-center py-10">
      <div
        className="flex flex-col justify-center items-center w-[600px] h-[180px] mb-5 rounded-xl border-dashed border-2 transition ease-in-out border-red bg-lightRed hover:bg-white"
        {...getRootProps()}
      >
        {showLoading && (
          <LoadingArea
            className={
              "absolute flex flex-col justify-center items-center w-[600px] h-[180px] rounded-md bg-white opacity-90"
            }
          />
        )}
        <div className="flex">
          <img
            className="w-12 mr-3"
            src="/assets/cloud_icon.png"
            alt="cloud icon"
          />
          <input {...getInputProps()} />
          {isDragActive ? (
            <h2 className="text-3xl">Drop your video here</h2>
          ) : (
            <h2 className="text-2xl">Click here to upload your video</h2>
          )}
        </div>
      </div>
      <div className="text-center">
        <li className="text-s">
          The app supports .mp4, .mov, .avi, .wmv formatted videos up to 100MB.
        </li>
        <li className="text-s">
          Your files are automatically deleted from the server after 24 hours.
        </li>
      </div>
    </div>
  );
}

export default DropInput;
