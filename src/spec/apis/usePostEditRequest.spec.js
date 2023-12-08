import axios from "axios";
import usePostEditRequest from "../../apis/usePostEditRequest";

import useProgressStore from "../../store/progress";
import useEditStore from "../../store/edit";

import { waitFor } from "@testing-library/react";

vi.mock("axios");

const mocks = {
  navigate: vi.fn(),
};

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");

  return {
    ...actual,
    useNavigate: () => mocks.navigate,
  };
});

vi.mock("../../store/progress", () => ({
  default: vi.fn(),
  useProgressStore: vi.fn(),
}));

vi.mock("../../store/edit", () => ({
  default: vi.fn(),
  useEditStore: vi.fn(),
}));

useProgressStore.mockReturnValue({
  setShowLoading: vi.fn(),
  setEditStatus: vi.fn(),
  resetAllStatus: vi.fn(),
});

useEditStore.mockReturnValue({
  fontCoord: {
    fontX: 0,
    fontY: 0,
  },
  stickerCoord: {
    stickerX: 0,
    stickerY: 0,
  },
  fontColor: "test",
  fontBg: "test",
  fontWidth: "test",
  fontContent: "test",
});

describe("usePostEditRequest", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("handles successful postEditRequest", async () => {
    const mockedResponse = {
      data: {
        success: true,
        url: "mockedURL",
      },
    };

    axios.post.mockResolvedValue(mockedResponse);

    const postEditRequest = usePostEditRequest();

    await waitFor(
      () => {
        postEditRequest({
          property: "test"
        });

        expect(axios.post).toHaveBeenCalledWith(
          "http://localhost:3000/video/edit",
          {
            selectedDecos: {
              property: "test"
            }
          }
        );

        expect(mocks.navigate).toHaveBeenCalledWith("/result", {
          state: {
            url: "mockedURL",
          },
        });
      },
      { timeout: 2000 },
    );
  });

  it("handles error successfully", async () => {
    const mockedError = {
      response: {
        status: 500,
        data: {
          customMessage: "Error occurred",
        },
      },
    };

    axios.post.mockRejectedValue(mockedError);

    const postEditRequest = usePostEditRequest();

    await waitFor(
      () => {
        postEditRequest("test");

        expect(mocks.navigate).toHaveBeenCalledWith("/error", {
          state: {
            errorCode: 500,
            errorText: "Error occurred",
          },
        });
      },
      { timeout: 2000 },
    );
  });
});