import { useNavigate } from "react-router-dom";
import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;
import CONSTANT from "../constants/constant";
const { ONE_SECOND } = CONSTANT;

import useProgressStore from "../store/progress";
import useSelectAreaStore from "../store/selectArea";

function usePostCropRequest() {
  const navigate = useNavigate();
  const { setShowLoading, setCropStatus, resetAllStatus } = useProgressStore();
  const { defaultX, defaultW } = useSelectAreaStore();

  async function postCropRequest(isFixed, sensitivity) {
    try {
      setShowLoading(true);
      setCropStatus("in progress");

      const response = await axios.post(`${baseURL}/video/crop`, {
        defaultX,
        defaultW,
        isFixed,
        sensitivity,
      });

      if (response.data.success) {
        setCropStatus("done");

        setTimeout(() => {
          resetAllStatus();

          navigate("/edit", {
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

  return postCropRequest;
}

export default usePostCropRequest;
