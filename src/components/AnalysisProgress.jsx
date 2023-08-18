import CompleteIcon from "../shared/CompleteIcon";
import LoadingSpinner from "../shared/LoadingSpinner";
import useProgressStore from "../store/progress";

function AnalysisProgress() {
  const { analysisStatus } = useProgressStore();

  return (
    <>
      {analysisStatus && (
        <li className="flex mb-3 opacity-100">
          {analysisStatus === "in progress" ? (
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

export default AnalysisProgress;
