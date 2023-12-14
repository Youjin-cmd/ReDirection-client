import { useNavigate } from "react-router-dom";
import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;
import CONSTANT from "../constants/constant";
const { ONE_SECOND } = CONSTANT;

import useProgressStore from "../store/progress";

interface DefaultDecotypes {
  name?: string;
  url?: string;
  X?: number;
  Y?: number;
}

interface FontTypes extends DefaultDecotypes {
  fontColor?: string;
  fontBg?: string;
  fontWidth?: number;
  fontContent?: string;
}

interface SelectedDecos {
  font?: FontTypes;
  sticker?: DefaultDecotypes;
  [key: string]: DefaultDecotypes | FontTypes | undefined;
}

interface CustomError extends Error {
  response?: {
    data: {
      customMessage: string;
    };
    status: number;
  };
}

function usePostEditRequest() {
  const navigate = useNavigate();
  const { setShowLoading, setEditStatus, resetAllStatus } = useProgressStore();

  async function postEditRequest(selectedDecos: SelectedDecos) {
    try {
      setShowLoading(true);
      setEditStatus("in progress");

      const response = await axios.post(`${baseURL}/video/edit`, {
        selectedDecos,
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
