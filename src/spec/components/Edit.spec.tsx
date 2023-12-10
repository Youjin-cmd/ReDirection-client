import { render, screen, fireEvent } from "@testing-library/react";
import Edit from "../../components/Edit";

const mocks = {
  navigate: vi.fn(),
  location: { state: "something" },
  postEditReuqest: vi.fn(),
};

vi.mock("../../apis/usePostEditRequest", () => ({
  default: () => mocks.postEditReuqest,
}));

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");

  return {
    ...actual as object,
    useLocation: () => mocks.location,
    useNavigate: () => mocks.navigate,
  };
});

describe("Edit component", () => {
  beforeEach(() => {
    render(<Edit />);
  });

  it("renders button well", () => {
    const confirmButton = screen.getByText("confirm");

    expect(confirmButton).toBeInTheDocument();
  });

  it("renders carousels well", () => {
    const square = screen.getAllByRole("button");
    const noneSelectedHeart = screen.getByAltText("none selected heart");
    const checkedMark = screen.getAllByAltText("checked");

    expect(square[0]).toBeInTheDocument();
    expect(noneSelectedHeart).toBeInTheDocument();
    expect(checkedMark).toHaveLength(2);
  });

  it("selected font appears when a square is clicked", () => {
    const bebasNeue = screen.getByRole("button", { name: /none selected bebasNeue/i });
    fireEvent.mouseDown(bebasNeue);
    const selectedFontInput = screen.getByDisplayValue("TEXT");

    expect(selectedFontInput).toBeInTheDocument();
  });

  it("input value can be changed", () => {
    const hanuman = screen.getByRole("button", { name: /none selected hanuman/i });
    fireEvent.mouseDown(hanuman);
    const selectedFontInput = screen.getByDisplayValue("TEXT");
    fireEvent.change(selectedFontInput, { target: { value: "CHANGED" } });
    const changedInput = screen.getByDisplayValue("CHANGED");

    expect(changedInput).toBeInTheDocument();
  });

  it("selected sticker appears when a square is clicked", () => {
    const heart = screen.getByRole("button", { name: /none selected heart/i });
    fireEvent.mouseDown(heart);
    const selectedSticker = screen.getByAltText("selected sticker");

    expect(selectedSticker).toBeInTheDocument();
  });

  it("postEditRequest is called when confirm is pressed", () => {
    const confirmButton = screen.getByText("confirm");

    fireEvent.mouseDown(confirmButton);

    expect(mocks.postEditReuqest).toHaveBeenCalled();
  });
});
