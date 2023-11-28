import { useNavigate } from "react-router-dom";
import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;
import CONSTANT from "../constants/constant";
const { ONE_SECOND } = CONSTANT;

import useProgressStore from "../store/progress";
import useModalStore from "../store/modal";

function useGetTrialRequest() {
  const navigate = useNavigate();
  const { setShowLoading, setAnalysisStatus, resetAllStatus } =
    useProgressStore();
  const { setShowTrialModal } = useModalStore();

  async function getTrialRequest(trialVideo) {
    try {
      setShowLoading(true);
      setAnalysisStatus("in progress");

      const response = await axios.get(`${baseURL}/video/trial/${trialVideo}`);

      if (response.data.success) {
        setAnalysisStatus("done");

        setTimeout(() => {
          resetAllStatus();

          navigate("/selectArea", {
            state: {
              url: response.data.url,
            },
          });
        }, ONE_SECOND);
      }
    } catch (error) {
      resetAllStatus();
      setShowTrialModal(false);

      navigate("/error", {
        state: {
          errorCode: error.response?.status,
          errorText: error.response?.data.customMessage,
        },
      });
    }
  }

  return getTrialRequest;
}

export default useGetTrialRequest;
