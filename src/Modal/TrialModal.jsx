import useModalStore from "../store/modal";
import useProgressStore from "../store/progress";
import useGetTrialRequest from "../apis/useGetTrialRequest";

import Modal from "./Modal";
import Button from "../shared/Button";
import LoadingArea from "../Loading/LoadingArea";
import useTrialStore from "../store/trial";

function TrialModal() {
  const { setShowTrialModal } = useModalStore();
  const { selectedTrialVideo, setSelectedTrialVideo } = useTrialStore();
  const { showLoading } = useProgressStore();
  const getTrialRequest = useGetTrialRequest();

  async function handleClickSubmit() {
    await getTrialRequest(selectedTrialVideo);
  }

  return (
    <Modal onClick={() => setShowTrialModal(false)}>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl mb-10">Choose a trial video</h1>
        <div className="flex flex-col items-center">
          <div className="flex mb-10">
            <Button
              className={`p-1 mr-5
                ${selectedTrialVideo === "cover" && "ring-4 ring-red"}`}
              onClick={() => setSelectedTrialVideo("cover")}
              disabled={showLoading}
            >
              <img width="400px" src="/assets/trial_cover.png" />
            </Button>
            <Button
              className={`p-1 mr-5
                ${selectedTrialVideo === "stage" && "ring-4 ring-red"}`}
              onClick={() => setSelectedTrialVideo("stage")}
              disabled={showLoading}
            >
              <img width="400px" src="/assets/trial_stage.png" />
            </Button>
            <Button
              className={`p-1 mr-5
                ${selectedTrialVideo === "wedding" && "ring-4 ring-red"}`}
              onClick={() => setSelectedTrialVideo("wedding")}
              disabled={showLoading}
            >
              <img width="400px" src="/assets/trial_wedding.png" />
            </Button>
          </div>
          <div className="relative h-16 w-80">
            {showLoading && (
              <LoadingArea
                className={
                  "absolute flex flex-col justify-center items-center h-16 w-80 rounded-md z-1 bg-white opacity-90"
                }
              />
            )}
            <Button
              className="h-16 w-80 rounded-xl bg-blue text-xl text-white hover:bg-blueHover"
              onClick={handleClickSubmit}
            >
              confirm
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default TrialModal;
