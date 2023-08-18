import UploadProgress from "./UploadProgress";
import CropProgress from "./CropProgress";
import AnalysisProgress from "./AnalysisProgress";

function Loading() {
  return (
    <ul className="absolute flex flex-col justify-center items-center w-[500px] h-[200px] p-5 m-20 rounded-xl bg-white opacity-90">
      <UploadProgress />
      <AnalysisProgress />
      <CropProgress />
    </ul>
  );
}

export default Loading;
