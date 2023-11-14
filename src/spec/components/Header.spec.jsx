import { render, screen, fireEvent, act } from "@testing-library/react";
import Header from "../../components/Header";

import usePageStore from "../../store/page";

const initialState = usePageStore.getState();

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

describe("Header component", () => {
  beforeEach(() => {
    usePageStore.setState(initialState);
    render(<Header />);
  });

  it("renders logo well", () => {
    const logo = screen.getByAltText("logo");

    expect(logo).toBeInTheDocument();
  });

  it("page name is changed well", () => {
    const { setCurrentPage } = usePageStore.getState();

    act(() => {
      setCurrentPage("test")
    });

    const pageName = screen.getByText("test");

    expect(pageName).toBeInTheDocument();
  });

  it("navigates well when logo is clicked", () => {
    const logo = screen.getByAltText("logo");

    fireEvent.mouseDown(logo);

    expect(mocks.navigate).toHaveBeenCalled();
  });
});
