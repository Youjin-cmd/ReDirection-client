import CompleteIcon from "../shared/CompleteIcon";
import LoadingSpinner from "../shared/LoadingSpinner";
import useProgressStore from "../store/progress";

function CropProgress() {
  const { cropStatus } = useProgressStore();

  return (
    <>
      {cropStatus && (
        <li className="flex m-3 opacity-100">
          {cropStatus === "in progress" ? (
            <>
              <LoadingSpinner />
              Cropping video
            </>
          ) : (
            <>
              <CompleteIcon />
              Cropping video complete
            </>
          )}
        </li>
      )}
    </>
  );
}

export default CropProgress;
