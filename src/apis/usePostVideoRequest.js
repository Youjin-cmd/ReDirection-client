import { useNavigate } from "react-router-dom";
import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;
import CONSTANT from "../constants/constant";
const { ONE_SECOND } = CONSTANT;

import useProgressStore from "../store/progress";

function usePostVideoRequest() {
  const navigate = useNavigate();
  const { setShowLoading, setAnalysisStatus, resetAllStatus } =
    useProgressStore();

  async function postVideoRequest(formData, config) {
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
    } catch (error) {
      resetAllStatus();

      navigate("/error", {
        state: {
          errorCode: error.response?.status,
          errorText: error.response?.data.customMessage,
        },
      });
    }
  }

  return postVideoRequest;
}

export default usePostVideoRequest;
