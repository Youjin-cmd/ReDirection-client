import { useNavigate } from "react-router-dom";
import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;
import CONSTANT from "../constants/constant";
const { ONE_SECOND } = CONSTANT;

import useProgressStore from "../store/progress";
import useEditStore from "../store/edit";

interface CustomError extends Error {
  response?: {
    data: any;
    status: number;
  };
}

function usePostEditRequest() {
  const navigate = useNavigate();
  const { setShowLoading, setEditStatus, resetAllStatus } = useProgressStore();
  const { fontColor, fontBg, fontWidth, fontContent } =
    useEditStore();

  async function postEditRequest(selectedSquares: any) {
    try {
      setShowLoading(true);
      setEditStatus("in progress");

      const response = await axios.post(`${baseURL}/video/edit`, {
        selectedSquares,
        fontContent,
        fontWidth,
        fontColor,
        fontBg,
      });

      if (response.data.success) {
        setEditStatus("done");

        setTimeout(() => {
          resetAllStatus();

          navigate("/result", {
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

  return postEditRequest;
}

export default usePostEditRequest;
