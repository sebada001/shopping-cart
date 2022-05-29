import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const headerElem = screen.getByText(/logo/);
  expect(headerElem.textContent).toBe("logo");
});
