import { render, screen, fireEvent } from "@testing-library/react";
import Edit from "../../components/Edit";

const mocks = {
  navigate: vi.fn(),
  location: { state: "something" },
};

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");

  return {
    ...actual,
    useLocation: () => mocks.location,
    useNavigate: () => mocks.navigate,
  };
});

describe("Edit component", () => {
  it("renders button well", () => {
    render(<Edit />);

    const confirmButton = screen.getByText("confirm");

    expect(confirmButton).toBeInTheDocument();
  });

  it("renders carousels well", () => {
    render(<Edit />);

    const square = screen.getAllByRole("button");
    const noneSelectedHeart = screen.getByAltText("none selected heart");
    const checkedMark = screen.getAllByAltText("checked");

    expect(square[0]).toBeInTheDocument();
    expect(noneSelectedHeart).toBeInTheDocument();
    expect(checkedMark).toHaveLength(2);
  });

  it("selected sticker appears when a square is clicked", () => {
    render(<Edit />);

    const button = screen.getByRole('button', { name: /none selected heart/i });

    fireEvent.click(button);

    const selectedSticker = screen.getByAltText("selected sticker");

    expect(selectedSticker).toBeInTheDocument();
  });
});