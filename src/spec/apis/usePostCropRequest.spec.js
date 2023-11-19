import axios from "axios";
import usePostCropRequest from "../../apis/usePostCropRequest";

import useProgressStore from "../../store/progress";
import useSelectAreaStore from "../../store/selectArea";

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

vi.mock("../../store/selectArea", () => ({
  default: vi.fn(),
  useSelectAreaStore: vi.fn(),
}));

useProgressStore.mockReturnValue({
  setShowLoading: vi.fn(),
  setCropStatus: vi.fn(),
  resetAllStatus: vi.fn(),
});

useSelectAreaStore.mockReturnValue({
  selectorLeft: 0,
  selectorWidth: 20,
});

describe("usePostCropRequest", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("handles successful postCropRequest", async () => {
    const mockedResponse = {
      data: {
        success: true,
        url: "mockedURL",
      },
    };

    axios.post.mockResolvedValue(mockedResponse);

    const postCropRequest = usePostCropRequest();

    await waitFor(
      () => {
        postCropRequest("test", "test");
        expect(mocks.navigate).toHaveBeenCalledWith("/edit", {
          state: {
            url: "mockedURL",
          },
        });

        expect(axios.post).toHaveBeenCalledWith(
          "http://localhost:3000/video/crop",
          {
            isFixed: "test",
            leftEdge: 0,
            rightEdge: 2,
            sensitivity: "test",
          }
        );

        expect(mocks.navigate).toHaveBeenCalledWith("/edit", {
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

    const postCropRequest = usePostCropRequest();

    await waitFor(
      () => {
        postCropRequest(false, 10);

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