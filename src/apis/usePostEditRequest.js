import { useNavigate } from "react-router-dom";
import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;
import CONSTANT from "../constants/constant";
const { ONE_SECOND } = CONSTANT;

import useProgressStore from "../store/progress";
import useEditStore from "../store/edit";

function usePostEditRequest() {
  const navigate = useNavigate();
  const { setShowLoading, setEditStatus, resetAllStatus } = useProgressStore();
  const { fontCoord, stickerCoord, fontColor, fontBg, fontWidth, fontContent } =
    useEditStore();

  async function postEditRequest(selectedSquares) {
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
    } catch (error) {
      resetAllStatus();

      navigate("/error", {
        state: {
          errorCode: error.response.status,
          errorText: error.response.data.customMessage,
        },
      });
    }
  }

  return postEditRequest;
}

export default usePostEditRequest;