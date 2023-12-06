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

interface SelectedSquares {
  typeface: string;
  stickerName: string;
}

function usePostEditRequest() {
  const navigate = useNavigate();
  const { setShowLoading, setEditStatus, resetAllStatus } = useProgressStore();
  const { fontCoord, stickerCoord, fontColor, fontBg, fontWidth, fontContent } =
    useEditStore();

  async function postEditRequest(selectedSquares: SelectedSquares) {
    try {
      setShowLoading(true);
      setEditStatus("in progress");

      const response = await axios.post(`${baseURL}/video/edit`, {
        typeface: selectedSquares.typeface,
        fontContent,
        fontX: Math.round(fontCoord.fontX),
        fontY: Math.round(fontCoord.fontY),
        fontWidth,
        fontColor,
        fontBg,
        stickerName: selectedSquares.stickerName,
        stickerX: Math.round(stickerCoord.stickerX),
        stickerY: Math.round(stickerCoord.stickerY),
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
