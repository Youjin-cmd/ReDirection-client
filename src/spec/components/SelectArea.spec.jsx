import { render, screen, fireEvent, act } from "@testing-library/react";
import SelectArea from "../../components/SelectArea";
import useSelectAreaStore from "../../store/selectArea";

const initialState = useSelectAreaStore.getState();

const mocks = {
  navigate: vi.fn(),
  location: { state: "something" },
  postCropRequest: vi.fn(),
};

vi.mock("../../apis/usePostCropRequest", () => ({
  default: () => mocks.postCropRequest,
}));

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");

  return {
    ...actual,
    useLocation: () => mocks.location,
    useNavigate: () => mocks.navigate,
  };
});

describe("SelectArea component", () => {
  beforeEach(() => {
    useSelectAreaStore.setState(initialState);
    render(<SelectArea />);
  });

  it("renders button well", () => {
    const convertButton = screen.getByText("convert");

    expect(convertButton).toBeInTheDocument();
  });

  it("renders slider and user can change value", () => {
    const slider = screen.getByDisplayValue("15");
    fireEvent.change(slider, { target: { value: "20" } });
    const changedSlider = screen.getByDisplayValue("20");

    expect(changedSlider).toBeInTheDocument();
  });

  it("turn isDragging to 'true' when video is clicked", () => {
    const videoElement = screen.getByTestId("video");

    expect(videoElement).toBeInTheDocument();

    fireEvent.mouseDown(videoElement);

    const { isDragging: stateAfterPressed } = useSelectAreaStore.getState();

    expect(stateAfterPressed).toBe(true);

    fireEvent.mouseUp(videoElement);

    const { isDragging: stateAfterReleased } = useSelectAreaStore.getState();

    expect(stateAfterReleased).toBe(false);
  });

  it("selector shows a text 'fixed' when status isFixed becomes true", () => {
    const { setIsFixed } = useSelectAreaStore.getState();

    act(() => {
      setIsFixed(true);
    });

    const fixedSlider = screen.getByText("fixed");

    expect(fixedSlider).toBeInTheDocument();
  });

  it("postCropRequest is called when confirm is pressed", () => {
    const convertButton = screen.getByText("convert");

    fireEvent.mouseDown(convertButton);

    expect(mocks.postCropRequest).toHaveBeenCalled();
  });
});
