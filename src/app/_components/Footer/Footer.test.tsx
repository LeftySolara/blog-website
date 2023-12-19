import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

beforeEach(() => {
  render(<Footer />);
});

describe("The Footer component", () => {
  it("Should display my name and the current year in the copyright line", () => {
    const copyrightLine = screen.getByText(
      `© Julianne Adams ${new Date().getFullYear()}`,
    );

    expect(copyrightLine).toBeDefined();
  });

  it("Should display three social media links", () => {
    const footerLinks = screen.queryAllByRole("link");

    expect(footerLinks).toHaveLength(3);
  });
});
