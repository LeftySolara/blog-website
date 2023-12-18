import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { PostListItem, PostInfo } from "./PostListItem";

describe("The PostListItem component", () => {
  it("should display the formatted date", () => {
    const postInfo: PostInfo = {
      dateString: "2021-09-01T15:21:39.862Z",
      title: "Example",
      href: "#",
    };

    render(<PostListItem postInfo={postInfo} />);

    const formattedDate = screen.getByText("Sep 01, 2021");
    expect(formattedDate).toBeDefined();
  });
});
