import { useNavigate } from "react-router-dom";
import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;
import CONSTANT from "../constants/constant";
const { ONE_SECOND } = CONSTANT;

import useProgressStore from "../store/progress";
import useModalStore from "../store/modal";

interface CustomError extends Error {
  response?: {
    data: {
      customMessage: string;
    };
    status: number;
  };
}

function useGetTrialRequest() {
  const navigate = useNavigate();
  const { setShowLoading, setAnalysisStatus, resetAllStatus } =
    useProgressStore();
  const { setShowTrialModal } = useModalStore();

  async function getTrialRequest(trialVideo: string) {
    try {
      setShowLoading(true);
      setAnalysisStatus("in progress");

      const response = await axios.get(`${baseURL}/video/trial/${trialVideo}`);

      if (response.data.success) {
        setAnalysisStatus("done");

        setTimeout(() => {
          resetAllStatus();
          setShowTrialModal(false);

          navigate("/selectArea", {
            state: {
              url: response.data.url,
            },
          });
        }, ONE_SECOND);
      }
    } catch (error: unknown) {
      const customErr = error as CustomError;

      resetAllStatus();
      setShowTrialModal(false);

      navigate("/error", {
        state: {
          errorCode: customErr.response?.status,
          errorText: customErr.response?.data.customMessage,
        },
      });
    }
  }

  return getTrialRequest;
}

export default useGetTrialRequest;
