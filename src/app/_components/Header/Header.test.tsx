import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

beforeEach(() => {
  render(<Header />);
});

describe("The Header component", () => {
  it("Should display the blog's title", () => {
    const title = screen.getByText("The Other Side of the IDE");
    expect(title).toBeDefined();
  });

  it("Should display a link to the home page", () => {
    const homeLink = screen.getByRole("link", { name: "Home" });
    expect(homeLink).toBeDefined();
  });

  it("Should display a link to the posts page", () => {
    const homeLink = screen.getByRole("link", { name: "Posts" });
    expect(homeLink).toBeDefined();
  });

  it("Should display a link to the categories page", () => {
    const homeLink = screen.getByRole("link", { name: "Categories" });
    expect(homeLink).toBeDefined();
  });

  it("Should display a link to the series page", () => {
    const homeLink = screen.getByRole("link", { name: "Series" });
    expect(homeLink).toBeDefined();
  });
});
