import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const headerElem = screen.getByRole("heading");
  expect(headerElem.textContent).toBe("hello");
});
