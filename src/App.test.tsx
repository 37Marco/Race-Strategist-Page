import { fireEvent, render, screen } from "@testing-library/react";

import App from "./App";

describe("Race Strategist website", () => {
  beforeEach(() => {
    window.localStorage.clear();
    delete document.documentElement.dataset.theme;
  });

  it("presents the current MVP and its product boundary", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", {
        name: "See the pit exit before you commit.",
      }),
    ).toBeInTheDocument();
    expect(screen.getByText("MVP in development")).toBeInTheDocument();
    expect(screen.getByText("No automatic pit decisions")).toBeInTheDocument();
    expect(
      screen.getByText("Mandatory repair time unknown"),
    ).toBeInTheDocument();
    expect(screen.getByText(/Prediction unavailable/)).toBeInTheDocument();
    expect(screen.queryByText(/footage coming soon/i)).not.toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Download coming soon" }),
    ).toBeDisabled();
  });

  it("labels future implementations as outside the current MVP", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: "Le Mans Ultimate" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Machine-learning forecasts" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Planned directions, not features of the current MVP."),
    ).toBeInTheDocument();
  });

  it("switches themes and persists the selection", () => {
    render(<App />);

    const themeToggle = screen.getByRole("button", {
      name: "Switch to light theme",
    });
    fireEvent.click(themeToggle);

    expect(document.documentElement).toHaveAttribute("data-theme", "light");
    expect(window.localStorage.getItem("race-strategist-theme")).toBe("light");
    expect(
      screen.getByRole("button", { name: "Switch to dark theme" }),
    ).toBeInTheDocument();
  });
});
