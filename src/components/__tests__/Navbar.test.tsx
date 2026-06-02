import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import Navbar from "@/src/components/Navbar";

describe("Navbar", () => {
  it("renders brand and desktop links", () => {
    render(<Navbar />);

    expect(screen.getByRole("link", { name: "Akmal" })).toHaveAttribute(
      "href",
      "#home"
    );
    expect(screen.getAllByRole("link", { name: "Home" })[0]).toHaveAttribute(
      "href",
      "#home"
    );
    expect(
      screen.getAllByRole("link", { name: "Education" })[0]
    ).toHaveAttribute("href", "#education");
    expect(screen.getAllByRole("link", { name: "Projects" })[0]).toHaveAttribute(
      "href",
      "#projects"
    );
    expect(screen.getAllByRole("link", { name: "Skills" })[0]).toHaveAttribute(
      "href",
      "#skills"
    );
  });

  it("opens and closes mobile menu", async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    const menuButton = screen.getByRole("button", { name: "Toggle menu" });
    expect(screen.queryAllByRole("link", { name: "Education" })).toHaveLength(1);

    await user.click(menuButton);
    expect(screen.getAllByRole("link", { name: "Education" })).toHaveLength(2);

    await user.click(screen.getAllByRole("link", { name: "Education" })[1]);
    expect(screen.queryAllByRole("link", { name: "Education" })).toHaveLength(1);
  });
});
