import PropTypes from "prop-types";

import CompleteIcon from "../shared/CompleteIcon";
import LoadingSpinner from "../shared/LoadingSpinner";

function Loading({ uploadProgress, analysisProgress }) {
  return (
    <ul className="absolute flex flex-col justify-center items-center w-[500px] h-[200px] p-5 m-20 rounded-xl bg-white opacity-90">
      <li className="flex mb-3 opacity-100">
        {uploadProgress !== 100 ? <LoadingSpinner /> : <CompleteIcon />}
        Uploading your file
      </li>
      <li className="flex opacity-100">
        {!analysisProgress ? <LoadingSpinner /> : <CompleteIcon />}
        Analyzising motion
      </li>
    </ul>
  );
}

Loading.propTypes = {
  uploadProgress: PropTypes.number.isRequired,
  analysisProgress: PropTypes.bool.isRequired,
};

export default Loading;
