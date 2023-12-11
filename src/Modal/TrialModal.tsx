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

  window.onkeydown = function (event) {
    if (event.key === "Escape") {
      setShowTrialModal(false);
    }
  };

  async function handleClickSubmit() {
    await getTrialRequest(selectedTrialVideo);
  }

  return (
    <Modal onClick={() => setShowTrialModal(false)}>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl mb-5">Choose a trial video</h1>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center mb-5 md:px-10 md:flex-row">
            <Button
              className={`group p-1 mb-2 md:mr-5
                ${selectedTrialVideo === "cover" && "ring-4 ring-red"}`}
              onClick={() => setSelectedTrialVideo("cover")}
              disabled={showLoading}
            >
              <div className="w-[230px] md:w-[400px]">
                <img
                  className="absolute w-[230px] md:w-[400px] transition ease-in-out group-hover:opacity-0"
                  src="/assets/trial_cover.png"
                />
                <img src="/assets/trial_cover.gif" />
              </div>
            </Button>
            <Button
              className={`group p-1 mb-2 md:mr-5
                ${selectedTrialVideo === "stage" && "ring-4 ring-red"}`}
              onClick={() => setSelectedTrialVideo("stage")}
              disabled={showLoading}
            >
              <div className="w-[230px] md:w-[400px]">
                <img
                  className="absolute w-[230px] md:w-[400px] transition ease-in-out group-hover:opacity-0"
                  width="auto"
                  src="/assets/trial_stage.png"
                />
                <img src="/assets/trial_stage.gif" />
              </div>
            </Button>
            <Button
              className={`group p-1 mb-2
                ${selectedTrialVideo === "wedding" && "ring-4 ring-red"}`}
              onClick={() => setSelectedTrialVideo("wedding")}
              disabled={showLoading}
            >
              <div className="w-[230px] md:w-[400px] bg-red">
                <img
                  className="absolute w-[230px] md:w-[400px] transition ease-in-out group-hover:opacity-0"
                  width="400px"
                  src="/assets/trial_wedding.png"
                />
                <img src="/assets/trial_wedding.gif" />
              </div>
            </Button>
          </div>
          <div className=" flex justify-center relative h-16 w-80">
            {showLoading && (
              <LoadingArea
                className={
                  "absolute flex flex-col justify-center items-center h-16 w-80 rounded-md z-1 bg-white opacity-90"
                }
              />
            )}
            <Button
              className="h-16 w-60 md:w-80 rounded-xl bg-blue text-xl text-white hover:bg-blueHover"
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
