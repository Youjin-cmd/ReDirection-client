import UploadProgress from "./UploadProgress";
import CropProgress from "./CropProgress";
import AnalysisProgress from "./AnalysisProgress";
import EditProgress from "./EditProgress";

interface LoadingAreaProps {
  className: string;
}

function LoadingArea({ className }: LoadingAreaProps) {
  return (
    <ul className={className}>
      <UploadProgress />
      <AnalysisProgress />
      <CropProgress />
      <EditProgress />
    </ul>
  );
}

export default LoadingArea;
