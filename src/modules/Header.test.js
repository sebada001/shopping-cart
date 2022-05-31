import Header from "./Header";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("Header component", () => {
  it("renders correct heading", () => {
    const { container } = render(<Header />);
    expect(container).toHaveTextContent("Shopping Experts");
  });
  it("doesn't show cart on load", () => {
    render(<Header />);
    const cartArea = screen.getByTestId("testing-cart");
    expect(cartArea).not.toBeVisible();
  });
  it("hide and shows shopping cart total", () => {
    render(<Header />);
    const cartArea = screen.getByTestId("testing-cart");
    const cartImage = screen.getByAltText("cart-image");
    expect(cartArea).not.toBeVisible();
    userEvent.hover(cartImage);
    expect(cartArea).toBeVisible();
    userEvent.unhover(cartImage);
    expect(cartArea).not.toBeVisible();
  });
});
