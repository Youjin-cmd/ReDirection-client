import axios from "axios";
import usePostVideoRequest from "../../apis/usePostVideoRequest";

import useProgressStore from "../../store/progress";

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

useProgressStore.mockReturnValue({
  setShowLoading: vi.fn(),
  setAnalysisStatus: vi.fn(),
  resetAllStatus: vi.fn(),
});

describe("usePostVideoRequest", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("handles successful postVideoRequest", async () => {
    const mockedResponse = {
      data: {
        success: true,
        url: "mockedURL",
      },
    };

    axios.post.mockResolvedValue(mockedResponse);

    const postVideoRequest = usePostVideoRequest();

    await waitFor(
      () => {
        postVideoRequest("test", "test");
        expect(mocks.navigate).toHaveBeenCalledWith("/selectArea", {
          state: {
            url: "mockedURL",
          },
        });

        expect(axios.post).toHaveBeenCalledWith(
          "http://localhost:3000/video/preview",
          "test",
          "test"
        );

        expect(mocks.navigate).toHaveBeenCalledWith("/selectArea", {
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

    const postVideoRequest = usePostVideoRequest();

    await waitFor(
      () => {
        postVideoRequest("test", "test");

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