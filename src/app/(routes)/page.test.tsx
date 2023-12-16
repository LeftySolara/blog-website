import { expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "@/app/(routes)/page";

it("Home", () => {
  render(<Home />);

  const heading = screen.getByRole("heading", {
    level: 1,
    name: "Hello World!",
  });
  expect(heading).toBeDefined();
});
