import CompleteIcon from "../shared/CompleteIcon";
import LoadingSpinner from "../shared/LoadingSpinner";
import useProgressStore from "../store/progress";

function CropProgress() {
  const { cropStatus } = useProgressStore();

  return (
    <>
      {cropStatus && (
        <li className="flex mb-3 opacity-100">
          {cropStatus === "in progress" ? (
            <>
              <LoadingSpinner />
              Analyzing video
            </>
          ) : (
            <>
              <CompleteIcon />
              Analyzing video complete
            </>
          )}
        </li>
      )}
    </>
  );
}

export default CropProgress;
