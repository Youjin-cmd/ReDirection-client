import { render } from "@testing-library/react";
import Button from "../../shared/Button";

describe("Button", () => {
  it("renders well", () => {
    const { getByText } = render(<Button className="test" onClick={() => vi.fn()}>this is button</Button>);
    expect(getByText("this is button")).toBeInTheDocument();
  });

  it("class is applied", () => {
    const { getByText } = render(<Button className="some class name" onClick={() => vi.fn()}>this is button</Button>);
    expect(getByText("this is button")).toHaveClass("some class name");
  });
});
