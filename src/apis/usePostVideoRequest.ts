import { useNavigate } from "react-router-dom";
import axios, { AxiosRequestConfig } from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;
import CONSTANT from "../constants/constant";
const { ONE_SECOND } = CONSTANT;

import useProgressStore from "../store/progress";

interface CustomError extends Error {
  response?: {
    data: any;
    status: number;
  };
}

function usePostVideoRequest() {
  const navigate = useNavigate();
  const { setShowLoading, setAnalysisStatus, resetAllStatus } =
    useProgressStore();

  async function postVideoRequest(
    formData: FormData,
    config: AxiosRequestConfig,
  ) {
    try {
      setShowLoading(true);
      setAnalysisStatus("in progress");

      const response = await axios.post(
        `${baseURL}/video/preview`,
        formData,
        config,
      );

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
    } catch (error: unknown) {
      const customErr = error as CustomError;
      resetAllStatus();

      navigate("/error", {
        state: {
          errorCode: customErr.response?.status,
          errorText: customErr.response?.data.customMessage,
        },
      });
    }
  }

  return postVideoRequest;
}

export default usePostVideoRequest;
