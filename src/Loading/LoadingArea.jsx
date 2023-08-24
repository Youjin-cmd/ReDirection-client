import PropTypes from "prop-types";

import UploadProgress from "./UploadProgress";
import CropProgress from "./CropProgress";
import AnalysisProgress from "./AnalysisProgress";
import EditProgress from "./EditProgress";

function LoadingArea({ className }) {
  return (
    <ul className={className}>
      <UploadProgress />
      <AnalysisProgress />
      <CropProgress />
      <EditProgress />
    </ul>
  );
}

LoadingArea.propTypes = {
  className: PropTypes.string,
};

export default LoadingArea;
