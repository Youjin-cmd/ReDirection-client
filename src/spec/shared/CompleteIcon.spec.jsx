import { render } from "@testing-library/react";
import CompleteIcon from "../../shared/CompleteIcon";

describe("CompleteIcon", () => {
  it("renders well", () => {
    const { container } = render(<CompleteIcon />);
    const svgEl = container.querySelector("[data-icon='green-check']");
    expect(svgEl.classList.toString()).toContain("text-green");
  });
});
