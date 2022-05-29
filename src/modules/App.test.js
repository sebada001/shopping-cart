import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders from header", () => {
  render(<App />);
  const headerElem = screen.getByText(/Shopping Experts/);
  expect(headerElem.textContent).toBe("Shopping Experts");
});

test("renders from shopping area", () => {
  render(<App />);
  const headerElem = screen.getByText(/Watch/);
  expect(headerElem.textContent).toBe("Watch");
});
