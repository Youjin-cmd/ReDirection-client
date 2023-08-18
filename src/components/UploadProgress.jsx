import CompleteIcon from "../shared/CompleteIcon";
import LoadingSpinner from "../shared/LoadingSpinner";
import useProgressStore from "../store/progress";

function UploadProgress() {
  const { uploadStatus } = useProgressStore();

  return (
    <>
      {uploadStatus && (
        <li className="flex mb-3 opacity-100">
          {uploadStatus !== 100 ? (
            <>
              <LoadingSpinner />
              Uploading video
            </>
          ) : (
            <>
              <CompleteIcon />
              Uploading video complete
            </>
          )}
        </li>
      )}
    </>
  );
}

export default UploadProgress;
