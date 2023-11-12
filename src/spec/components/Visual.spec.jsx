import { render, screen } from "@testing-library/react";
import Visual from "../../MainItems/Visual";

describe("Visual", () => {
  beforeEach(() => {
    render(
      <Visual />
    );
  });

  it("renders frame image well", () => {
    expect(screen.getByAltText("smartphone frame image")).toBeInTheDocument;
  });

  it("renders main page image well", () => {
    expect(screen.getByAltText("main page image")).toBeInTheDocument;
  });

  it("renders phrase well", () => {
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument;
  });
});
