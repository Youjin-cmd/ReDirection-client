import { beforeEach, describe, expect, it } from "vitest";
import useProgressStore from "../../store/progress";

const initialState = useProgressStore.getState();

describe("useProgressStore", () => {
  beforeEach(() => {
    useProgressStore.setState(initialState);
  });

  it("should set showLoading to true", () => {
    const { setShowLoading } = useProgressStore.getState();

    setShowLoading(true);

    const { showLoading } = useProgressStore.getState();

    expect(showLoading).toBe(true);
  });

  it("should set uploadStatus to 'done'", () => {
    const { setUploadStatus } = useProgressStore.getState();

    setUploadStatus("done");

    const { uploadStatus } = useProgressStore.getState();

    expect(uploadStatus).toBe("done");
  });

  it("should set analysisStatus to 'done'", () => {
    const { setAnalysisStatus } = useProgressStore.getState();

    setAnalysisStatus("done");

    const { analysisStatus } = useProgressStore.getState();

    expect(analysisStatus).toBe("done");
  });

  it("should set cropStatus to 'done'", () => {
    const { setCropStatus } = useProgressStore.getState();

    setCropStatus("done");

    const { cropStatus } = useProgressStore.getState();

    expect(cropStatus).toBe("done");
  });

  it("should set editStatus to 'done'", () => {
    const { setEditStatus } = useProgressStore.getState();

    setEditStatus("done");

    const { editStatus } = useProgressStore.getState();

    expect(editStatus).toBe("done");
  });

  it("should reset all progress statuses to their default values", () => {
    const {
      setShowLoading
    } = useProgressStore.getState();

    setShowLoading("test");

    const {
      showLoading: stateBeforeReset,
      resetAllStatus,
    } = useProgressStore.getState();

    expect(stateBeforeReset).toBe("test");

    resetAllStatus();

    const {
      showLoading: stateAfterReset
    } = useProgressStore.getState();

    expect(stateAfterReset).toBe(false);
  });
});
