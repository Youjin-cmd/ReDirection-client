import { render } from "@testing-library/react";
import LoadingSpinner from "../../shared/LoadingSpinner";

describe("LoadingSpinner", () => {
  it("renders well", () => {
    const { container } = render(<LoadingSpinner />);
    const svgEl = container.querySelector("[data-icon='spinner']");
    expect(svgEl.classList.toString()).toContain("text-gray");
  });
});
