import PropTypes from "prop-types";

import UploadProgress from "./UploadProgress";
import CropProgress from "./CropProgress";
import AnalysisProgress from "./AnalysisProgress";

function LoadingArea({ className }) {
  return (
    <ul className={className}>
      <UploadProgress />
      <AnalysisProgress />
      <CropProgress />
    </ul>
  );
}

LoadingArea.propTypes = {
  className: PropTypes.string,
};

export default LoadingArea;
